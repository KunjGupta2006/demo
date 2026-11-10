"use client";

import React from "react";

export function Marquee() {
  const items = [
    { text: "PRECISION DRY HAIRCUTS", dot: "bg-[#0284C7]" },
    { text: "NATURAL BALAYAGE & GLOSS", dot: "bg-[#E11D48]" },
    { text: "JAPANESE SCALP HEAD SPA", dot: "bg-[#8B5CF6]" },
    { text: "HEALTHY BOTANICAL TREATMENTS", dot: "bg-[#0284C7]" },
    { text: "BRIDAL & COUTURE STYLING", dot: "bg-[#E11D48]" },
    { text: "MEN'S HAIRCUT & GROOMING", dot: "bg-[#8B5CF6]" },
    { text: "PRIVATE QUIET SUITES", dot: "bg-[#0284C7]" },
    { text: "PARIS 5E · QUAI DE LA TOURNELLE", dot: "bg-[#E11D48]" },
  ];

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-900 text-white py-4 border-y border-slate-800 select-none"
      aria-label="Salon Services Marquee"
    >
      <div className="flex w-max animate-marquee">
        {/* Loop 1 */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center space-x-8">
              <span className="font-sans text-[12px] sm:text-[13px] uppercase tracking-[0.16em] font-medium text-slate-200">
                {item.text}
              </span>
              <span className={`w-2 h-2 rounded-full ${item.dot}`} />
            </div>
          ))}
        </div>

        {/* Loop 2 (Continuous duplication) */}
        <div className="flex items-center space-x-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center space-x-8">
              <span className="font-sans text-[12px] sm:text-[13px] uppercase tracking-[0.16em] font-medium text-slate-200">
                {item.text}
              </span>
              <span className={`w-2 h-2 rounded-full ${item.dot}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
