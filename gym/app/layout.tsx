import type { Metadata } from "next";
import { Bebas_Neue, Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTABar } from "@/components/layout/MobileCTABar";
import { businessDetails } from "@/data/business";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: businessDetails.meta.siteTitle,
  description: businessDetails.meta.description,
  keywords: [
    "gym in Bandra",
    "premium gym Bandra West",
    "strength training Bandra",
    "personal training Bandra",
    "fitness studio Mumbai",
    "strength and conditioning Mumbai",
    "barbell gym Mumbai"
  ],
  openGraph: {
    title: "Spark Fitness — Train With Intent.",
    description: "Premium strength, conditioning and coaching in Bandra, Mumbai.",
    url: "https://sparkfitnessbandra.demo",
    siteName: "Spark Fitness",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Spark Fitness Strength & Performance Floor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": businessDetails.name,
  "description": businessDetails.positioning,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": businessDetails.location.address,
    "addressLocality": businessDetails.location.neighborhood,
    "addressRegion": "MH",
    "postalCode": businessDetails.location.pincode,
    "addressCountry": "IN"
  },
  "telephone": businessDetails.contact.phone,
  "url": "https://sparkfitnessbandra.demo",
  "priceRange": "₹3,500 - ₹11,500",
  "openingHours": [
    "Mo-Fr 06:00-22:00",
    "Sa 07:00-20:00",
    "Su 08:00-14:00"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#10100F] text-[#F1EEE7] font-body selection:bg-[#C8A45D] selection:text-[#10100F]"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
