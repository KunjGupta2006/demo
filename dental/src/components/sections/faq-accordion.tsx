"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import clinic from "@/data/clinic";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <Section id="faq" className="bg-white py-24 border-b border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Frequently asked questions.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Everything you need to know about visits, comfort, and appointments.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {clinic.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-100/60 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 px-6 max-w-xl mx-auto shadow-2xs">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold text-slate-900">Have a specific question?</p>
              <p className="text-xs text-slate-500 font-normal">Our clinic coordinator is available on WhatsApp.</p>
            </div>
            <Button
              asChild
              size="sm"
              className="mt-2 sm:mt-0 sm:ml-auto rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                  "Hi! I have a question about dental treatments at Aura Dental Studio."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
