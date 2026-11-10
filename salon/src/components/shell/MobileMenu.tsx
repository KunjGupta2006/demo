"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { IconClose, IconArrowRight } from "@/components/ui/Icons";
import { SALON_INFO, getAtelierStatus } from "@/data/salonInfo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const status = getAtelierStatus();

  // Handle ESC key press and scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  const links = [
    { label: "Home", href: "/" },
    { label: "Services Menu", href: "/services" },
    { label: "Pricing Catalog", href: "/pricing" },
    { label: "Master Sculptors", href: "/team" },
    { label: "Lookbook Gallery", href: "/gallery" },
    { label: "Editorial Journal", href: "/journal" },
    { label: "The Studio Story", href: "/about" },
    { label: "Contact & Concierge", href: "/contact" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#121110] text-[#F8F6F1] flex flex-col justify-between overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between border-b border-[rgba(248,246,241,0.1)]">
        <Logo variant="light" withTagline={false} />
        
        <button
          onClick={onClose}
          className="p-2.5 text-[#F8F6F1] hover:text-[#B38E58] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Close navigation menu"
        >
          <IconClose size={24} />
        </button>
      </div>

      {/* Main Nav Links */}
      <div className="flex-1 px-5 sm:px-8 py-10 flex flex-col justify-center max-w-[1720px] mx-auto w-full">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58] mb-6">
          [Navigation Directory]
        </span>

        <nav className="flex flex-col space-y-4 sm:space-y-6" aria-label="Mobile Menu Links">
          {links.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-baseline justify-between border-b border-[rgba(248,246,241,0.06)] pb-3"
              >
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-[11px] text-[#666159]">
                    0{idx + 1}
                  </span>
                  <span
                    className={`font-serif text-[clamp(1.75rem,4vw,2.5rem)] leading-none transition-colors ${
                      isActive
                        ? "text-[#B38E58] italic font-normal"
                        : "text-[#F8F6F1] group-hover:text-[#B38E58]"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <IconArrowRight
                  size={18}
                  className="text-[#666159] group-hover:text-[#B38E58] group-hover:translate-x-1 transition-all"
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Info & Mobile CTA */}
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-8 py-6 border-t border-[rgba(248,246,241,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] font-mono tracking-wider text-[#666159] text-center sm:text-left">
          <span>{SALON_INFO.address.street}, {SALON_INFO.address.city}</span>
          <span className="mx-2">•</span>
          <span className="text-[#3F5A2A]">{status.statusText}</span>
        </div>

        <Button
          href="/booking"
          variant="brass"
          size="lg"
          className="w-full sm:w-auto"
        >
          Reserve An Appointment
        </Button>
      </div>
    </div>
  );
}
