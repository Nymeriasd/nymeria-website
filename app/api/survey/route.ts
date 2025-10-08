import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
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

    if (!company || !email || !phone || !status) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const supportList = support.length > 0 ? support.join(", ") : "-";

    // Send to team
    await resend.emails.send({
      from: "Nymeria <noreply@nymeria.dev>",
      to: [TO],
      subject: `New survey from ${company}`,
      replyTo: email,
      text: `Company: ${company}\nEmail: ${email}\nPhone: ${phone}\nStatus: ${status}\nIndustry: ${industry || "-"}\nSupport: ${supportList}\n\nChallenge:\n${challenge || "-"}`,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Nymeria <noreply@nymeria.dev>",
      to: [email],
      subject: "We received your survey — Nymeria",
      text: `Hi ${company || "there"},\n\nThanks for submitting your survey. Our team will contact you shortly.\n\nSummary:\nStatus: ${status}\nIndustry: ${industry || "-"}\nSupport: ${supportList}\n\n— Nymeria Team`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}


