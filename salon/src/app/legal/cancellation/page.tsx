import React from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Cancellation & Rescheduling Etiquette",
};

export default function CancellationPage() {
  return (
    <ShellLayout>
      <Section variant="light" padding="lg">
        <Container size="narrow">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
            [Reservation Etiquette]
          </span>
          <Heading level={1} size="h1" className="mb-8">
            Cancellation & Rescheduling Policy
          </Heading>

          <div className="prose text-[#666159] text-[15px] leading-relaxed space-y-6">
            <p className="text-[17px] text-[#171614] font-medium leading-relaxed">
              Care4U Studio operates on an exclusive, unhurried single-guest reservation schedule. When a suite is reserved for you, that entire time block is devoted solely to your care.
            </p>

            <div className="p-6 bg-[#EFECE5] border-l-2 border-[#B38E58] my-8 space-y-4">
              <h3 className="font-serif text-[1.3rem] text-[#171614]">
                The 48-Hour Protocol
              </h3>
              <p>
                We respectfully request a minimum of <strong>48 hours notice</strong> for any modification or cancellation of a reservation. This enables our concierge to offer the suite to waitlisted clients.
              </p>
            </div>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              Late Modifications & Deposits
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Cancellations with 48+ hours notice:</strong> 100% deposit refund or seamless credit transfer to your next desired session date.
              </li>
              <li>
                <strong>Cancellations within 24–48 hours:</strong> 50% of the scheduled service reservation fee is retained.
              </li>
              <li>
                <strong>Cancellations within under 24 hours or missed appointments:</strong> 100% of the scheduled service fee is billed to the payment guarantee card on file.
              </li>
            </ul>

            <h2 className="font-serif text-[1.4rem] text-[#171614] mt-8 mb-3">
              Emergency Circumstances
            </h2>
            <p>
              We recognize unexpected medical or travel disruptions happen. Please contact our concierge directly via phone at <a href="tel:+33142685500" className="text-[#171614] underline">+33 1 42 68 55 00</a> or WhatsApp to discuss urgent modifications.
            </p>

            <div className="pt-8">
              <Button href="/booking" variant="brass" size="md">
                Manage Existing Reservation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
