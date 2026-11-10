import { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin, Car, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ClinicHours } from "@/components/sections/clinic-hours";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "Contact & Clinic Location — Indiranagar, Bengaluru",
  description:
    "Contact Aura Dental Studio on 12th Main Road, Indiranagar, Bengaluru. Direct phone, instant WhatsApp, clinic hours, and complimentary valet parking.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-800">
                Front Desk · Open Today
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-slate-950 font-extrabold tracking-tight leading-[1.08]">
              We&apos;re here to help. <span className="text-[#0066FF]">Reach out anytime</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
              Whether you need to book a regular checkup, get quick answers via WhatsApp, or need immediate assistance for a dental emergency, our friendly front desk team is ready.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-20 bg-white border-b border-slate-200">
        <Container>
          {/* Contact Communication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#0066FF] border border-slate-200 flex items-center justify-center mb-6 shadow-xs">
                  <Phone className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF] block mb-1">
                  Direct Clinic Call
                </span>
                <h3 className="text-2xl text-slate-950 font-bold tracking-tight mb-2">Speak to Reception</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Call our team directly for instant slot confirmation or emergency same-day appointments.
                </p>
              </div>
              <a
                href={`tel:${clinic.phone}`}
                className="text-lg font-bold text-slate-950 hover:text-[#0066FF] transition-colors"
              >
                {clinic.phone.replace("+91", "+91 ")}
              </a>
            </div>

            {/* WhatsApp Concierge */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 ring-2 ring-emerald-500/10">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6 shadow-xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 block mb-1">
                  Fastest Response · Under 5 Mins
                </span>
                <h3 className="text-2xl text-slate-950 font-bold tracking-tight mb-2">WhatsApp Us</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Send a quick text for questions, price estimates, or to send photos of your smile concerns.
                </p>
              </div>
              <a
                href={`https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent("Hello Aura Studio, I would like to book an appointment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#0066FF] border border-slate-200 flex items-center justify-center mb-6 shadow-xs">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 block mb-1">
                  Records & General Queries
                </span>
                <h3 className="text-2xl text-slate-950 font-bold tracking-tight mb-2">Email Desk</h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  For previous dental X-rays, insurance claims paperwork, and non-urgent inquiries.
                </p>
              </div>
              <a
                href={`mailto:${clinic.email}`}
                className="text-xs font-bold text-slate-950 hover:text-[#0066FF] transition-colors truncate block"
              >
                {clinic.email}
              </a>
            </div>
          </div>

          {/* Location & Directions Detail Box */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#0066FF] block">
                Find Us in Indiranagar
              </span>
              <h2 className="text-3xl sm:text-4xl text-slate-950 font-bold tracking-tight">
                Prestige Oasis, 12th Main Road
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {clinic.address.full}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700">
                <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
                  <Car className="w-4 h-4 text-[#0066FF]" />
                  <span>Free Valet Parking at Building Gate</span>
                </span>
                <span className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct Elevator to 2nd Floor</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-end gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold px-8 shadow-md">
                <a
                  href={clinic.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <ClinicHours />
    </>
  );
}
