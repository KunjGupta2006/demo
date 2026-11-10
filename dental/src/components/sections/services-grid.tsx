"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Sparkles, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import clinic from "@/data/clinic";

export function ServicesGrid({ showAll = false }: { showAll?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Section id="services" className="bg-slate-50/60 py-24 border-b border-slate-200/80 overflow-hidden">
      <Container>
        {/* Section Header with Horizontal Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Popular Treatments</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
              Gentle care for every smile.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal">
              Browse our everyday dental services. Transparent pricing with zero surprise charges.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll treatments left"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll treatments right"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing"
        >
          {clinic.services.map((service, idx) => {
            return (
              <div
                key={service.slug}
                className="w-[320px] sm:w-[360px] shrink-0 bg-white rounded-[24px] p-7 border border-slate-200/90 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-400 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Price & Duration Badge */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      From ₹{service.priceStarting.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Plain English Benefits */}
                  <div className="space-y-2 mb-6 pt-2">
                    {service.whoIsItFor.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Button asChild size="sm" className="w-full rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white transition-colors">
                    <Link href={`/book?service=${encodeURIComponent(service.name)}`}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Swipe Hint on Mobile */}
        <div className="sm:hidden text-center text-xs text-slate-400 mt-2 font-medium">
          ← Swipe horizontally to explore all treatments →
        </div>
      </Container>
    </Section>
  );
}
