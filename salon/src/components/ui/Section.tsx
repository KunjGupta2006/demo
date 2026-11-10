import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "surface" | "dark" | "brass";
  hairlineTop?: boolean;
  hairlineBottom?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Section({
  children,
  variant = "light",
  hairlineTop = false,
  hairlineBottom = false,
  padding = "lg",
  className = "",
  ...props
}: SectionProps) {
  const variantStyles = {
    light: "bg-[#F8F6F1] text-[#171614]",
    surface: "bg-[#EFECE5] text-[#171614]",
    dark: "bg-[#121110] text-[#F8F6F1]",
    brass: "bg-[#B38E58] text-[#171614]",
  };

  const paddingStyles = {
    none: "py-0",
    sm: "py-10 sm:py-14 md:py-16",
    md: "py-16 sm:py-20 md:py-28",
    lg: "py-20 sm:py-28 md:py-36",
    xl: "py-24 sm:py-36 md:py-48",
  };

  const borderStyles = [
    hairlineTop
      ? variant === "dark"
        ? "border-t border-[rgba(248,246,241,0.12)]"
        : "border-t border-[rgba(23,22,20,0.10)]"
      : "",
    hairlineBottom
      ? variant === "dark"
        ? "border-b border-[rgba(248,246,241,0.12)]"
        : "border-b border-[rgba(23,22,20,0.10)]"
      : "",
  ].join(" ");

  return (
    <section
      className={`relative w-full ${variantStyles[variant]} ${paddingStyles[padding]} ${borderStyles} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
