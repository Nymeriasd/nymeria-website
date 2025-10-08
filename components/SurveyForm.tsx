"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SurveyFormProps {
  labels: {
    company: string;
    email: string;
    phone: string;
    businessStatus: string;
    businessExisting: string;
    businessIdea: string;
    industry: string;
    industryPlaceholder: string;
    industryOptions: { value: string; label: string }[];
    supportType: string;
    supportOptions: { value: string; label: string }[];
    challenge: string;
    challengePlaceholder: string;
    submit: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
  };
  isRtl?: boolean;
}

export function SurveyForm({ labels, isRtl = false }: SurveyFormProps) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
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
          <AlertDescription>{isRtl ? "حاول مرة تانية." : "Try again."}</AlertDescription>
        </Alert>
      )}
      <form className="grid gap-6" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <Label htmlFor="company" className={isRtl ? "text-right" : undefined}>
            {labels.company} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className={isRtl ? "text-right" : undefined}>
            {labels.email} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone" className={isRtl ? "text-right" : undefined}>
            {labels.phone} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            dir={isRtl ? "rtl" : undefined}
            className={isRtl ? "text-right" : undefined}
          />
        </div>

        <div className="grid gap-2">
          <Label className={isRtl ? "text-right" : undefined}>
            {labels.businessStatus} <span className="text-destructive">*</span>
          </Label>
          <div className={`space-y-2 ${isRtl ? "text-right" : ""}`} dir={isRtl ? "rtl" : undefined}>
            <label className={`w-full flex items-center gap-2 cursor-pointer ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
              {isRtl ? <span>{labels.businessExisting}</span> : null}
              <input type="radio" name="status" value="existing" required className="h-4 w-4" />
              {!isRtl ? <span>{labels.businessExisting}</span> : null}
            </label>
            <label className={`w-full flex items-center gap-2 cursor-pointer ${isRtl ? "flex-row-reverse justify-end" : ""}`}>
              {isRtl ? <span>{labels.businessIdea}</span> : null}
              <input type="radio" name="status" value="idea" required className="h-4 w-4" />
              {!isRtl ? <span>{labels.businessIdea}</span> : null}
            </label>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="industry" className={isRtl ? "text-right" : undefined}>
            {labels.industry}
          </Label>
          <select
            id="industry"
            name="industry"
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${isRtl ? "text-right" : ""}`}
            dir={isRtl ? "rtl" : undefined}
          >
            <option value="">{labels.industryPlaceholder}</option>
            {labels.industryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <Label className={isRtl ? "text-right" : undefined}>
            {labels.supportType} <span className="text-destructive">*</span>
          </Label>
          <div className={`space-y-2 ${isRtl ? "text-right" : ""}`} dir={isRtl ? "rtl" : undefined}>
            {labels.supportOptions.map((opt) => (
              <label
                key={opt.value}
                className={`w-full flex items-center gap-2 cursor-pointer ${isRtl ? "flex-row-reverse justify-end" : ""}`}
              >
                {isRtl ? <span>{opt.label}</span> : null}
                <input type="checkbox" name="support" value={opt.value} className="h-4 w-4" />
                {!isRtl ? <span>{opt.label}</span> : null}
              </label>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="challenge" className={isRtl ? "text-right" : undefined}>
            {labels.challenge}
          </Label>
          <Textarea
            id="challenge"
            name="challenge"
            rows={5}
            placeholder={labels.challengePlaceholder}
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

