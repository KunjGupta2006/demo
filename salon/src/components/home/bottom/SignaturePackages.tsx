"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { PACKAGES_DATA } from "@/data/packages";

export function SignaturePackages() {
  const themes = [
    {
      badgeBg: "bg-[#FFE4E6]",
      badgeText: "text-[#BE123C]",
      btnVariant: "crimson" as const,
      tag: "BRIDAL & OCCASION",
    },
    {
      badgeBg: "bg-[#F3E8FF]",
      badgeText: "text-[#7C3AED]",
      btnVariant: "purple" as const,
      tag: "TOTAL SCALP & HAIR RESET",
    },
    {
      badgeBg: "bg-[#E0F2FE]",
      badgeText: "text-[#0369A1]",
      btnVariant: "crystal" as const,
      tag: "FULL COLOR & CUT",
    },
  ];

  return (
    <Section id="signature-packages" variant="surface" padding="xl" hairlineBottom={true} className="bg-slate-50">
      <Container>
        {/* Section Top Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <Heading level={2} size="display-xl" className="text-slate-900 mb-3">
            All-Inclusive Packages
          </Heading>
          <p className="text-[16px] text-slate-600 font-sans leading-relaxed">
            Curated combinations for weddings, seasonal hair makeovers, and full-body scalp restoration.
          </p>
        </div>

        {/* 3-Column Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PACKAGES_DATA.map((pkg, i) => {
            const theme = themes[i % themes.length];

            return (
              <div
                key={pkg.id}
                className="bg-white border border-slate-200 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group rounded-lg"
              >
                {/* Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute top-3 left-3 ${theme.badgeBg} ${theme.badgeText} font-sans text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded shadow-sm`}>
                    {theme.tag}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white font-sans text-[12px] font-semibold tracking-wider px-3 py-1 rounded shadow">
                    ${pkg.price} · {pkg.durationMinutes} min
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-[1.8rem] text-slate-900 leading-tight mb-2">
                      {pkg.title}
                    </h3>
                    <p className={`font-sans text-[12px] font-semibold uppercase tracking-wider ${theme.badgeText} mb-4`}>
                      {pkg.tagline}
                    </p>
                    <p className="text-[14px] text-slate-600 leading-relaxed mb-6 font-normal">
                      {pkg.description}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-2.5">
                        What's Included:
                      </span>
                      <ul className="space-y-1.5 text-[13px] font-sans text-slate-700">
                        {pkg.servicesIncluded.map((item) => (
                          <li key={item} className="flex items-start space-x-2">
                            <span className="text-[#0284C7] mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Button
                      href={`/booking?package=${pkg.id}`}
                      variant={theme.btnVariant}
                      size="md"
                      className="w-full"
                    >
                      Book This Package
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
