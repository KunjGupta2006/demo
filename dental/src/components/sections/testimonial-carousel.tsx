"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GoogleIcon } from "@/components/icons/brand-icons";
import clinic from "@/data/clinic";

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = clinic.testimonials;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="reviews" className="bg-slate-50/60 py-24 border-b border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-900">4.9 / 5.0 Rating</span>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>250+ Verified Reviews</span>
              </div>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
              What our patients say.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-normal">
              Read real stories from people who used to be nervous about dental visits.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, i) => {
            const initials = review.name.split(" ").map((n) => n[0]).join("");

            return (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="bg-white rounded-[24px] p-7 border border-slate-200 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-400 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                      <div className="flex items-center text-amber-400">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {review.treatment}
                      </span>
                    </div>

                    <p className="text-slate-800 text-base leading-relaxed mb-6 font-normal">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading font-bold text-xs shrink-0">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-slate-900 text-sm">
                        {review.name}
                      </h4>
                      <span className="text-xs text-slate-400 font-normal block">
                        Verified Google Review
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
