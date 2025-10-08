import type { Metadata } from "next";
import { LtrWrapper } from "@/components/LtrWrapper";

export const metadata: Metadata = {
  title: {
    default: "Nymeria — Tech Partner for ERP, Web, Mobile, Consultancy",
    template: "%s • Nymeria",
  },
  description:
    "Nymeria builds reliable ERP systems, modern websites, mobile apps, and provides ongoing consulting to help businesses scale.",
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LtrWrapper>{children}</LtrWrapper>;
}


