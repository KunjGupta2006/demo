import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card bg-white shadow-soft p-6 transition-shadow duration-300 hover:shadow-card",
        className
      )}
      {...props}
    />
  );
}
