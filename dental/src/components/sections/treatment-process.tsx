"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Sparkles } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Relax & Quick 3D Scan",
    desc: "Sit back in a private, quiet suite while our doctor takes a fast 3D digital scan of your teeth. No messy impression paste.",
  },
  {
    step: "02",
    title: "See Your Plan & Price",
    desc: "We look at your scans together on a screen. You receive a clear, written cost before we do anything. No surprises.",
  },
  {
    step: "03",
    title: "Gentle, Pain-Free Care",
    desc: "We use modern numbing techniques so you feel relaxed and completely comfortable throughout your appointment.",
  },
  {
    step: "04",
    title: "Walk Out Smiling",
    desc: "Leave with simple home-care tips and our direct WhatsApp concierge number in case you ever have a quick question.",
  },
];

export function TreatmentProcess() {
  return (
    <Section id="process" className="bg-white py-24 border-b border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Visit</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            What to expect at your appointment.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            No stressful rush, no cold waiting rooms. Here is how we take care of you:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 0.1}>
              <div className="bg-slate-50/70 rounded-[24px] p-7 border border-slate-200/80 shadow-soft hover:shadow-card hover:bg-white hover:border-blue-500/30 transition-all duration-400 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/70">
                    <span className="font-heading font-extrabold text-3xl text-blue-600">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
