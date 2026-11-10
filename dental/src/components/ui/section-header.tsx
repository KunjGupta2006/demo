import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-18",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#0066FF] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-slate-950 font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
