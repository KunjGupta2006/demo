"use client";

import React, { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only run on non-touch desktop environments
    if (prefersReducedMotion || typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      setIsPointer(Boolean(isClickable));
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    let animationFrameId: number;

    const render = () => {
      // Smooth lerp follow
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion, isVisible]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className={`hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height,background-color,border-color] duration-200 rounded-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isPointer
          ? "w-10 h-10 bg-[#B38E58]/20 border border-[#B38E58] backdrop-blur-[1px]"
          : "w-3 h-3 bg-[#171614] border border-[#171614]"
      }`}
      aria-hidden="true"
    />
  );
}
