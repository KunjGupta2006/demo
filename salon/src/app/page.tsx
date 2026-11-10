import React from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Hero } from "@/components/home/top/Hero";
import { Marquee } from "@/components/home/top/Marquee";
import { BrandStory } from "@/components/home/top/BrandStory";
import { ServicesShowcase } from "@/components/home/top/ServicesShowcase";
import { BeforeAfterSlider } from "@/components/home/top/BeforeAfterSlider";
import { StylistsHorizontal } from "@/components/home/top/StylistsHorizontal";
import { SignaturePackages } from "@/components/home/bottom/SignaturePackages";
import { GalleryTeaser } from "@/components/home/bottom/GalleryTeaser";
import { TestimonialsCarousel } from "@/components/home/bottom/TestimonialsCarousel";
import { InstagramFeed } from "@/components/home/bottom/InstagramFeed";
import { MembershipTeaser } from "@/components/home/bottom/MembershipTeaser";
import { FinalBookingCta } from "@/components/home/bottom/FinalBookingCta";

export const metadata = {
  title: "Care4U Studio | Hair Architecture & Restorative Aesthetics",
  description:
    "Couture hair salon on the Quai de la Tournelle, Paris. Precision cranial dry-cutting, French mineral clay balayage, and Japanese carbonated head spa hydrotherapy.",
};

export default function Home() {
  return (
    <ShellLayout>
      {/* 1. Hero: Full-bleed visual, oversized split headline, magnetic CTA */}
      <Hero />

      {/* 2. Marquee of signature services */}
      <Marquee />

      {/* 3. Brand story: pinned scroll section, image parallax, text reveals */}
      <BrandStory />

      {/* 4. Services showcase: interactive list with hover dynamic preview */}
      <ServicesShowcase />

      {/* 5. Before/after draggable comparison slider */}
      <BeforeAfterSlider />

      {/* 6. Stylists: horizontal scroll showcase of master sculptors */}
      <StylistsHorizontal />

      {/* 7. Signature packages: bridal, glow-up day, gentleman grooming */}
      <SignaturePackages />

      {/* 8. Gallery teaser: asymmetric masonry with hover zoom */}
      <GalleryTeaser />

      {/* 9. Testimonials: large-type carousel, ratings, Google review badge */}
      <TestimonialsCarousel />

      {/* 10. Instagram-style atmospheric studio feed grid */}
      <InstagramFeed />

      {/* 11. Offers / membership teaser: Atelier Privé circle */}
      <MembershipTeaser />

      {/* 12. Final full-width booking invitation */}
      <FinalBookingCta />
    </ShellLayout>
  );
}
