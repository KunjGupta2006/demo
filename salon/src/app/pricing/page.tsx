"use client";

import React from "react";
import Link from "next/link";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";
import { ServiceCategory } from "@/types";

export default function PricingPage() {
  const categoryNames: Record<ServiceCategory, string> = {
    haircuts: "Haircuts & Styling",
    colour: "Color & Balayage",
    styling: "Event Styling & Blowouts",
    keratin: "Scalp Care & Treatments",
    facials: "Facials & Skin Care",
    nails: "Nails & Manicures",
    makeup: "Makeup",
    grooming: "Men's Hair & Grooming",
  };

  const categories: ServiceCategory[] = [
    "haircuts",
    "colour",
    "styling",
    "keratin",
    "facials",
    "nails",
    "grooming",
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="flex flex-col sm:flex-row items-baseline justify-between max-w-4xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Transparent Pricing
              </div>
              <Heading level={1} size="display-xl" className="mb-4">
                Services & Pricing
              </Heading>
              <p className="text-[16px] text-slate-600 leading-relaxed font-normal">
                Clear and transparent pricing. Every haircut and color service includes a hair wash, scalp massage, and blowout.
              </p>
            </div>

            <button
              onClick={handlePrint}
              type="button"
              className="mt-6 sm:mt-0 text-[12px] font-medium text-slate-700 hover:text-sky-600 border border-slate-300 rounded-lg px-4 py-2.5 transition-colors cursor-pointer shrink-0 print:hidden hover:border-sky-300"
            >
              Print Menu ⎙
            </button>
          </div>
        </Container>
      </Section>

      {/* Menu Categories */}
      <Section variant="surface" padding="xl">
        <Container>
          <div className="space-y-16 max-w-5xl mx-auto">
            {categories.map((catKey) => {
              const servicesInCategory = SERVICES_DATA.filter((s) => s.category === catKey);
              if (servicesInCategory.length === 0) return null;

              return (
                <div key={catKey} id={catKey} className="scroll-mt-32 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
                  {/* Category Title */}
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-4 mb-6">
                    <h2 className="font-serif text-[1.8rem] text-slate-900 tracking-tight">
                      {categoryNames[catKey]}
                    </h2>
                    <span className="text-[12px] text-slate-500 font-mono">
                      {servicesInCategory.length} services
                    </span>
                  </div>

                  {/* Tabular Services List */}
                  <div className="divide-y divide-slate-100">
                    {servicesInCategory.map((service) => (
                      <div
                        key={service.id}
                        className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group"
                      >
                        <div className="flex-1 pr-6">
                          <div className="flex items-baseline space-x-3 mb-1">
                            <Link
                              href={`/services/${service.slug}`}
                              className="font-serif text-[1.25rem] text-slate-900 group-hover:text-sky-600 transition-colors"
                            >
                              {service.title}
                            </Link>
                            {service.badge && (
                              <span className="text-[10px] font-semibold bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[14px] text-slate-500 leading-relaxed mb-1.5 max-w-xl">
                            {service.subtitle}
                          </p>
                          <span className="text-[12px] text-slate-400 font-mono">
                            {service.durationMinutes} mins
                          </span>
                        </div>

                        <div className="flex items-center space-x-5 sm:shrink-0 justify-between sm:justify-end">
                          <span className="text-[18px] font-semibold text-slate-900 font-mono">
                            ${service.price}
                          </span>

                          <Button
                            href={`/booking?service=${service.id}`}
                            variant="crystal"
                            size="sm"
                            className="print:hidden"
                          >
                            Book
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
