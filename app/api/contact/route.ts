import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const TO = process.env.CONTACT_TO_EMAIL || "hibrahim@nymeriaa.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    console.log("Form data received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    if (!name || !email || !message) {
      console.log("Missing fields - Name:", !!name, "Email:", !!email, "Message:", !!message);
      const missingFields = [];
      if (!name) missingFields.push("name");
      if (!email) missingFields.push("email");
      if (!message) missingFields.push("message");
      return NextResponse.json({ 
        ok: false, 
        error: `Missing required fields: ${missingFields.join(", ")}` 
      }, { status: 400 });
    }

    // Check if SendGrid API key is set
    if (!process.env.SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY is not set");
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
    }

    console.log("Sending email to:", TO);
    console.log("From email:", email);

    // Send to team
    await sgMail.send({
      from: "no-reply@nymeriaa.com",
      to: TO,
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    console.log("Team email sent successfully");

    // Send confirmation to user
    await sgMail.send({
      from: "no-reply@nymeriaa.com",
      to: email,
      subject: "We received your message — Nymeria",
      text: `Hi ${name || "there"},\n\nThanks for reaching out to Nymeria. We've received your message and will reply shortly.\n\nYour message:\n${message}\n\n— Nymeria Team`,
    });

    console.log("Confirmation email sent successfully");

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}


