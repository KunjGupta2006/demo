import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Section({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("section-padding", className)}
      {...props}
    />
  );
}
