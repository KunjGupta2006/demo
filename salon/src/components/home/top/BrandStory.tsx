"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/lib/motion/Reveal";

export function BrandStory() {
  const pillars = [
    {
      theme: "crystal" as const,
      color: "#0284C7",
      bgLight: "bg-[#E0F2FE]",
      textColor: "text-[#0369A1]",
      borderColor: "border-[#BAE6FD]",
      tag: "PRECISION CUTS",
      title: "Haircuts shaped dry to your natural texture",
      description:
        "We cut hair dry so we can study your natural movement, cowlicks, and curl patterns before washing. You get a flattering, low-maintenance shape that holds its form naturally between appointments without daily heat styling.",
      stat: "100%",
      statLabel: "Natural Texture Assessment",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      theme: "crimson" as const,
      color: "#E11D48",
      bgLight: "bg-[#FFE4E6]",
      textColor: "text-[#BE123C]",
      borderColor: "border-[#FECDD3]",
      tag: "VIBRANT COLOR",
      title: "Gentle balayage and glossy, healthy toners",
      description:
        "We use gentle, ammonia-free clay lighteners and acidic shine glazes that keep your hair hydrated and silky. Your color blends softly and grows out seamlessly with zero harsh root lines.",
      stat: "0%",
      statLabel: "Harsh Ammonia or PPD",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop",
    },
    {
      theme: "purple" as const,
      color: "#8B5CF6",
      bgLight: "bg-[#F3E8FF]",
      textColor: "text-[#7C3AED]",
      borderColor: "border-[#DDD6FE]",
      tag: "SCALP & SPA",
      title: "Quiet, private suites on the Quai de la Tournelle",
      description:
        "No chemical smells and no shouting over rows of loud blowdryers. Our studio is divided into private, peaceful styling suites with relaxing Japanese head spa basins, artisan tea, and unhurried appointments.",
      stat: "5",
      statLabel: "Private Quiet Suites",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <Section
      id="brand-story"
      variant="surface"
      padding="xl"
      hairlineBottom={true}
      className="relative bg-slate-50"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <Heading level={2} size="display-xl" className="text-slate-900 mb-4">
            How we take care of your hair.
          </Heading>
          <p className="text-[17px] text-slate-600 font-sans leading-relaxed">
            Three principles that make your visit relaxed, your color healthy, and your haircut easy to manage every day.
          </p>
        </div>

        {/* 3 Story Chapters */}
        <div className="space-y-24 sm:space-y-32">
          {pillars.map((pillar, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={pillar.tag}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:col-start-8" : ""
                  }`}
                >
                  <Reveal delay={0.1} duration={0.9} yOffset={24}>
                    <div className="relative aspect-[4/5] bg-white border border-slate-200 overflow-hidden shadow-sm group">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      />
                      <div className={`absolute top-4 left-4 ${pillar.bgLight} ${pillar.textColor} border ${pillar.borderColor} px-3 py-1 font-sans text-[11px] font-semibold tracking-wider uppercase shadow-sm`}>
                        {pillar.tag}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/95 text-slate-900 px-4 py-2 border border-slate-200 shadow-sm">
                        <span className="block font-serif text-[1.4rem] leading-none text-slate-900">
                          {pillar.stat}
                        </span>
                        <span className="block font-sans text-[10px] uppercase tracking-wider text-slate-500 mt-0.5">
                          {pillar.statLabel}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Narrative Text Column */}
                <div
                  className={`lg:col-span-7 flex flex-col justify-center ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <Reveal delay={0.2} duration={0.8} yOffset={20}>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`inline-block w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: pillar.color }} />
                      <span className={`font-sans text-[12px] font-semibold tracking-wider uppercase ${pillar.textColor}`}>
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-[clamp(1.8rem,3.2vw,2.8rem)] font-normal text-slate-900 leading-[1.1] tracking-tight mb-6">
                      {pillar.title}
                    </h3>

                    <p className="text-[16px] text-slate-600 font-sans leading-[1.7] max-w-xl mb-8">
                      {pillar.description}
                    </p>

                    <div>
                      <Button
                        href="/about"
                        variant={pillar.theme}
                        size="md"
                      >
                        Learn More
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
