"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { businessDetails } from "@/data/business";

export const MobileCTABar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#10100F]/95 backdrop-blur-md border-t border-[rgba(241,238,231,0.12)] p-2.5 px-4 shadow-2xl flex items-center gap-2">
      <a
        href={`tel:${businessDetails.contact.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#262622] text-[#F1EEE7] border border-[rgba(241,238,231,0.15)] rounded font-subhead text-xs font-semibold uppercase tracking-wider hover:bg-[#32322d] active:scale-95 transition-transform"
        aria-label="Call Gym"
      >
        <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
        <span>Call</span>
      </a>

      <a
        href={`https://wa.me/919000000000?text=Hi%20Spark%20Fitness,%20I'd%20like%20to%20enquire%20about%20a%20free%20trial.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#262622] text-[#F1EEE7] border border-[rgba(241,238,231,0.15)] rounded font-subhead text-xs font-semibold uppercase tracking-wider hover:bg-[#32322d] active:scale-95 transition-transform"
        aria-label="WhatsApp Gym"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#72B47B]" />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/book-trial"
        className="flex-[1.8] flex items-center justify-center gap-1.5 py-2.5 bg-[#F1EEE7] text-[#10100F] rounded font-subhead text-xs font-bold uppercase tracking-wider hover:bg-[#C8A45D] active:scale-95 transition-transform shadow-md"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Trial</span>
      </Link>
    </div>
  );
};
