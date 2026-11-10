import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/motion/LenisProvider";
import { JsonLd } from "@/components/seo/JsonLd";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Care4U Studio",
    default: "Care4U Studio | Hair Architecture & Restorative Aesthetics",
  },
  description:
    "Couture hair salon and restorative head spa studio. Precision cranial dry-cutting, French mineral clay balayage, and Japanese carbonated head spa hydrotherapy.",
  keywords: [
    "Care4U Studio",
    "Luxury Hair Salon",
    "Architectural Haircut",
    "French Balayage",
    "Japanese Head Spa",
    "Couture Bridal Coiffure",
    "Tailored Grooming",
  ],
  authors: [{ name: "Care4U Studio" }],
  openGraph: {
    title: "Care4U Studio | Hair Architecture & Restorative Aesthetics",
    description:
      "Couture hair salon and restorative head spa studio. Precision cranial dry-cutting, French mineral clay balayage, and Japanese carbonated head spa hydrotherapy.",
    url: "https://care4ustudio.fr",
    siteName: "Care4U Studio",
    locale: "en_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F6F1] text-[#171614] selection:bg-[#171614] selection:text-[#F8F6F1] font-sans">
        <JsonLd />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
