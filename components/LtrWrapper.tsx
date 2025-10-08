"use client";

export function LtrWrapper({ children }: { children: React.ReactNode }) {
  return <div dir="ltr">{children}</div>;
}

