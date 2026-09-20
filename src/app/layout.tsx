import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/JsonLd";
import { AgentationProvider } from "@/components/AgentationProvider";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#14151D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aura Dental Studio | Clinical Precision & Bespoke Smile Care",
  description:
    "An art-directed multi-speciality dental practice led by Dr. Aria Sharma. Rated 4.9★ with 350+ verified reviews. Clinical precision, advanced digital care, transparent consultation, and gentle treatment in Bandra West, Mumbai.",
  keywords: [
    "Dentist in Mumbai",
    "Dental studio Bandra West",
    "Dentist near Bandra",
    "Aesthetic dentistry Mumbai",
    "Root canal specialist Mumbai",
    "Teeth cleaning and whitening",
    "Dental Implants Mumbai",
    "Aura Dental Studio",
  ],
  authors: [{ name: "Aura Dental Studio" }],
  openGraph: {
    title: "Aura Dental Studio | Bespoke Dental Care",
    description:
      "Modern dentistry rooted in clinical precision and human care. Rated 4.9★ with 350+ verified reviews. Book consultation.",
    url: "https://auradentalstudio.com",
    siteName: "Aura Dental Studio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased scroll-smooth selection:bg-[#B38C61] selection:text-white",
        sans.variable,
        display.variable,
        mono.variable
      )}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F8F6] text-[#14151D] font-sans antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
