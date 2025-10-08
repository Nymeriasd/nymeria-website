import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "نيميريا — شريكك التقني لـ ERP والويب والموبايل والاستشارات",
    template: "%s • نيميريا",
  },
  description:
    "نيميريا بتبني أنظمة ERP موثوقة، مواقع وتطبيقات ويب وموبايل، واستشارات تساعدك تكبر.",
  metadataBase: new URL("https://nymeria.local"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "نيميريا — شريكك التقني لـ ERP والويب والموبايل والاستشارات",
    description:
      "حلول متكاملة من الفكرة للتنفيذ: ERP، مواقع وتطبيقات ويب، موبايل، واستشارات.",
    type: "website",
    url: "https://nymeria.local",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
