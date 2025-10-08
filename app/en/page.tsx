import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";

export default function HomeEn() {
  return (
    <div className="font-sans" dir="ltr">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Badge className="bg-amber-500 text-black">Your Tech Partner</Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Build. Launch. Scale with Nymeria
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We design and ship robust ERP systems, modern websites, performant web apps, mobile apps, and provide ongoing consultancy.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button className="gap-2">
                Start a project <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="outline">
                <a href="#services">View services</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/survey">Take survey</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-muted-foreground">Practical solutions from discovery to delivery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">ERP Systems</h3>
              <p className="mt-2 text-sm text-muted-foreground">Custom ERP to automate operations.</p>
              <p className="mt-1 text-sm text-muted-foreground">Automations & reporting • RBAC & integrations</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">Web Apps & Websites</h3>
              <p className="mt-2 text-sm text-muted-foreground">Fast, accessible, SEO‑ready web.</p>
              <p className="mt-1 text-sm text-muted-foreground">Next.js + CMS • Design systems</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">Mobile Apps</h3>
              <p className="mt-2 text-sm text-muted-foreground">iOS & Android, native feel.</p>
              <p className="mt-1 text-sm text-muted-foreground">Cross‑platform • Offline + push</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px]">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">Consultancy</h3>
              <p className="mt-2 text-sm text-muted-foreground">Audits, roadmaps, leadership.</p>
              <p className="mt-1 text-sm text-muted-foreground">Architecture reviews • Team enablement</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px] lg:col-start-2">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">For Businesses</h3>
              <p className="mt-2 text-sm text-muted-foreground">Startup to enterprise delivery.</p>
              <p className="mt-1 text-sm text-muted-foreground">Fixed‑scope or dedicated teams • Compliance</p>
            </div>
          </Card>
          <Card className="rounded-2xl border border-black/5 dark:border-white/10 bg-card shadow-sm transition hover:shadow-md hover:-translate-y-0.5 overflow-hidden min-h-[200px] lg:col-start-3">
            <div className="p-4 flex h-full flex-col">
              <h3 className="text-lg font-semibold">Maintenance</h3>
              <p className="mt-2 text-sm text-muted-foreground">SLAs, upgrades, ongoing care.</p>
              <p className="mt-1 text-sm text-muted-foreground">Monitoring & performance • Security reviews</p>
            </div>
          </Card>
        </div>
      </section>
      {/* CTA */}
      <section className="border-y bg-secondary/50">
        <div className="container mx-auto px-6 py-14 flex flex-col items-center text-center gap-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Ready to build?</h3>
          <p className="text-muted-foreground max-w-2xl">Tell us about your idea and we’ll get back with a plan, timeline, and cost.</p>
          <Button className="gap-2">Get a free estimate <IconArrowRight className="h-4 w-4" /></Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-semibold">Contact us</h4>
            <p className="mt-2 text-muted-foreground">Share a few details and we’ll follow up shortly.</p>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Nymeria • Crafting reliable software</span>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ContactForm
                labels={{
                  name: "Name",
                  namePlaceholder: "Your name",
                  email: "Email",
                  emailPlaceholder: "you@company.com",
                  message: "Project brief",
                  messagePlaceholder: "Tell us about your ERP, website, app or needs",
                  submit: "Send message",
                  successTitle: "Sent!",
                  successMessage: "Thanks, we received your message and will reply shortly.",
                  errorTitle: "Error!",
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Nymeria</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:underline" href="#services">Services</a>
            <a className="hover:underline" href="/survey">Survey</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


