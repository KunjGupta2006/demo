"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { STYLISTS_DATA } from "@/data/stylists";

export function StylistsHorizontal() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <Section id="stylists-roster" variant="light" padding="xl" hairlineBottom={true} className="bg-white">
      <Container>
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <Heading level={2} size="display-xl" className="text-slate-900 mb-2">
              Our Stylists & Colorists
            </Heading>
            <p className="text-[16px] text-slate-600 font-sans">
              Experienced, thoughtful professionals dedicated to healthy hair and effortless style.
            </p>
          </div>

          {/* Slider Control Arrows */}
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center font-sans text-[16px] cursor-pointer rounded"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center font-sans text-[16px] cursor-pointer rounded"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Roster Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {STYLISTS_DATA.map((stylist) => (
            <div
              key={stylist.id}
              className="w-[320px] sm:w-[380px] shrink-0 snap-start bg-slate-50 border border-slate-200 flex flex-col justify-between p-6 sm:p-7 shadow-sm group rounded-lg"
            >
              <div>
                {/* Stylist Portrait */}
                <div className="relative aspect-[3/4] w-full bg-slate-200 overflow-hidden mb-6 border border-slate-200/80 rounded">
                  <Image
                    src={stylist.avatar}
                    alt={stylist.name}
                    fill
                    sizes="(max-width: 768px) 320px, 380px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/85 text-white font-sans text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded">
                    {stylist.experienceYears} Years Exp
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-serif text-[1.8rem] text-slate-900 leading-tight mb-1">
                  {stylist.name}
                </h3>
                <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-[#0284C7] block mb-4">
                  {stylist.role}
                </span>

                <p className="text-[14px] text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                  {stylist.bio}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {stylist.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="font-sans text-[11px] bg-white text-slate-700 px-2.5 py-1 border border-slate-200 rounded font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`/team/${stylist.slug}`}
                  className="font-sans text-[12px] uppercase tracking-wider text-slate-700 hover:text-[#0284C7] font-semibold"
                >
                  View Profile
                </Link>

                <Button
                  href={`/booking?stylist=${stylist.id}`}
                  variant="crystal"
                  size="sm"
                >
                  Book with {stylist.name.split(" ")[0]}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
