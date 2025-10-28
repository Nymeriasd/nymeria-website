import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const TO = process.env.CONTACT_TO_EMAIL || "hibrahim@nymeriaa.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const status = formData.get("status") as string; // existing | idea
    const industry = formData.get("industry") as string;
    const support = formData.getAll("support"); // array of strings
    const challenge = formData.get("challenge") as string;

    console.log("Survey form data received:");
    console.log("Company:", company);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Status:", status);
    console.log("Industry:", industry);
    console.log("Support:", support);
    console.log("Challenge:", challenge);

    if (!company || !email || !phone || !status) {
      console.log("Missing required fields - Company:", !!company, "Email:", !!email, "Phone:", !!phone, "Status:", !!status);
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // Check if SendGrid API key is set
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not set");
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    console.log("Sending survey email to:", TO);
    console.log("From email:", email);

    const supportList = support.length > 0 ? support.join(", ") : "-";

    // Send to team
    await sgMail.send({
      from: "no-reply@nymeriaa.com",
      to: TO,
      subject: `New survey from ${company}`,
      replyTo: email,
      text: `Company: ${company}\nEmail: ${email}\nPhone: ${phone}\nStatus: ${status}\nIndustry: ${industry || "-"}\nSupport: ${supportList}\n\nChallenge:\n${challenge || "-"}`,
    });

    console.log("Team email sent successfully");

    // Send confirmation to user
    await sgMail.send({
      from: "no-reply@nymeriaa.com",
      to: email,
      subject: "We received your survey — Nymeria",
      text: `Hi ${company || "there"},\n\nThanks for submitting your survey. Our team will contact you shortly.\n\nSummary:\nStatus: ${status}\nIndustry: ${industry || "-"}\nSupport: ${supportList}\n\n— Nymeria Team`,
    });

    console.log("Confirmation email sent successfully");

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Survey email sending error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}


