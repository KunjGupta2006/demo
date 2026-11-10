"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SplitTextReveal, Reveal } from "@/lib/motion/Reveal";
import { IconArrowRight } from "@/components/ui/Icons";
import { getAtelierStatus } from "@/data/salonInfo";

export function HeroPrototype() {
  const containerRef = useRef<HTMLDivElement>(null);
  const status = getAtelierStatus();

  return (
    <div
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between bg-[#F8F6F1] text-[#171614] overflow-hidden"
    >
      {/* Top Architectural Header */}
      <header className="relative z-20 w-full border-b border-[rgba(23,22,20,0.08)] bg-[#F8F6F1]/90 backdrop-blur-sm">
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between">
          <Logo variant="dark" withTagline={true} />

          {/* Center Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-10 text-[12px] uppercase tracking-[0.16em] font-sans text-[#171614]"
            aria-label="Main Navigation"
          >
            <Link href="/services" className="editorial-link hover:text-[#B38E58] transition-colors">
              Services
            </Link>
            <Link href="/team" className="editorial-link hover:text-[#B38E58] transition-colors">
              Sculptors
            </Link>
            <Link href="/gallery" className="editorial-link hover:text-[#B38E58] transition-colors">
              Lookbook
            </Link>
            <Link href="/journal" className="editorial-link hover:text-[#B38E58] transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="editorial-link hover:text-[#B38E58] transition-colors">
              Atelier
            </Link>
          </nav>

          {/* Right Status & Action */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono tracking-[0.08em] text-[#666159] uppercase">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3F5A2A] animate-pulse" />
              <span>{status.statusText}</span>
              <span className="opacity-40">/</span>
              <span className="opacity-80">Paris 5e</span>
            </div>

            <Button
              href="/booking"
              variant="primary"
              size="sm"
              magnetic={true}
              className="hidden sm:inline-flex"
            >
              Reserve Session
            </Button>
          </div>
        </div>
      </header>

      {/* Main Hero Stage - Asymmetric Editorial Grid */}
      <main className="relative z-10 flex-1 w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-8 pb-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Monumental Split Typography & Editorial Statement (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8">
            {/* Meta Eyebrow */}
            <div className="flex items-center space-x-3 mb-5 text-[11px] font-mono tracking-[0.2em] uppercase text-[#666159]">
              <span>[01 / MANIFESTO]</span>
              <span className="w-8 h-px bg-[rgba(23,22,20,0.15)]" />
              <span>PARISIAN CRANIAL ARCHITECTURE</span>
            </div>

            {/* Oversized Split-Text Headline */}
            <SplitTextReveal
              text="The architecture of living hair."
              tag="h1"
              delay={0.15}
              className="font-serif text-[clamp(2.8rem,6.8vw,7.2rem)] font-normal leading-[0.92] tracking-[-0.035em] text-[#171614] mb-8"
            />

            {/* Editorial Body Argument */}
            <Reveal delay={0.35} duration={0.9} yOffset={24}>
              <p className="max-w-[540px] text-[clamp(1.05rem,1.2vw,1.25rem)] text-[#666159] font-sans font-light leading-[1.65] mb-10">
                Hair cut dry to honour cranial bone structure and natural growth grain.
                Non-ammonia mineral clay lighteners, bio-identical keratin infusion,
                and acoustic stillness on the Quai de la Tournelle.
              </p>
            </Reveal>

            {/* Magnetic CTA Group */}
            <Reveal delay={0.45} duration={0.9} yOffset={20}>
              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                <Button
                  href="/booking"
                  variant="brass"
                  size="lg"
                  magnetic={true}
                  icon={<IconArrowRight size={16} />}
                >
                  Reserve an Appointment
                </Button>

                <Link
                  href="/services"
                  className="editorial-link font-sans text-[12px] uppercase tracking-[0.16em] text-[#171614] font-medium py-3"
                >
                  Explore Services Menu
                </Link>
              </div>
            </Reveal>

            {/* Hairline Metadata Strip */}
            <Reveal delay={0.55} duration={0.9} yOffset={16}>
              <div className="mt-14 pt-6 border-t border-[rgba(23,22,20,0.08)] grid grid-cols-3 gap-6 w-full max-w-[540px]">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#666159]/80">
                    Location
                  </span>
                  <span className="block font-sans text-[13px] font-medium text-[#171614] mt-0.5">
                    Quai de la Tournelle
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#666159]/80">
                    Discipline
                  </span>
                  <span className="block font-sans text-[13px] font-medium text-[#171614] mt-0.5">
                    Cold-Blade Sculpture
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-[#666159]/80">
                    Hospitality
                  </span>
                  <span className="block font-sans text-[13px] font-medium text-[#171614] mt-0.5">
                    Private Acoustic Suites
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Tactile Hair Architecture Visual (Cols 8-12) */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <Reveal delay={0.25} duration={1.1} yOffset={32}>
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-[#EFECE5] overflow-hidden border border-[rgba(23,22,20,0.08)] shadow-[0_24px_50px_-15px_rgba(23,22,20,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=85&w=1400&auto=format&fit=crop"
                  alt="Architectural precision haircut and bone structure framing at Élan Atelier"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center grayscale contrast-[1.08] hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Corner Architectural Stamp */}
                <div className="absolute top-4 left-4 bg-[#121110]/85 backdrop-blur-md text-[#F8F6F1] px-3 py-2 text-[10px] font-mono uppercase tracking-[0.18em]">
                  CARE4U STUDIO · 2026
                </div>

                {/* Bottom Frame Badge */}
                <div className="absolute bottom-4 right-4 bg-[#F8F6F1]/95 backdrop-blur-md text-[#171614] px-4 py-2 border border-[rgba(23,22,20,0.08)] flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#B38E58]" />
                  <span className="font-mono text-[11px] tracking-[0.12em] uppercase">
                    Fig. 01 — Cold-Blade Geometry
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Asymmetric Floating Accent Box */}
            <div className="hidden sm:block absolute -bottom-6 -left-8 bg-[#EFECE5] border border-[rgba(23,22,20,0.10)] p-5 max-w-[220px] shadow-sm z-20">
              <span className="block font-serif text-[1.4rem] leading-none text-[#171614]">
                100%
              </span>
              <span className="block font-sans text-[11px] text-[#666159] tracking-wider uppercase mt-1 leading-snug">
                Dry cutting calibrated to cranial density
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Editorial Scroll Cue & Coordinates Bar */}
      <footer className="relative z-20 w-full border-t border-[rgba(23,22,20,0.08)] bg-[#F8F6F1]">
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-[0.16em] uppercase text-[#666159]">
          <div className="flex items-center space-x-6 mb-2 sm:mb-0">
            <span>48.8504° N, 2.3537° E</span>
            <span className="opacity-30">•</span>
            <span>5TH ARRONDISSEMENT</span>
          </div>

          <div className="flex items-center space-x-3">
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
            <div className="w-8 h-px bg-[#171614] relative overflow-hidden">
              <div className="w-3 h-full bg-[#B38E58] animate-[marquee_2s_infinite]" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
