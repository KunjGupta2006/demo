import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  gold?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  children,
  className = "",
  gold = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-2 mb-3 ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${gold ? "bg-[#C8A45D]" : "bg-[#F1EEE7]"}`}></span>
      <span className="font-subhead text-xs uppercase tracking-[0.2em] font-bold text-[#C8A45D]">
        {children}
      </span>
    </div>
  );
};
