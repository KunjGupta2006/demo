"use client";

import React from "react";
import Link from "next/link";
import { Magnetic } from "@/lib/motion/Magnetic";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "brass" | "crystal" | "crimson" | "purple" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  magnetic?: boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  magnetic = false,
  icon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center font-sans tracking-[0.14em] uppercase transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none font-medium";

  const sizeStyles = {
    sm: "text-[11px] py-2.5 px-5 min-h-[40px]",
    md: "text-[12px] py-3.5 px-7 min-h-[48px]",
    lg: "text-[13px] py-4 px-8 min-h-[52px]",
  };

  const variantStyles = {
    primary:
      "bg-[#0F172A] text-white border border-[#0F172A] hover:bg-[#0284C7] hover:border-[#0284C7] focus-visible:ring-[#0F172A]",
    crystal:
      "bg-[#0284C7] text-white border border-[#0284C7] hover:bg-[#0369A1] hover:border-[#0369A1] shadow-sm hover:shadow focus-visible:ring-[#0284C7]",
    crimson:
      "bg-[#E11D48] text-white border border-[#E11D48] hover:bg-[#BE123C] hover:border-[#BE123C] shadow-sm hover:shadow focus-visible:ring-[#E11D48]",
    purple:
      "bg-[#8B5CF6] text-white border border-[#8B5CF6] hover:bg-[#7C3AED] hover:border-[#7C3AED] shadow-sm hover:shadow focus-visible:ring-[#8B5CF6]",
    secondary:
      "bg-white text-[#0F172A] border border-slate-300 hover:border-[#0F172A] hover:bg-slate-50 focus-visible:ring-[#0F172A]",
    brass:
      "bg-[#B38E58] text-[#171614] font-medium border border-[#B38E58] hover:bg-[#967442] hover:border-[#967442] hover:text-white focus-visible:ring-[#B38E58]",
    outline:
      "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 focus-visible:ring-white",
    ghost:
      "bg-transparent text-[#0F172A] hover:text-[#0284C7] p-0 min-h-0 focus-visible:ring-[#0F172A]",
  };

  const content = (
    <span className="inline-flex items-center space-x-2.5">
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </span>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const linkElement = isExternal ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );

    return magnetic ? <Magnetic>{linkElement}</Magnetic> : linkElement;
  }

  const buttonElement = (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );

  return magnetic ? <Magnetic>{buttonElement}</Magnetic> : buttonElement;
}
