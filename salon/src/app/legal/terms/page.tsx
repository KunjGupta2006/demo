import React from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Terms of Studio Service",
};

export default function TermsPage() {
  return (
    <ShellLayout>
      <Section variant="light" padding="lg">
        <Container size="narrow">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
            [Studio Terms]
          </span>
          <Heading level={1} size="h1" className="mb-8">
            Terms of Studio Service
          </Heading>

          <div className="prose text-[#666159] text-[15px] leading-relaxed space-y-6">
            <p>
              Welcome to Care4U Studio Paris. By reserving an appointment or acquiring products through our atelier, you enter into agreement with these terms of service.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              1. Punctuality & Studio Atmosphere
            </h2>
            <p>
              To maintain the acoustic stillness of our private suites, we request guests arrive 10 minutes prior to scheduled reservations. Arrivals exceeding 15 minutes past scheduled time may require service abbreviation to preserve subsequent guest commitments.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              2. Chemical Formulation & Discretion
            </h2>
            <p>
              All color transformations and keratin treatments undergo mandatory patch sensitivity testing during initial visits. Guests must disclose previous chemical processing or metallic dye treatments to ensure formulation safety.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              3. Payment & Concierge Currency
            </h2>
            <p>
              We accept all major international credit cards, contactless transfers, and cash payments in Euros (€). Gratuities for master sculptors and apprentices are accepted at guest discretion.
            </p>
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
