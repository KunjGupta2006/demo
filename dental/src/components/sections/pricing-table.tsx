"use client";

import Link from "next/link";
import { ArrowRight, Check, CreditCard, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import clinic from "@/data/clinic";

export function PricingTable() {
  return (
    <Section id="pricing" className="bg-slate-50/60 py-24 border-b border-slate-200/80">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Honest Pricing</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Transparent costs, zero surprises.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            You receive a written cost estimate before any treatment begins.
          </p>
        </div>

        {/* 3 Trust Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Flexible Payments
            </span>
            <p className="font-heading font-bold text-lg text-slate-900 mb-1">0% No-Cost EMI</p>
            <p className="text-xs text-slate-500 font-normal">Monthly installments available on treatments over ₹10,000</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Insurance Friendly
            </span>
            <p className="font-heading font-bold text-lg text-slate-900 mb-1">Cashless Insurance Desk</p>
            <p className="text-xs text-slate-500 font-normal">Direct claims processing with leading health insurers</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Warranty Guaranteed
            </span>
            <p className="font-heading font-bold text-lg text-slate-900 mb-1">15-Year Warranty</p>
            <p className="text-xs text-slate-500 font-normal">Written certificate on implants and ceramic zirconia crowns</p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {clinic.services.map((service, idx) => (
            <Reveal key={service.slug} delay={0.05 * (idx % 4)}>
              <div className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-400 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mb-5 font-normal">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-0.5">
                    Starting from
                  </span>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="font-heading font-extrabold text-2xl text-slate-900">
                      ₹{service.priceStarting.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-slate-400">
                      {service.slug === "teeth-whitening" || service.slug === "checkup-cleaning" ? "/ visit" : "/ tooth"}
                    </span>
                  </div>

                  <Button asChild size="sm" className="w-full rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-blue-600 text-slate-900 hover:text-white transition-colors">
                    <Link href={`/book?service=${encodeURIComponent(service.name)}`}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* First Visit Callout Card */}
        <Reveal delay={0.15}>
          <div className="rounded-[28px] bg-slate-950 p-8 sm:p-12 text-white text-center max-w-3xl mx-auto shadow-elevated border border-slate-800">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
              New Patient Welcome
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
              Full Oral Checkup & Digital X-Rays for ₹500
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 font-normal leading-relaxed">
              Includes full examination, digital teeth photos, and a 1-on-1 consultation with our doctor to discuss any questions you have.
            </p>
            <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm px-8">
              <Link href="/book" className="flex items-center gap-2">
                <span>Book Your ₹500 Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
