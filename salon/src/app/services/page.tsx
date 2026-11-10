"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCategory } from "@/types";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all");

  const categories: { label: string; value: ServiceCategory | "all" }[] = [
    { label: "All Disciplines", value: "all" },
    { label: "Haircuts & Sculpture", value: "haircuts" },
    { label: "Mineral Colour & Balayage", value: "colour" },
    { label: "Styling & Editorial", value: "styling" },
    { label: "Keratin & Trichology", value: "keratin" },
    { label: "Facials & Buccal", value: "facials" },
    { label: "Japanese Nails", value: "nails" },
    { label: "Gentleman Grooming", value: "grooming" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <ShellLayout>
      {/* Top Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
              [The Ritual Directory]
            </span>
            <Heading level={1} size="display-xl" className="mb-6">
              Services & Rituals
            </Heading>
            <p className="text-[16px] text-[#666159] leading-relaxed max-w-2xl font-light">
              Every appointment is conducted in single-guest acoustic suites. Prices include full consultation, filtered water rinse, and tailored thermal finishing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`py-2.5 px-5 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === cat.value
                    ? "bg-[#171614] text-[#F8F6F1] border-[#171614]"
                    : "bg-[#EFECE5] text-[#171614] border-[rgba(23,22,20,0.08)] hover:border-[#171614]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Grid Matrix */}
      <Section variant="surface" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#F8F6F1] border border-[rgba(23,22,20,0.08)] flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] bg-[#E5E0D6] overflow-hidden">
                    <Image
                      src={service.featuredImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[9px] tracking-widest uppercase px-2 py-1">
                      {service.category}
                    </div>
                    {service.badge && (
                      <div className="absolute top-3 right-3 bg-[#B38E58] text-[#171614] font-mono text-[9px] font-medium tracking-widest uppercase px-2 py-1">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-mono text-[11px] text-[#666159]">
                        {service.durationMinutes} MINUTES
                      </span>
                      <span className="font-mono text-[16px] font-medium text-[#171614]">
                        ${service.price}
                      </span>
                    </div>

                    <h2 className="font-serif text-[1.6rem] text-[#171614] leading-tight mb-2">
                      {service.title}
                    </h2>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[#B38E58] mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-[13px] text-[#666159] leading-relaxed line-clamp-3 mb-6 font-light">
                      {service.description}
                    </p>

                    {/* What's included preview */}
                    <div className="border-t border-[rgba(23,22,20,0.06)] pt-4 mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#666159] block mb-2">
                        Ceremony Highlights:
                      </span>
                      <ul className="space-y-1 text-[12px] text-[#171614]">
                        {service.inclusions.slice(0, 3).map((inc) => (
                          <li key={inc} className="flex items-center space-x-2">
                            <span className="text-[#B38E58]">✓</span>
                            <span className="truncate">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-[rgba(23,22,20,0.06)] mt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="editorial-link font-sans text-[11px] uppercase tracking-wider text-[#171614] font-medium"
                  >
                    Full Dossier →
                  </Link>
                  <Button
                    href={`/booking?service=${service.id}`}
                    variant="brass"
                    size="sm"
                  >
                    Reserve Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
