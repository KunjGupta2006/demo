import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service and patient agreement for Aura Dental Studio.",
};

export default function TermsPage() {
  return (
    <Section className="pt-32 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Terms of Service
          </h1>
          <p className="text-xs text-muted">Last updated: October 2026</p>

          <p>
            Welcome to {clinic.name}. By accessing our website, booking an appointment, or undergoing clinical treatment at our clinic, you agree to comply with and be bound by the following terms.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            1. Appointment Scheduling & Cancellations
          </h2>
          <p>
            We respect your time and operate on a strict zero-wait schedule. If you need to reschedule or cancel your appointment, we kindly ask for at least 2 hours advance notice so we may offer the slot to patients needing emergency dental care.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            2. Medical Diagnosis & Treatment Consent
          </h2>
          <p>
            All dental procedures are performed following a comprehensive clinical evaluation. Informed consent explaining treatment options, benefits, risks, and alternatives is provided and discussed before initiating any irreversible clinical procedure.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            3. Pricing & Payment Policy
          </h2>
          <p>
            We provide transparent cost estimates upfront. Payment is due upon completion of each stage of treatment. We accept UPI, major credit/debit cards, and offer 0% no-cost EMI plans for qualifying treatments above ₹10,000.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            4. Website Medical Disclaimer
          </h2>
          <p>
            Information provided on this website is for educational and appointment scheduling purposes and does not substitute for professional in-person clinical diagnosis by a licensed dental practitioner.
          </p>
        </div>
      </Container>
    </Section>
  );
}
