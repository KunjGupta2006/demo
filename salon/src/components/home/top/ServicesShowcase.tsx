"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/Icons";
import { SERVICES_DATA } from "@/data/services";

export function ServicesShowcase() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);

  // Featured selection across categories
  const featuredServices = [
    SERVICES_DATA.find((s) => s.id === "cut-architectural")!,
    SERVICES_DATA.find((s) => s.id === "colour-french-balayage")!,
    SERVICES_DATA.find((s) => s.id === "treat-japanese-headspa")!,
    SERVICES_DATA.find((s) => s.id === "treat-bio-keratin")!,
    SERVICES_DATA.find((s) => s.id === "style-haute-wave")!,
    SERVICES_DATA.find((s) => s.id === "facial-cryo-lymphatic")!,
    SERVICES_DATA.find((s) => s.id === "groom-savile-row")!,
  ];

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case "haircuts":
        return {
          bg: "bg-[#E0F2FE]",
          text: "text-[#0369A1]",
          border: "border-[#BAE6FD]",
          dot: "bg-[#0284C7]",
          btn: "crystal" as const,
          label: "Haircut",
        };
      case "colour":
        return {
          bg: "bg-[#FFE4E6]",
          text: "text-[#BE123C]",
          border: "border-[#FECDD3]",
          dot: "bg-[#E11D48]",
          btn: "crimson" as const,
          label: "Balayage & Color",
        };
      case "keratin":
        return {
          bg: "bg-[#F3E8FF]",
          text: "text-[#7C3AED]",
          border: "border-[#DDD6FE]",
          dot: "bg-[#8B5CF6]",
          btn: "purple" as const,
          label: "Scalp & Treatment",
        };
      default:
        return {
          bg: "bg-slate-100",
          text: "text-slate-800",
          border: "border-slate-200",
          dot: "bg-slate-700",
          btn: "primary" as const,
          label: "Styling",
        };
    }
  };

  const activeTheme = getCategoryTheme(activeService.category);

  return (
    <Section id="services-showcase" variant="light" padding="xl" hairlineBottom={true} className="bg-white">
      <Container>
        {/* Section Top Title */}
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 sm:mb-20 pb-6 border-b border-slate-200">
          <div>
            <Heading level={2} size="display-xl" className="text-slate-900 mb-2">
              Our Services
            </Heading>
            <p className="text-[16px] text-slate-600 font-sans">
              Tailored haircuts, natural balayage, and restorative Japanese head spa treatments.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button href="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </div>

        {/* 2-Column Split: Left List with Hover Interaction, Right Dynamic Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Interactive Services List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-100">
            {featuredServices.map((service, index) => {
              const isActive = activeService.id === service.id;
              const theme = getCategoryTheme(service.category);

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group py-6 sm:py-8 transition-all cursor-pointer flex flex-col justify-between rounded-lg ${
                    isActive ? "bg-slate-50 px-5 shadow-sm" : "hover:bg-slate-50/60 px-4"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.dot}`} />
                      <h3
                        className={`font-serif text-[clamp(1.4rem,2.2vw,2rem)] font-normal transition-colors leading-tight ${
                          isActive
                            ? "text-slate-900 font-medium"
                            : "text-slate-900 group-hover:text-[#0284C7]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3 text-right shrink-0">
                      <span className="font-sans text-[13px] text-slate-500">
                        {service.durationMinutes} min
                      </span>
                      <span className="font-sans text-[15px] font-semibold text-slate-900">
                        ${service.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] text-slate-600 font-normal max-w-xl pl-5 line-clamp-2">
                    {service.subtitle}
                  </p>

                  <div className="flex items-center space-x-6 pl-5 mt-4 pt-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${theme.bg} ${theme.text} border ${theme.border}`}>
                      {theme.label}
                    </span>

                    <Link
                      href={`/services/${service.slug}`}
                      className="font-sans text-[12px] uppercase tracking-[0.14em] text-slate-700 hover:text-[#0284C7] font-medium flex items-center space-x-1"
                    >
                      <span>View Details</span>
                      <IconArrowRight size={14} />
                    </Link>

                    <Link
                      href={`/booking?service=${service.id}`}
                      className="font-sans text-[12px] uppercase tracking-[0.14em] text-[#0284C7] hover:underline font-medium"
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dynamic Preview Sticky Showcase (5 cols) */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <div className="relative aspect-[4/5] bg-slate-100 border border-slate-200 overflow-hidden p-6 flex flex-col justify-between shadow-xl">
              
              <Image
                key={activeService.id}
                src={activeService.featuredImage}
                alt={activeService.title}
                fill
                sizes="40vw"
                className="object-cover transition-opacity duration-500"
              />

              {/* Inset Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Top Tag */}
              <div className="relative z-10 flex justify-between items-center text-white">
                <span className={`px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-wider rounded-full shadow ${activeTheme.bg} ${activeTheme.text}`}>
                  {activeTheme.label}
                </span>
                {activeService.badge && (
                  <span className="text-[11px] font-sans font-medium uppercase tracking-wider bg-white/90 text-slate-900 px-3 py-1 rounded-full shadow-sm">
                    {activeService.badge}
                  </span>
                )}
              </div>

              {/* Bottom Inset Details */}
              <div className="relative z-10 text-white pt-6">
                <span className="font-serif text-[1.9rem] leading-tight block mb-2 font-normal">
                  {activeService.title}
                </span>
                <p className="text-[14px] text-slate-200 leading-relaxed mb-6 font-normal">
                  {activeService.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <div className="font-sans text-[14px] font-semibold text-white tracking-wide">
                    {activeService.durationMinutes} min · ${activeService.price}
                  </div>
                  <Button
                    href={`/booking?service=${activeService.id}`}
                    variant={activeTheme.btn}
                    size="sm"
                  >
                    Book This Service
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
