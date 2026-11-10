"use client";

import { useRef } from "react";
import { motion, useInView, MotionConfig } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const offsets = {
  up: { y: 12 },
  down: { y: -12 },
  left: { x: 12 },
  right: { x: -12 },
  none: {},
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.65,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-32px" });

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        ref={ref}
        className={cn(className)}
        initial={{ opacity: 0, ...offsets[direction] }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
