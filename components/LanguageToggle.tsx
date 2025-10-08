"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

function swapLocaleInPath(path: string): string {
  // Arabic default paths: "/" and "/survey". English paths are under "/en".
  if (path === "/") return "/en";
  if (path.startsWith("/en")) return path.replace(/^\/en/, "") || "/";
  return `/en${path}`;
}

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isEnglish = pathname?.startsWith("/en");

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => router.push(swapLocaleInPath(pathname || "/"))}
      aria-label={isEnglish ? "العربية" : "English"}
    >
      {isEnglish ? "العربية" : "English"}
    </Button>
  );
}

export default LanguageToggle;


