"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
    const shouldDark = stored ? stored === "dark" : prefersDark;
    setThemeClass(shouldDark);
  }, []);

  function setThemeClass(dark: boolean) {
    setIsDark(dark);
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.classList.toggle("dark", dark);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setThemeClass(!isDark)}
      aria-label={isDark ? "Switch to light" : "Switch to dark"}
    >
      {isDark ? "☾" : "☀"}
    </Button>
  );
}

export default ThemeToggle;


