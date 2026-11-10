"use client";

import { ArrowUpRight, Clock, MapPin, Phone, Car } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { useIsOpen } from "@/hooks/use-is-open";
import clinic from "@/data/clinic";

export function ClinicHours() {
  const { isOpen, currentDay } = useIsOpen();

  return (
    <Section id="hours" className="bg-white py-24 border-b border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Clinic Timing & Location</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Visiting our clinic.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Conveniently located on 12th Main Road, Indiranagar. Free valet parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Working Hours Card */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="bg-slate-50/70 rounded-[24px] p-7 sm:p-9 border border-slate-200">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Visiting Schedule
                    </span>
                    <h3 className="font-heading font-bold text-xl text-slate-900">
                      Opening Hours
                    </h3>
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                    isOpen
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-rose-50 text-rose-800 border-rose-200"
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`} />
                    {isOpen ? "Open Now" : "Closed Now"}
                  </span>
                </div>

                <div className="space-y-2">
                  {clinic.hours.map((h) => {
                    const isToday = h.day.toLowerCase() === currentDay.toLowerCase();
                    return (
                      <div
                        key={h.day}
                        className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-xs sm:text-sm transition-colors ${
                          isToday
                            ? "bg-white text-blue-600 font-bold border border-slate-200 shadow-2xs"
                            : "text-slate-600 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{h.day}</span>
                          {isToday && (
                            <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full">
                              Today
                            </span>
                          )}
                        </div>
                        <span className="font-medium text-slate-700">
                          {h.isClosed ? "Closed" : `${h.open} – ${h.close}`}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-normal">
                  <span>Emergency Line:</span>
                  <a href={`tel:${clinic.phone}`} className="font-bold text-blue-600 hover:underline">
                    {clinic.phone} (24/7 on-call)
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Location & Directions Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="bg-slate-50/70 rounded-[24px] p-7 sm:p-9 border border-slate-200 space-y-6">
                <div className="pb-4 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Clinic Address
                  </span>
                  <h3 className="font-heading font-bold text-xl text-slate-900">
                    Indiranagar, Bengaluru
                  </h3>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3 shadow-2xs">
                  <p className="font-heading font-bold text-lg text-slate-900">{clinic.name}</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{clinic.address.full}</p>

                  <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                      <Car className="w-3.5 h-3.5 text-blue-600" />
                      Free Valet Parking
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      Near 100 Feet Road Junction
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild size="md" className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                    <a
                      href={clinic.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Google Maps Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="md" className="w-full sm:w-auto rounded-full border-slate-300 hover:border-slate-900 font-semibold text-xs uppercase tracking-wider bg-white">
                    <a href={`tel:${clinic.phone}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span>Call Front Desk</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
