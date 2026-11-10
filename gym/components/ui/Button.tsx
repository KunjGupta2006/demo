import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  external = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-subhead font-semibold tracking-wider uppercase transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#C8A45D] focus:ring-offset-2 focus:ring-offset-[#10100F] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[4px] active:scale-[0.98] gold-shimmer-btn";

  const variantStyles = {
    primary:
      "bg-[#F1EEE7] text-[#10100F] hover:bg-[#C8A45D] hover:text-[#10100F] border border-[#F1EEE7] hover:border-[#C8A45D] shadow-sm hover:shadow-[0_0_20px_rgba(200,164,93,0.3)]",
    secondary:
      "bg-transparent text-[#F1EEE7] border border-[rgba(241,238,231,0.25)] hover:border-[#F1EEE7] hover:bg-[rgba(241,238,231,0.08)] hover:shadow-md",
    ghost:
      "bg-transparent text-[#B8B3A8] hover:text-[#F1EEE7] hover:bg-[rgba(241,238,231,0.08)] border border-transparent",
    accent:
      "bg-[#C8A45D] text-[#10100F] hover:bg-[#DFC17A] border border-[#C8A45D] hover:border-[#DFC17A] shadow-sm hover:shadow-[0_0_25px_rgba(200,164,93,0.4)]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs h-9 gap-1.5",
    md: "px-6 py-3 text-sm h-11 gap-2",
    lg: "px-8 py-4 text-base h-13 gap-2.5 font-bold",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
