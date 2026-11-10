"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setIsSubscribed(true);
      setEmail("");
    } catch {
      setIsSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-[#121110] text-[#F8F6F1] pt-20 sm:pt-28 pb-12 border-t border-[rgba(248,246,241,0.08)]">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Top 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[rgba(248,246,241,0.08)]">
          
          {/* Column 1: Studio Identity & Address (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-serif text-[1.85rem] tracking-[0.06em] uppercase block text-[#F8F6F1]">
                CARE4U STUDIO
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B38E58] block mt-1">
                {SALON_INFO.tagline}
              </span>
              
              <div className="mt-6 text-[13px] font-sans text-[#F8F6F1]/70 leading-relaxed max-w-sm">
                <p>{SALON_INFO.address.street}</p>
                <p>{SALON_INFO.address.arrondissement}</p>
                <p>{SALON_INFO.address.postalCode} {SALON_INFO.address.city}, {SALON_INFO.address.country}</p>
                <p className="mt-3 text-[11px] font-mono text-[#666159]">
                  Metro: {SALON_INFO.address.metroStation}
                </p>
                <p className="text-[11px] font-mono text-[#666159]">
                  {SALON_INFO.address.valetParking}
                </p>
              </div>
            </div>

            <div className="mt-8 text-[12px] font-mono tracking-wider text-[#B38E58]">
              <a href={`tel:${SALON_INFO.contact.phoneFormatted}`} className="hover:underline">
                {SALON_INFO.contact.phone}
              </a>
              <span className="mx-2">•</span>
              <a href={`mailto:${SALON_INFO.contact.email}`} className="hover:underline">
                {SALON_INFO.contact.email}
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Schedule (Cols 5-7) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B38E58] block mb-5">
              [Studio Hours]
            </span>

            <div className="space-y-2.5 text-[12px] font-mono">
              {SALON_INFO.hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between py-1 border-b border-[rgba(248,246,241,0.04)]">
                  <span className={h.isOpen ? "text-[#F8F6F1]/80" : "text-[#666159]"}>
                    {h.day}
                  </span>
                  <span className={h.isOpen ? "text-[#F8F6F1]" : "text-[#666159]"}>
                    {h.isOpen ? `${h.open} — ${h.close}` : "Closed"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation Directory (Cols 8-9) */}
          <div className="lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B38E58] block mb-5">
              [Directory]
            </span>

            <nav className="flex flex-col space-y-2.5 text-[12px] font-sans uppercase tracking-[0.14em]" aria-label="Footer Directory">
              <Link href="/services" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Services
              </Link>
              <Link href="/pricing" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Pricing Menu
              </Link>
              <Link href="/team" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Master Sculptors
              </Link>
              <Link href="/gallery" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Lookbook
              </Link>
              <Link href="/membership" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Memberships
              </Link>
              <Link href="/journal" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Journal
              </Link>
              <Link href="/about" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Philosophy
              </Link>
              <Link href="/careers" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Residencies
              </Link>
              <Link href="/contact" className="editorial-link text-[#F8F6F1]/80 hover:text-[#B38E58]">
                Concierge
              </Link>
            </nav>
          </div>

          {/* Column 4: Newsletter Journal Dispatch (Cols 10-12) */}
          <div className="lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B38E58] block mb-5">
              [Editorial Dispatch]
            </span>

            <p className="text-[12px] font-sans text-[#F8F6F1]/70 leading-relaxed mb-4">
              Receive quarterly discourse on cranial anatomy, seasonal pigment chemistry, and private masterclass invitations.
            </p>

            {isSubscribed ? (
              <div className="p-3 bg-[#B38E58]/10 border border-[#B38E58]/30 text-[#B38E58] text-[12px] font-mono">
                ✓ Your inquiry has been documented into the dispatch registry.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1C1A18] border border-[rgba(248,246,241,0.15)] px-4 py-3 text-[12px] text-[#F8F6F1] placeholder-[#666159] focus:outline-none focus:border-[#B38E58] rounded-none font-sans"
                  aria-label="Email for newsletter subscription"
                />
                <Button type="submit" variant="brass" size="sm" className="w-full">
                  Subscribe to Dispatch
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Monumental Wordmark Across Viewport Width */}
        <div className="py-12 sm:py-16 text-center overflow-hidden border-b border-[rgba(248,246,241,0.08)] select-none">
          <span className="font-serif tracking-[0.04em] text-[clamp(2.8rem,11.5vw,11rem)] leading-none text-[#F8F6F1]/15 uppercase font-normal block">
            CARE4U STUDIO
          </span>
        </div>

        {/* Bottom Hairline Legal & Coordinates */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-wider text-[#666159] gap-4">
          <div>
            © {new Date().getFullYear()} Care4U Studio. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 uppercase">
            <Link href="/legal/privacy" className="hover:text-[#F8F6F1] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-[#F8F6F1] transition-colors">
              Terms of Service
            </Link>
            <Link href="/legal/cancellation" className="hover:text-[#F8F6F1] transition-colors">
              Cancellation Etiquette
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
