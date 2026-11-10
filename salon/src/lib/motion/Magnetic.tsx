"use client";

import React, { useRef } from "react";
import { gsap } from "./gsap";
import { useReducedMotion } from "./useReducedMotion";

interface MagneticProps {
  children: React.ReactElement<{ className?: string }>;
  strength?: number;
}

export function Magnetic({ children, strength = 0.35 }: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * strength;
    const y = (clientY - (top + height / 2)) * strength;

    gsap.to(containerRef.current, {
      x,
      y,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1.1, 0.4)",
      overwrite: "auto",
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </div>
  );
}
