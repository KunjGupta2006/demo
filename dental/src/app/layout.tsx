import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import clinic from "@/data/clinic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0066FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(clinic.siteUrl),
  title: {
    default: `${clinic.name} — Gentle, Modern Dental Care in Indiranagar`,
    template: `%s | ${clinic.name}`,
  },
  description:
    "Gentle, pain-free dental clinic in Indiranagar, Bengaluru. Smile makeovers, invisible aligners, dental implants & pediatric care. 4.9★ Google rating.",
  keywords: [
    "dental clinic Bengaluru",
    "dentist Indiranagar",
    "painless dentist",
    "Invisalign clear aligners",
    "dental implants Bengaluru",
    "teeth whitening",
  ],
  authors: [{ name: clinic.name }],
  creator: clinic.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: clinic.siteUrl,
    title: `${clinic.name} — Gentle, Modern Dental Care`,
    description:
      "Modern dentistry designed for zero anxiety. 3D smile design, painless treatments, and upfront pricing in Indiranagar, Bengaluru.",
    siteName: clinic.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    image: `${clinic.siteUrl}/og-image.jpg`,
    "@id": clinic.siteUrl,
    url: clinic.siteUrl,
    telephone: clinic.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.state,
      postalCode: clinic.address.pin,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9784,
      longitude: 77.6408,
    },
    openingHoursSpecification: clinic.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
        <SmoothScroll>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileActionBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
