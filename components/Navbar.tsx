"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Navbar() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  const links = isEnglish
    ? [
        { href: "/en#services", label: "Services" },
        { href: "/en/survey", label: "Survey" },
        { href: "/en#contact", label: "Contact" },
      ]
    : [
        { href: "/#services", label: "الخدمات" },
        { href: "/survey", label: "الاستبيان" },
        { href: "/#contact", label: "تواصل" },
      ];

  const homeHref = isEnglish ? "/en" : "/";
  const logoText = isEnglish ? "Nymeria" : "نيميريا";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex h-16 items-center justify-between">
        <Link href={homeHref} className="font-semibold text-xl">
          {logoText}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

