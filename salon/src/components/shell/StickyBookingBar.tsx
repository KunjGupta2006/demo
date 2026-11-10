"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { getAtelierStatus } from "@/data/salonInfo";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const status = getAtelierStatus();

  useEffect(() => {
    const handleScroll = () => {
      // Appear after passing hero (300px)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Booking"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F8F6F1]/95 backdrop-blur-md border-t border-[rgba(23,22,20,0.12)] p-3.5 shadow-[0_-8px_25px_rgba(23,22,20,0.08)] flex items-center justify-between"
    >
      <div className="flex flex-col pl-2">
        <span className="font-serif text-[14px] leading-tight text-[#171614] font-medium">
          Care4U Studio
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#3F5A2A]">
          ● {status.statusText}
        </span>
      </div>

      <div className="flex items-center space-x-2.5">
        <Link
          href="/services"
          className="text-[11px] font-sans uppercase tracking-wider text-[#171614] px-3 py-2 hover:text-[#B38E58]"
        >
          Menu
        </Link>
        <Button href="/booking" variant="brass" size="sm">
          Book Now
        </Button>
      </div>
    </aside>
  );
}
