import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
}

export function Heading({
  as: Comp = "h2",
  className,
  style,
  ...props
}: HeadingProps) {
  return (
    <Comp
      className={cn("font-heading font-bold text-ink", className)}
      style={{
        lineHeight: 1.15,
        letterSpacing: "-0.02em",
        ...style,
      }}
      {...props}
    />
  );
}
