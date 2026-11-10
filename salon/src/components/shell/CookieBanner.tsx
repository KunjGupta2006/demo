"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("care4u_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("care4u_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("care4u_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Cookie Preferences"
      className="fixed bottom-6 left-6 z-50 max-w-md bg-[#121110] text-[#F8F6F1] p-6 border border-[rgba(248,246,241,0.15)] shadow-2xl"
    >
      <div className="flex flex-col space-y-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B38E58]">
          [Privacy Discretion]
        </span>
        <p className="font-sans text-[12px] text-[#F8F6F1]/80 leading-relaxed">
          We use minimal analytical tokens to preserve your studio booking state and evaluate site performance. Zero advertising trackers.
        </p>
        <div className="flex items-center space-x-3 pt-2">
          <Button onClick={handleAccept} variant="brass" size="sm">
            Acknowledge
          </Button>
          <button
            onClick={handleDecline}
            className="text-[11px] font-mono tracking-wider uppercase text-[#666159] hover:text-[#F8F6F1] underline transition-colors px-2 py-1"
          >
            Essential Only
          </button>
          <Link
            href="/legal/privacy"
            className="text-[11px] font-mono tracking-wider uppercase text-[#666159] hover:text-[#B38E58] transition-colors ml-auto"
          >
            Policy
          </Link>
        </div>
      </div>
    </aside>
  );
}
