"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <Section variant="surface" padding="xl" hairlineBottom={true} className="bg-slate-50">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Heading level={2} size="display-xl" className="text-slate-900 mb-3">
            Real Client Results
          </Heading>
          <p className="text-[16px] text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
            Drag the slider to see how precision dry cutting and gentle color bring out natural movement, volume, and soft shine.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Comparison slider between before and after haircut at Care4U Studio"
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0284C7] rounded-lg"
          >
            {/* After Image (Background full width) */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=85&w=1600&auto=format&fit=crop"
                alt="After precision cut and balayage at Care4U Studio"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute top-6 right-6 bg-[#0284C7] text-white font-sans text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 shadow-md rounded">
                AFTER · TAILORED CUT & GLOSS
              </div>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-[100cqi] min-w-[700px] sm:min-w-[1000px] lg:min-w-[1200px]">
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1600&auto=format&fit=crop"
                  alt="Before natural state"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-6 left-6 bg-slate-900/90 text-white font-sans text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1.5 backdrop-blur-sm shadow-md rounded">
                BEFORE
              </div>
            </div>

            {/* Central Divider & Grip Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[2px] bg-white pointer-events-none shadow"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center shadow-lg font-sans text-[13px] font-bold">
                ⇄
              </div>
            </div>
          </div>

          {/* Under-slider Metadata */}
          <div className="flex items-center justify-between font-sans text-[12px] text-slate-500 uppercase tracking-wide mt-4 px-2">
            <span>Stylist: Éléonore Vance</span>
            <span>Service: Precision Cut + Conditioning Gloss</span>
            <span className="hidden sm:inline">Use arrow keys or drag</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
