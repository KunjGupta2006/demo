"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function MembershipTeaser() {
  const perks = [
    {
      title: "Guaranteed Priority Reservation",
      desc: "Direct access to creative directors Éléonore Vance and Kaito Tanaka within 48 hours notice.",
    },
    {
      title: "Complimentary Carbonated Baths",
      desc: "Four seasonal Japanese head spa and scalp detox immersions included per calendar year.",
    },
    {
      title: "Private Suite Stewardship",
      desc: "Reserved use of the mezzanine acoustic suite with artisanal tea and champagne hospitality.",
    },
    {
      title: "Quarterly Formulation Gift",
      desc: "Full-sized seasonal botanical tinctures and horn dressing tools delivered to your residence.",
    },
  ];

  return (
    <Section id="membership-teaser" variant="surface" padding="xl" hairlineBottom={true} className="bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (Cols 1-7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#DDD6FE] text-[#7C3AED] text-[11px] font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
              Studio Society
            </div>
            <Heading level={2} size="display-xl" className="text-slate-900 mb-6">
              Memberships & Gift Vouchers
            </Heading>
            <p className="text-[16px] text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
              Priority reservations with senior stylists, seasonal Japanese head spa treatments, and private suite access throughout the year.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {perks.map((p, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <h4 className="font-serif text-[1.15rem] text-slate-900">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-slate-600 leading-relaxed pl-4">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="/membership" variant="purple" size="md">
                View Membership Tiers
              </Button>
              <Link
                href="/membership#gift-cards"
                className="font-sans text-[13px] uppercase tracking-wider text-slate-800 hover:text-[#8B5CF6] font-semibold py-3 ml-2"
              >
                Purchase Gift Voucher →
              </Link>
            </div>
          </div>

          {/* Right Inset Card: Tier Preview (Cols 8-12) */}
          <div className="lg:col-span-5 bg-[#121110] text-[#F8F6F1] p-8 sm:p-10 border border-[rgba(248,246,241,0.12)] shadow-xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B38E58] block mb-2">
              Patron Tier Feature
            </span>
            <h3 className="font-serif text-[2.2rem] text-[#F8F6F1] leading-tight mb-2">
              Le Privilège
            </h3>
            <div className="font-mono text-[16px] text-[#B38E58] mb-6">
              €280 <span className="text-[12px] text-[#666159]">/ MONTH</span>
            </div>

            <ul className="space-y-3 text-[13px] text-[#F8F6F1]/80 mb-8 border-t border-[rgba(248,246,241,0.1)] pt-6 font-light">
              <li className="flex items-center space-x-2">
                <span className="text-[#B38E58]">✓</span>
                <span>Monthly dry precision sculpture or fringe renewal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#B38E58]">✓</span>
                <span>Bimonthly acidic shine gloss and treatment seal</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#B38E58]">✓</span>
                <span>Priority slot booking with 24-hour guarantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#B38E58]">✓</span>
                <span>15% courtesy on all botanical take-home formulas</span>
              </li>
            </ul>

            <Button href="/membership" variant="brass" size="md" className="w-full">
              Inquire for Membership
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}
