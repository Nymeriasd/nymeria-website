import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL || "hibrahim@nymeriaa.com";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Send to team
    await resend.emails.send({
      from: "Nymeria <noreply@nymeria.dev>",
      to: [TO],
      subject: `Contact form: ${name}`,
      replyTo: email,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });

    // Send confirmation to user
    await resend.emails.send({
      from: "Nymeria <noreply@nymeria.dev>",
      to: [email],
      subject: "We received your message — Nymeria",
      text: `Hi ${name || "there"},\n\nThanks for reaching out to Nymeria. We’ve received your message and will reply shortly.\n\nYour message:\n${message}\n\n— Nymeria Team`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}


