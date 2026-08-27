import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "left",
  className = "",
  as = "h2",
}) => {
  const Component = as;

  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignStyles[align]} ${className}`}>
      <Component className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F1EEE7] uppercase leading-[0.95]">
        {title}
      </Component>
      {subtitle && (
        <p className="font-body text-base md:text-lg text-[#B8B3A8] mt-3 font-normal leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
