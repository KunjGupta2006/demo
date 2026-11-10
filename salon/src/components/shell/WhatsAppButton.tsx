"use client";

import React from "react";
import { SALON_INFO } from "@/data/salonInfo";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.contact.whatsapp}?text=Bonjour%20Care4U%20Studio,%20I%20would%20like%20to%20inquire%20about%20a%20private%20coiffure%20appointment.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Concierge Inquiry"
      className="fixed bottom-6 right-6 z-40 bg-[#121110] text-[#F8F6F1] hover:bg-[#B38E58] hover:text-[#171614] transition-all duration-300 p-3.5 border border-[rgba(248,246,241,0.15)] shadow-lg flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase cursor-pointer group"
    >
      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
      <span className="hidden sm:inline">Concierge</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="transition-transform group-hover:scale-110"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
      </svg>
    </a>
  );
}
