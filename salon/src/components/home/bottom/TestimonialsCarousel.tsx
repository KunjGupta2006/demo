"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { IconStar } from "@/components/ui/Icons";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS_DATA.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS_DATA.length - 1 ? 0 : c + 1));
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <Section id="testimonials" variant="surface" padding="xl" hairlineBottom={true} className="bg-slate-50">
      <Container size="narrow">
        {/* Google 5.0 Rating Badge */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="flex text-[#E11D48] space-x-1">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} size={16} />
              ))}
            </div>
            <span className="font-sans text-[13px] font-semibold text-slate-900">
              5.0 / 5.0 RATING
            </span>
            <span className="text-slate-500 text-[13px] hidden sm:inline">
              (Over 380 Verified Client Reviews)
            </span>
          </div>

          <span className="font-sans text-[12px] uppercase tracking-wider text-[#0284C7] font-semibold">
            Client Reviews
          </span>
        </div>

        {/* Big Type Quote */}
        <div className="min-h-[240px] sm:min-h-[200px] flex flex-col justify-center">
          <blockquote className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-normal text-slate-900 leading-[1.3] tracking-tight mb-8">
            “{activeTestimonial.quote}”
          </blockquote>

          <div className="flex flex-col sm:flex-row items-baseline justify-between pt-6 border-t border-slate-200">
            <div>
              <span className="font-sans text-[16px] font-semibold text-slate-900 block">
                {activeTestimonial.clientName}
              </span>
              <span className="font-sans text-[13px] text-slate-500 mt-0.5 block">
                {activeTestimonial.serviceReceived} · Stylist: {activeTestimonial.stylistName}
              </span>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <span className="font-sans text-[12px] text-slate-500 mr-2 font-medium">
                {currentIndex + 1} of {TESTIMONIALS_DATA.length}
              </span>

              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 border border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center font-sans text-[15px] cursor-pointer rounded"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 border border-[rgba(23,22,20,0.2)] text-[#171614] hover:bg-[#171614] hover:text-[#F8F6F1] transition-colors flex items-center justify-center font-mono text-[13px] cursor-pointer"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
