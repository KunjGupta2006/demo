"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import clinic from "@/data/clinic";

export function FinalCTA() {
  return (
    <Section className="py-20 bg-slate-50/60">
      <Container>
        <Reveal>
          <div className="relative rounded-[32px] bg-slate-950 p-10 sm:p-14 md:p-18 text-white shadow-elevated overflow-hidden border border-slate-800">
            {/* Luminous Glow Accent */}
            <div 
              aria-hidden="true" 
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" 
            />
            <div 
              aria-hidden="true" 
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" 
            />

            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/60">
                Easy Online Scheduling
              </span>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Ready for a dental visit that actually feels comfortable?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-normal leading-relaxed">
                Book in 60 seconds. Same-day appointments and emergency slots reserved every single day.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm px-8 h-12 rounded-full"
                >
                  <Link href="/book" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Visit (₹500)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white border-slate-700 hover:bg-slate-800 font-semibold text-xs uppercase tracking-wider h-12 rounded-full"
                >
                  <a
                    href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(
                      "Hi Aura Dental! I would like to book an appointment."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Button>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-normal">
                <span>Direct Clinic Line: {clinic.phone}</span>
                <span>·</span>
                <span>Valet Parking Available</span>
                <span>·</span>
                <span>Indiranagar, Bengaluru</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
