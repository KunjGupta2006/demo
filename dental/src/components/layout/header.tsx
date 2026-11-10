"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";
import clinic from "@/data/clinic";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#services", label: "Treatments" },
  { href: "/#results", label: "Before & After" },
  { href: "/#doctors", label: "Our Doctors" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/contact", label: "Location" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Modern Agency Brand Mark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${clinic.name} - Home`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-heading font-extrabold text-base shadow-sm group-hover:scale-105 transition-transform">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                Aura Dental
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-1">
                Indiranagar, Bengaluru
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${clinic.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-full"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 98765 43210</span>
            </a>

            <Button asChild size="sm" className="hidden sm:inline-flex rounded-full text-xs font-semibold px-5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
              <Link href="/book">Book Appointment</Link>
            </Button>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-800 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
