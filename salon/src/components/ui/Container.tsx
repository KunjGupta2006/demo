import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeStyles = {
    narrow: "max-w-[1240px]",
    default: "max-w-[1680px]",
    wide: "max-w-[1880px]",
    full: "max-w-none px-0",
  };

  const paddingStyle =
    size === "full"
      ? ""
      : "px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-auto w-full";

  return (
    <div
      className={`${sizeStyles[size]} ${paddingStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
