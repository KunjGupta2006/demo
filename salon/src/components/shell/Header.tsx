"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { IconMenu, IconClose } from "@/components/ui/Icons";
import { getAtelierStatus } from "@/data/salonInfo";

interface HeaderProps {
  onOpenMobileMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

export function Header({ onOpenMobileMenu, isMobileMenuOpen = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const status = getAtelierStatus();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine background transparency threshold
      setIsScrolled(currentScrollY > 40);

      // Determine hide on scroll down / show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
          setIsVisible(false); // Scrolling down
        } else if (lastScrollY - currentScrollY > 8) {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Stylists", href: "/team" },
    { label: "Lookbook", href: "/gallery" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Wordmark */}
        <Logo variant="dark" withTagline={!isScrolled} />

        {/* Center Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center space-x-9 text-[12px] uppercase tracking-[0.15em] font-sans text-slate-800"
          aria-label="Desktop Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  isActive ? "text-[#0284C7]" : "text-slate-700 hover:text-[#0284C7]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions & Live Status */}
        <div className="flex items-center space-x-5">
          <div className="hidden md:flex items-center space-x-2 text-[11px] font-sans tracking-[0.06em] text-slate-500 uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden lg:inline">{status.statusText}</span>
            <span className="opacity-40">/</span>
            <span>Paris 5e</span>
          </div>

          <Button
            href="/booking"
            variant="crystal"
            size="sm"
            magnetic={true}
            className="hidden sm:inline-flex"
          >
            Book Appointment
          </Button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="xl:hidden p-2.5 text-[#171614] hover:text-[#B38E58] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171614] min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
