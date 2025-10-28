"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ContactFormProps {
  labels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
  };
  isRtl?: boolean;
}

export function ContactForm({ labels, isRtl = false }: ContactFormProps) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Client-side validation
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setStatus("error");
      setErrorMessage("يرجى ملء جميع الحقول المطلوبة");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        setErrorMessage("");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(result.error || "حدث خطأ غير متوقع");
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
    } catch {
      setStatus("error");
      setErrorMessage("حدث خطأ في الاتصال");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  }

  return (
    <>
      {status === "success" && (
        <Alert variant="success" className="mb-4">
          <AlertTitle>{labels.successTitle}</AlertTitle>
          <AlertDescription>{labels.successMessage}</AlertDescription>
        </Alert>
      )}
      {status === "error" && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>{labels.errorTitle}</AlertTitle>
          <AlertDescription>
            {errorMessage || "حاول مرة تانية أو تواصل معنا مباشرة."}
          </AlertDescription>
        </Alert>
      )}
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="name">{labels.name}</Label>
          <Input
            id="name"
            name="name"
            placeholder={labels.namePlaceholder}
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{labels.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={labels.emailPlaceholder}
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">{labels.message}</Label>
          <Textarea
            id="message"
            name="message"
            placeholder={labels.messagePlaceholder}
            rows={5}
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>
        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? "..." : labels.submit}
        </Button>
      </form>
    </>
  );
}

