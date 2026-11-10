import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and patient health data protection at Aura Dental Studio.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted">Last updated: October 2026</p>

          <p>
            At {clinic.name}, we hold patient confidentiality and medical data security to the highest ethical and clinical standards. This policy outlines how your health records and personal information are handled.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you schedule an appointment or visit our clinic, we collect basic identification data (name, phone number, email address), dental medical history, digital X-rays, intraoral scans, and clinical notes pertinent to your oral treatment.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To diagnose, formulate treatment plans, and provide safe clinical care.</li>
            <li>To send appointment reminders via SMS and WhatsApp.</li>
            <li>To process cashless insurance claims and digital receipts.</li>
          </ul>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            3. Patient Confidentiality & Protection
          </h2>
          <p>
            We strictly do NOT sell or share patient data with third-party advertisers. All digital imaging and records are stored on encrypted, HIPAA-compliant healthcare cloud servers.
          </p>

          <h2 className="font-heading font-bold text-xl text-ink pt-4">
            4. Contact
          </h2>
          <p>
            If you have questions regarding your dental records or wish to request copies of your X-rays, please contact us at {clinic.email} or call {clinic.phone}.
          </p>
        </div>
      </Container>
    </Section>
  );
}
