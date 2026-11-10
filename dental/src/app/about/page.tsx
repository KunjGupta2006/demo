import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, Heart, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { DoctorsPreview } from "@/components/sections/doctors-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "About Our Clinic — Gentle, Transparent Dental Care",
  description:
    "Learn about Aura Dental Studio in Indiranagar, Bengaluru. A modern dental practice founded on gentle care, zero rushed appointments, and upfront honest pricing.",
};

const tenets = [
  {
    number: "01",
    title: "Save Your Natural Teeth",
    description: "Your natural enamel is better than any artificial tooth. We focus on conservative care, fixing only what's necessary and protecting your healthy tooth structure for life.",
  },
  {
    number: "02",
    title: "Zero Anxiety & 100% Gentle Care",
    description: "Dental fear is completely normal. We listen without judgement, explain every step before we begin, and use computerized gentle numbing so you feel zero needle pinch.",
  },
  {
    number: "03",
    title: "Hospital-Grade Cleanliness",
    description: "Every instrument is sterilized using European Class-B vacuum autoclaves, sealed in medical pouches, and opened right in front of you for total peace of mind.",
  },
  {
    number: "04",
    title: "Clear, Upfront Pricing",
    description: "No surprise bills, no unnecessary add-ons, and zero hidden hospital charges. You receive a printed cost estimate and 3D scan preview before starting any treatment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-800">
                Our Story & Values
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-950 font-extrabold tracking-tight leading-[1.08]">
              Dental care made <span className="text-[#0066FF]">gentle, calm</span>, and completely honest.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              We started Aura Dental Studio to fix what people dread most about dentists: cold waiting rooms, rushed consultations, hidden bills, and painful procedures. Here, you get unhurried care from specialists who treat you like family.
            </p>
          </div>
        </Container>
      </section>

      {/* Architectural Photo & Founder Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/images/clinic-reception.jpg"
                  alt="Aura Dental Studio patient lounge in Indiranagar Bengaluru"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-6 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-sky-400 block mb-1">
                    Indiranagar Studio Lounge
                  </span>
                  <p className="text-sm font-semibold text-white/95">
                    Quiet, comfortable space designed to feel like a boutique hotel lounge, not a clinical clinic
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-xs">
                <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF] block mb-2">
                  Founder&apos;s Promise
                </span>
                <h3 className="text-2xl text-slate-950 font-bold tracking-tight mb-3">
                  &ldquo;You should never feel rushed, nervous, or judged at the dentist.&rdquo;
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  After practicing for over 14 years across India and Europe, Dr. Priya Sharma created Aura Dental Studio with a simple goal: giving patients 45-minute unhurried visits where every question is answered honestly and every treatment is completely pain-free.
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white shadow-xs shrink-0">
                    <Image
                      src="/images/dr-priya-sharma.jpg"
                      alt="Dr. Priya Sharma"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-950 block">Dr. Priya Sharma</span>
                    <span className="text-xs text-slate-500">MDS · Founder & Lead Prosthodontist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The 4 Tenets */}
      <Section className="py-24 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF] block mb-2">
              Our 4 Core Promises
            </span>
            <h2 className="text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight">
              How we do dental care differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="text-sm font-black text-[#0066FF]">
                      {tenet.number}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Standard Practice
                    </span>
                  </div>
                  <h3 className="text-2xl text-slate-950 font-bold tracking-tight mb-3">
                    {tenet.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <DoctorsPreview />
      <FinalCTA />
    </>
  );
}
