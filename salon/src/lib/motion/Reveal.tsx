"use client";

import React, { useRef } from "react";
import { gsap, useGSAP } from "./gsap";
import { useReducedMotion } from "./useReducedMotion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  triggerHook?: string;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  yOffset = 36,
  className = "",
  triggerHook = "top 88%",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerHook,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion, delay] }
  );

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ opacity: prefersReducedMotion ? 1 : 0 }}
    >
      {children}
    </div>
  );
}

interface SplitTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
}

export function SplitTextReveal({
  text,
  className = "",
  tag = "h1",
  delay = 0.1,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const words = text.split(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      const wordSpans = containerRef.current.querySelectorAll(".split-word-inner");

      gsap.fromTo(
        wordSpans,
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.04,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion, delay] }
  );

  return React.createElement(
    tag,
    { ref: containerRef, className: `overflow-hidden ${className}` },
    words.map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.26em] align-top">
        <span className="split-word-inner inline-block transform-gpu will-change-transform">
          {word}
        </span>
      </span>
    ))
  );
}
