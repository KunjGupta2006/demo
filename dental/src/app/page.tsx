import { Hero } from "@/components/sections/hero";
import { QuickActions } from "@/components/sections/quick-actions";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { DoctorsPreview } from "@/components/sections/doctors-preview";
import { SmileSlider } from "@/components/sections/smile-slider";
import { TreatmentProcess } from "@/components/sections/treatment-process";
import { PricingTable } from "@/components/sections/pricing-table";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ClinicHours } from "@/components/sections/clinic-hours";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <ServicesGrid />
      <WhyChooseUs />
      <DoctorsPreview />
      <SmileSlider />
      <TreatmentProcess />
      <PricingTable />
      <TestimonialCarousel />
      <FAQAccordion />
      <ClinicHours />
      <FinalCTA />
    </>
  );
}
