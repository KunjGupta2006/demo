"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SplitTextReveal, Reveal } from "@/lib/motion/Reveal";
import { IconArrowRight } from "@/components/ui/Icons";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[92svh] w-full flex flex-col justify-between bg-white text-slate-900 overflow-hidden"
    >
      {/* Main Hero Stage */}
      <div className="relative z-10 flex-1 w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-12 sm:pt-20 pb-16 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            
            {/* Direct Headline */}
            <h1 className="font-serif text-[clamp(2.8rem,6.8vw,6.5rem)] font-normal leading-[0.94] tracking-[-0.03em] text-slate-900 mb-8">
              Effortless haircuts, <span className="text-[#0284C7] italic">vibrant color</span> & calming scalp care.
            </h1>

            {/* Simple, Human Subcopy */}
            <Reveal delay={0.2} duration={0.8} yOffset={20}>
              <p className="max-w-[560px] text-[clamp(1.05rem,1.2vw,1.25rem)] text-slate-600 font-sans font-normal leading-[1.65] mb-10">
                Tailored haircuts shaped dry to enhance your natural texture, healthy ammonia-free balayage that grows out seamlessly, and private Japanese head spa treatments on the Quai de la Tournelle.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.3} duration={0.8} yOffset={16}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Button
                  href="/booking"
                  variant="crystal"
                  size="lg"
                  magnetic={true}
                  icon={<IconArrowRight size={16} />}
                >
                  Book an Appointment
                </Button>

                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>

            {/* 3 Colorful Value Pills */}
            <Reveal delay={0.4} duration={0.8} yOffset={14}>
              <div className="mt-12 pt-6 border-t border-slate-100 flex flex-wrap gap-3 sm:gap-4 w-full max-w-[580px]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[12px] font-sans text-[#0369A1] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                  <span>Precision Dry Cuts</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE4E6] border border-[#FECDD3] text-[12px] font-sans text-[#BE123C] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E11D48]" />
                  <span>Gentle Balayage & Gloss</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] border border-[#DDD6FE] text-[12px] font-sans text-[#7C3AED] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                  <span>Japanese Scalp Head Spa</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Visual (Cols 8-12) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Reveal delay={0.2} duration={1.0} yOffset={24}>
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-slate-100 overflow-hidden border border-slate-200/80 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=85&w=1400&auto=format&fit=crop"
                  alt="Precision haircut styling at Care4U Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Clean Corner Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white px-3.5 py-1.5 text-[11px] font-sans tracking-[0.15em] uppercase font-medium">
                  Care4U Studio · Paris 5e
                </div>

                {/* Bottom Frame Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 px-4 py-2 border border-slate-200 flex items-center space-x-2.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                  <span className="font-sans text-[12px] font-medium tracking-wide">
                    Quai de la Tournelle
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Floating Review Card */}
            <div className="hidden sm:block absolute -bottom-6 -left-8 bg-white border border-slate-200 p-4 max-w-[240px] shadow-lg z-20">
              <div className="flex items-center space-x-1 text-[#E11D48] mb-1">
                <span>★★★★★</span>
              </div>
              <span className="block font-sans text-[13px] font-medium text-slate-900 leading-tight">
                5.0 Google Rating
              </span>
              <span className="block font-sans text-[11px] text-slate-500 mt-0.5">
                Over 380+ verified guest reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Coordinates Bar */}
      <div className="relative z-20 w-full border-t border-slate-100 bg-slate-50/60">
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-3.5 flex flex-col sm:flex-row items-center justify-between text-[12px] font-sans tracking-wide text-slate-500">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <span>48 Quai de la Tournelle, 75005 Paris</span>
            <span className="text-slate-300">•</span>
            <span>Tuesday – Sunday</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-slate-700 font-medium">Private Suites Available Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}
