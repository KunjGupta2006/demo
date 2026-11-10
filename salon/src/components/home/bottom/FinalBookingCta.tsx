"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { IconArrowRight } from "@/components/ui/Icons";
import { SALON_INFO } from "@/data/salonInfo";

export function FinalBookingCta() {
  return (
    <Section variant="dark" padding="xl" className="relative overflow-hidden bg-slate-950 text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-20 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-[11px] font-sans font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            Care4U Studio · 48 Quai de la Tournelle, Paris
          </div>

          <h2 className="font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-normal text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
            Ready for hair that truly feels like you?
          </h2>

          <p className="text-[17px] text-slate-300 font-normal max-w-xl leading-relaxed mb-10">
            Book your appointment online in under two minutes, or give our concierge a call if you have any questions before reserving.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Button
              href="/booking"
              variant="crystal"
              size="lg"
              magnetic={true}
              icon={<IconArrowRight size={18} />}
            >
              Book an Appointment
            </Button>

            <a
              href={`tel:${SALON_INFO.contact.phoneFormatted}`}
              className="font-sans text-[13px] uppercase tracking-wider text-white hover:text-[#38BDF8] py-3.5 px-6 border border-white/25 rounded transition-colors font-medium"
            >
              Call Us: {SALON_INFO.contact.phone}
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 font-sans text-[12px] text-slate-400">
            <span>Free Courtyard Parking</span>
            <span>•</span>
            <span>Unrushed 1-on-1 Appointments</span>
            <span>•</span>
            <span>Flexible 48-Hour Rescheduling</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
