import React from "react";

type HeadingSize = "display-monument" | "display-xl" | "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  size?: HeadingSize;
  serif?: boolean;
  italic?: boolean;
  className?: string;
}

export function Heading({
  children,
  level = 2,
  size,
  serif = true,
  italic = false,
  className = "",
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const defaultSizeForLevel: Record<1 | 2 | 3 | 4, HeadingSize> = {
    1: "display-xl",
    2: "h2",
    3: "h3",
    4: "h4",
  };

  const effectiveSize: HeadingSize = size || defaultSizeForLevel[level];

  const sizeStyles = {
    "display-monument":
      "text-[clamp(3rem,8.5vw,8.5rem)] leading-[0.88] tracking-[-0.035em]",
    "display-xl":
      "text-[clamp(2.4rem,5.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em]",
    h1: "text-[clamp(2.1rem,4.5vw,4.2rem)] leading-[0.98] tracking-[-0.025em]",
    h2: "text-[clamp(1.75rem,3.2vw,3rem)] leading-[1.05] tracking-[-0.02em]",
    h3: "text-[clamp(1.25rem,2vw,1.85rem)] leading-[1.2] tracking-[-0.015em]",
    h4: "text-[clamp(1.1rem,1.4vw,1.35rem)] leading-[1.3] tracking-normal",
  };

  const fontStyle = serif ? "font-serif" : "font-sans font-medium";
  const italicStyle = italic ? "italic font-normal" : "font-normal";

  return (
    <Tag
      className={`${fontStyle} ${italicStyle} ${sizeStyles[effectiveSize]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
