import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "brass";
  withTagline?: boolean;
}

export function Logo({
  className = "",
  variant = "dark",
  withTagline = false,
}: LogoProps) {
  const textColor =
    variant === "light"
      ? "text-[#F8F6F1]"
      : variant === "brass"
      ? "text-[#B38E58]"
      : "text-[#171614]";

  const metaColor =
    variant === "light" ? "text-[#F8F6F1]/60" : "text-[#666159]";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-start select-none transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Care4U Studio — Home"
    >
      <div className="flex items-baseline space-x-2">
        <span
          className={`font-serif tracking-[0.05em] text-[1.45rem] sm:text-[1.7rem] uppercase font-normal leading-none ${textColor}`}
        >
          CARE4U
        </span>
        <span
          className={`font-sans font-medium text-[0.7rem] sm:text-[0.75rem] tracking-[0.2em] uppercase ${textColor} opacity-80`}
        >
          STUDIO
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] inline-block" />
      </div>
      {withTagline && (
        <span
          className={`font-sans text-[10px] tracking-[0.16em] uppercase mt-1 ${metaColor}`}
        >
          Haircuts, Color & Head Spa · Paris
        </span>
      )}
    </Link>
  );
}
