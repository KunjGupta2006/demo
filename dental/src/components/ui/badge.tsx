import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-bold transition-colors text-[11px] uppercase tracking-wider rounded-full",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1",
        mint: "bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1",
        sky: "bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1",
        peach: "bg-blue-50 text-[#0066FF] border border-blue-200 px-3 py-1",
        amber: "bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1",
        lavender: "bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1",
        outline: "bg-white border border-slate-200 text-slate-700 px-3 py-1 shadow-xs",
        status: "px-2.5 py-0.5 font-bold",
        chip: "bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xs px-3.5 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}
