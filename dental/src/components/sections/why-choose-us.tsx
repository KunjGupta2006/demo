"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ShieldCheck, Heart, Sparkles, CreditCard, Check } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    tag: "Comfort First",
    title: "100% Pain-Free Dental Care",
    desc: "We use modern computerized numbing that works gently without the sharp needle pinch. Most patients tell us they didn't feel a thing.",
    image: "/images/treatment-microscope.jpg",
    metric: "99.4%",
    metricLabel: "Reported zero pain",
  },
  {
    icon: Sparkles,
    tag: "3D Technology",
    title: "See Your Future Smile in 3D",
    desc: "No messy impression goo in your mouth. Our digital laser scanner maps your teeth in 3 minutes so you can preview results before starting.",
    image: "/images/studio-operatory.jpg",
    metric: "3 Minutes",
    metricLabel: "Fast digital scan",
  },
  {
    icon: ShieldCheck,
    tag: "Hygiene",
    title: "Hospital-Grade Cleanliness",
    desc: "Every single tool is sealed, vacuum-sterilized in medical autoclaves, and opened fresh right in front of you.",
    image: "/images/autoclave-sterilization.jpg",
    metric: "100%",
    metricLabel: "Sterile barrier guarantee",
  },
  {
    icon: CreditCard,
    tag: "Transparency",
    title: "Clear, Upfront Pricing",
    desc: "You get a written price quote before we start. No hidden clinic charges, no surprise fees, and flexible 0% interest monthly EMI.",
    image: "/images/clinic-reception.jpg",
    metric: "0% EMI",
    metricLabel: "Easy monthly plans",
  },
];

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-white py-24 border-b border-slate-200/80">
      <Container>
        {/* Modern Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Aura Difference</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Why patients trust us with their smiles.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            We built our clinic around one simple principle: going to the dentist shouldn&apos;t be scary or stressful.
          </p>
        </div>

        {/* 4 Clean Visual Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={idx * 0.1}>
                <div className="bg-slate-50/70 rounded-[26px] p-8 border border-slate-200/80 hover:bg-white hover:border-blue-500/30 hover:shadow-card transition-all duration-400 flex flex-col justify-between h-full group">
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/70">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                          {item.tag}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-heading font-extrabold text-lg text-blue-600 block leading-none">
                          {item.metric}
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium">
                          {item.metricLabel}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>
                  </div>

                  {/* Clean Visual Photo Frame */}
                  <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-200 bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verified Standard at Aura Dental</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
