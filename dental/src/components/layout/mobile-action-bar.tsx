"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import clinic from "@/data/clinic";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 safe-area-bottom shadow-lg">
      <div className="flex items-center justify-around h-16">
        <a
          href={`tel:${clinic.phone}`}
          className="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px] text-slate-700 hover:text-blue-600 transition-colors"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Call</span>
        </a>
        <a
          href={`https://wa.me/${clinic.whatsapp}?text=Hi! I'd like to book an appointment with Aura Dental.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px] text-slate-700 hover:text-emerald-600 transition-colors"
          aria-label="WhatsApp clinic"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
          <span className="text-[10px] uppercase font-bold tracking-wider">WhatsApp</span>
        </a>
        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-[48px] text-blue-600 font-bold transition-colors"
          aria-label="Book appointment"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
