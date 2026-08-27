"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Training", href: "/training" },
    { name: "Memberships", href: "/memberships" },
    { name: "Coaches", href: "/coaches" },
    { name: "Results", href: "/results" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#10100F]/90 backdrop-blur-md border-b border-[rgba(241,238,231,0.10)] h-[68px]"
          : "bg-gradient-to-b from-[#10100F]/80 to-transparent h-[80px]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 h-full flex items-center justify-between">
        {/* Wordmark Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
          aria-label="Spark Fitness Home"
        >
          <div className="w-8 h-8 rounded bg-[#C8A45D] flex items-center justify-center text-[#10100F] font-bold transition-transform group-hover:scale-105">
            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl tracking-wider text-[#F1EEE7] uppercase leading-none">
              SPARK <span className="text-[#C8A45D]">FITNESS</span>
            </span>
            <span className="font-subhead text-[10px] uppercase tracking-[0.25em] text-[#77776F] font-medium leading-tight">
              Bandra West
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-subhead text-xs uppercase tracking-widest font-semibold transition-colors relative py-1 focus:outline-none focus:text-[#C8A45D] ${
                  isActive
                    ? "text-[#C8A45D]"
                    : "text-[#B8B3A8] hover:text-[#F1EEE7]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A45D] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden lg:block">
          <Button href="/book-trial" variant="primary" size="sm">
            Book a Free Trial
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F1EEE7] hover:text-[#C8A45D] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] rounded"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bg-[#10100F] border-b border-[rgba(241,238,231,0.10)] px-6 py-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-display text-2xl uppercase tracking-wider py-2 border-b border-[rgba(241,238,231,0.05)] ${
                pathname === "/" ? "text-[#C8A45D]" : "text-[#F1EEE7]"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-2xl uppercase tracking-wider py-2 border-b border-[rgba(241,238,231,0.05)] ${
                  pathname === link.href ? "text-[#C8A45D]" : "text-[#F1EEE7]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <Button
              href="/book-trial"
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Free Trial
            </Button>
            <div className="text-center font-subhead text-xs text-[#77776F] tracking-wider uppercase pt-2">
              Bandra West • Mumbai • Coached Strength & Conditioning
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
