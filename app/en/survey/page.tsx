import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SurveyForm } from "@/components/SurveyForm";

export const metadata: Metadata = {
  title: "Survey — Free Tech Consultation",
  description: "Share your situation or idea and we'll follow up with a free consultation.",
};

export default function SurveyPageEn() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Register Interest — Free Tech Consultation
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Many companies paused operations and lost data because there was no proper system or backup.
            </p>
            <p>
              The world changed fast — technology is now core to every business.
            </p>
            <p>
              We&apos;re back with fresh experience to help you rebuild from scratch, or take your idea to launch.
            </p>
            <p className="font-medium text-foreground">
              Fill your details below 👇 and we&apos;ll provide a free consultation and a plan to move forward stronger.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <SurveyForm
              labels={{
                company: "Company / Business name",
                email: "Email",
                phone: "Phone / WhatsApp",
                businessStatus: "Do you have an existing business or a new idea?",
                businessExisting: "Existing business needing technical support",
                businessIdea: "New app/website idea to develop",
                industry: "Industry or activity",
                industryPlaceholder: "Select industry",
                industryOptions: [
                  { value: "trade", label: "Trade" },
                  { value: "industry", label: "Manufacturing" },
                  { value: "services", label: "Services" },
                  { value: "tech", label: "Technology" },
                ],
                supportType: "Type of support needed",
                supportOptions: [
                  { value: "infrastructure", label: "Rebuild technical infrastructure" },
                  { value: "development", label: "Develop or update systems" },
                  { value: "ai", label: "Introduce AI solutions" },
                  { value: "consulting", label: "General tech consulting" },
                  { value: "webapp", label: "Build app / website" },
                  { value: "training", label: "Team training & support" },
                ],
                challenge: "Briefly describe your challenge or idea",
                challengePlaceholder: "Tell us here...",
                submit: "Submit survey",
                successTitle: "Submitted!",
                successMessage: "Thanks, we received your survey and will contact you shortly.",
                errorTitle: "Error!",
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
