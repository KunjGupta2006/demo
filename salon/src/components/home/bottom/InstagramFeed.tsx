"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export function InstagramFeed() {
  const feedImages = [
    {
      src: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=600&auto=format&fit=crop",
      alt: "Architectural bob cut",
      tag: "@care4ustudio · Dry Cut",
    },
    {
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
      alt: "French clay balayage finish",
      tag: "@care4ustudio · Mineral Chroma",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
      alt: "Japanese carbonated head spa basin",
      tag: "@care4ustudio · Head Spa",
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop",
      alt: "Savile row scissor taper",
      tag: "@care4ustudio · Bespoke Taper",
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop",
      alt: "Haute bridal coiffure",
      tag: "@care4ustudio · Bridal Suite",
    },
    {
      src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop",
      alt: "Editorial wave setting",
      tag: "@care4ustudio · Runway Waves",
    },
  ];

  return (
    <Section variant="light" padding="lg" hairlineBottom={true} className="bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <Heading level={2} size="h1" className="text-slate-900 mb-1">
              Follow Our Daily Work
            </Heading>
            <p className="text-[15px] text-slate-500 font-sans">
              Daily cuts, balayage transformations, and quiet studio atmosphere.
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] uppercase tracking-wider text-[#0284C7] hover:underline font-semibold mt-3 sm:mt-0"
          >
            Follow @care4ustudio →
          </a>
        </div>

        {/* 6-Grid Square Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {feedImages.map((item, idx) => (
            <a
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square bg-[#EFECE5] overflow-hidden group border border-[rgba(23,22,20,0.08)] block"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                className="object-cover grayscale contrast-[1.05] group-hover:scale-[1.06] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#121110]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end text-[#F8F6F1]">
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#B38E58]">
                  {item.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </Section>
  );
}
