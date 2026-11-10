import { cn } from "@/lib/utils";

const gradients: Record<string, string> = {
  mint: "from-primary/20 via-mint-tint to-sky/10",
  sky: "from-sky/20 via-sky-tint to-lavender/10",
  peach: "from-coral/15 via-peach-tint to-primary/10",
  lavender: "from-lavender/20 via-lavender-tint to-sky/10",
  default: "from-primary/15 via-mint-tint to-sky-tint",
};

interface ImageSlotProps {
  src?: string;
  alt: string;
  aspect?: string;
  gradient?: keyof typeof gradients;
  className?: string;
  children?: React.ReactNode;
}

export function ImageSlot({
  src,
  alt,
  aspect = "aspect-[4/3]",
  gradient = "default",
  className,
  children,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={cn("relative overflow-hidden rounded-card", aspect, className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-card bg-gradient-to-br flex items-center justify-center",
        gradients[gradient] || gradients.default,
        aspect,
        className
      )}
      role="img"
      aria-label={alt}
    >
      {children || (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className="w-16 h-16 opacity-30"
          aria-hidden="true"
        >
          <circle cx="60" cy="45" r="18" stroke="currentColor" strokeWidth="2" />
          <path
            d="M35 85c0-14 11-25 25-25s25 11 25 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M55 30c-2-8 12-8 10 0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="85" cy="25" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M83 21l4-4M87 21l-4-4" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}
