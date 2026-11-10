import React from "react";
import Metadata from "next";
import Image from "next/image";
import { Check, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programs, sampleWeeklySchedule } from "@/data/programs";
import { FAQAccordion } from "@/components/fitness/FAQAccordion";
import { faqs } from "@/data/faqs";

export const metadata = {
  title: "Training Programs & Philosophy | Spark Fitness Bandra",
  description: "Explore strength lab, athletic conditioning, small group coaching and 1:1 personal training programs at Spark Fitness Bandra West.",
};

export default function TrainingPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>TRAINING METHODOLOGY</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            PROGRAMMING BUILT FOR <span className="text-[#C8A45D]">PROGRESS.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            We don't sell random sweat workouts. Our floor runs on structured, block-periodized programming designed to make you measurably stronger, fitter, and more athletic.
          </p>
        </div>
      </section>

      {/* Program Detail Sections */}
      <section className="py-20 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 space-y-24">
          {programs.map((prog, index) => (
            <div
              key={prog.id}
              id={prog.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <span className="px-3 py-1 bg-[#C8A45D]/10 border border-[#C8A45D]/30 rounded font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                  {prog.tag}
                </span>
                <h2 className="font-display text-4xl sm:text-5xl text-[#F1EEE7] uppercase">
                  {prog.title}
                </h2>
                <p className="font-subhead text-lg text-[#C8A45D] font-semibold">
                  {prog.subtitle}
                </p>
                <p className="font-body text-base text-[#B8B3A8] leading-relaxed">
                  {prog.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-bold">
                    Key Program Pillars:
                  </h4>
                  {prog.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#B8B3A8]">
                      <Check className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#262622] rounded border border-[rgba(241,238,231,0.08)]">
                  <div className="font-subhead text-xs uppercase tracking-wider text-[#77776F] font-bold mb-1">
                    Ideal Persona Target:
                  </div>
                  <div className="font-body text-xs text-[#F1EEE7]">
                    {prog.idealFor}
                  </div>
                </div>

                <div className="pt-2">
                  <Button href={prog.ctaHref} variant="primary" size="md">
                    {prog.ctaText}
                  </Button>
                </div>
              </div>

              <div className={`lg:col-span-6 relative h-[400px] sm:h-[480px] rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.12)] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Weekly Schedule Table */}
      <section className="py-20 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>SAMPLE PROGRAM STRUCTURE</SectionLabel>
          <SectionHeading
            title="SAMPLE WEEKLY TRAINING FLOW."
            subtitle="An example 7-day training splits framework used in our Coach+ program blocks."
          />

          <div className="overflow-x-auto rounded-[8px] border border-[rgba(241,238,231,0.10)] bg-[#191917]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[rgba(241,238,231,0.12)] bg-[#262622]">
                  <th className="p-4 sm:p-5 font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                    Day
                  </th>
                  <th className="p-4 sm:p-5 font-subhead text-xs uppercase tracking-widest text-[#F1EEE7] font-bold">
                    Focus Target
                  </th>
                  <th className="p-4 sm:p-5 font-subhead text-xs uppercase tracking-widest text-[#B8B3A8] font-bold">
                    Session Breakdown
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(241,238,231,0.06)] text-sm">
                {sampleWeeklySchedule.map((item) => (
                  <tr key={item.day} className="hover:bg-[#262622]/50 transition-colors">
                    <td className="p-4 sm:p-5 font-display text-xl text-[#F1EEE7] uppercase shrink-0">
                      {item.day}
                    </td>
                    <td className="p-4 sm:p-5 font-subhead text-sm font-semibold text-[#C8A45D]">
                      {item.focus}
                    </td>
                    <td className="p-4 sm:p-5 font-body text-xs sm:text-sm text-[#B8B3A8]">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-subhead text-xs text-[#77776F] uppercase tracking-wider mt-4 text-center">
            * Sample demo programming schedule — modified individually per member baseline.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#191917]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <SectionHeading title="TRAINING QUESTIONS." align="center" />
          <FAQAccordion items={faqs.filter(f => f.category === "Getting Started" || f.category === "Services & Coaching")} />
          <div className="mt-12 text-center">
            <Button href="/book-trial" variant="accent" size="lg">
              Book Your Coached Trial Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
