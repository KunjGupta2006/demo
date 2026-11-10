import React from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Privacy Discretion Policy",
};

export default function PrivacyPage() {
  return (
    <ShellLayout>
      <Section variant="light" padding="lg">
        <Container size="narrow">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
            [Legal & Privacy Discretion]
          </span>
          <Heading level={1} size="h1" className="mb-8">
            Privacy Policy
          </Heading>
          
          <div className="prose text-[#666159] text-[15px] leading-relaxed space-y-6">
            <p>
              Last revised: October 2026. At Care4U Studio, we respect the absolute discretion and confidentiality of our private clientele. This charter outlines our practices regarding data collected during appointments, reservations, and digital interactions.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect only the essential personal details required to orchestrate your private salon session: your full name, email address, telephone contact, trichological hair history, and service preferences.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              2. Zero Third-Party Monetization
            </h2>
            <p>
              We never sell, rent, license, or disclose client names, contact details, or coiffure formulas to third-party commercial brokers or advertisers. All formulas and trichological scan records remain encrypted within our secure studio repository.
            </p>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              3. Data Retention & Right to Erasure
            </h2>
            <p>
              Under EU General Data Protection Regulations (GDPR), you retain full rights to inspect, download, or request permanent erasure of your client dossier at any time by contacting <code className="text-[#171614]">concierge@care4ustudio.fr</code>.
            </p>
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
