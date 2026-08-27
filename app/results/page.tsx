import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, BarChart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, progressTimeline } from "@/data/testimonials";

export const metadata = {
  title: "Member Results & Outcomes | Spark Fitness Bandra",
  description: "Read real stories and performance outcomes from members training at Spark Fitness Bandra West.",
};

export default function ResultsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>PROVEN METHODOLOGY</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            REAL OUTCOMES. <span className="text-[#C8A45D]">NO GIMMICKRY.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            We measure progress by barbell strength, joint stability, aerobic work capacity, and long-term consistency — not short-term extreme crash diets.
          </p>
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-20 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionHeading title="MEMBER EXPERIENCES." subtitle="Authentic feedback from working professionals in Bandra West." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-[#262622] rounded-[8px] border border-[rgba(241,238,231,0.10)] overflow-hidden flex flex-col justify-between p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C8A45D]">
                      <Image src={t.image} alt={t.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#F1EEE7] uppercase">{t.name}, {t.age}</h3>
                      <p className="font-subhead text-xs text-[#77776F] uppercase tracking-wider">{t.profession}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#10100F] rounded text-xs font-subhead uppercase tracking-wider text-[#C8A45D] font-bold w-fit">
                    {t.program} • {t.timeframe}
                  </div>
                  <p className="font-body text-sm text-[#B8B3A8] italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="p-4 bg-[#10100F] rounded border border-[rgba(241,238,231,0.06)]">
                  <div className="font-subhead text-[10px] uppercase tracking-widest text-[#77776F] font-bold">
                    Performance Milestone
                  </div>
                  <div className="font-subhead text-xs font-bold text-[#F1EEE7] mt-1">
                    {t.keyOutcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Timeline */}
      <section className="py-20 bg-[#10100F]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionHeading title="THE PROGRESSION ARCHITECTURE." subtitle="How your training evolves step-by-step from day one." />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {progressTimeline.map((step) => (
              <div key={step.step} className="bg-[#191917] p-6 rounded-[8px] border border-[rgba(241,238,231,0.10)] space-y-3">
                <div className="font-display text-4xl text-[#C8A45D]">{step.step}</div>
                <h4 className="font-display text-2xl text-[#F1EEE7] uppercase">{step.title}</h4>
                <p className="font-body text-xs text-[#B8B3A8] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/book-trial" variant="accent" size="lg">
              Start Your Coached Baseline Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
