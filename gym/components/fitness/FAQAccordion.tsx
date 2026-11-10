"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      if (openIds.includes(id)) {
        setOpenIds(openIds.filter((item) => item !== id));
      } else {
        setOpenIds([...openIds, id]);
      }
    } else {
      if (openIds.includes(id)) {
        setOpenIds([]);
      } else {
        setOpenIds([id]);
      }
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="border border-[rgba(241,238,231,0.10)] rounded-[8px] bg-[#191917] overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] focus:ring-inset cursor-pointer group"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-btn-${item.id}`}
            >
              <span className="font-subhead text-base sm:text-lg font-semibold text-[#F1EEE7] group-hover:text-[#C8A45D] transition-colors">
                {item.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full bg-[#262622] flex items-center justify-center text-[#C8A45D] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#C8A45D] text-[#10100F]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="px-5 pb-6 sm:px-6 text-sm md:text-base text-[#B8B3A8] leading-relaxed border-t border-[rgba(241,238,231,0.06)] pt-4 animate-in fade-in-50 duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
