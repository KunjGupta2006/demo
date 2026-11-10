"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, ArrowRight, Sparkles, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

interface SmileCase {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  doctor: string;
  beforeDesc: string;
  afterDesc: string;
  points: string[];
  imageBefore: string;
  imageAfter: string;
}

const cases: SmileCase[] = [
  {
    id: "veneers",
    title: "Porcelain Veneers Makeover",
    treatment: "8 Custom Ceramic Veneers",
    duration: "2 Weeks · 3 Visits",
    doctor: "Dr. Priya Sharma",
    beforeDesc: "Chipped, worn, and yellowish front teeth",
    afterDesc: "Even, bright, natural-looking smile",
    points: [
      "Ultra-thin veneers protect natural teeth",
      "Custom shade matched to facial skin tone",
      "15-year warranty on ceramic materials",
    ],
    imageBefore: "/images/smile-before.jpg",
    imageAfter: "/images/smile-after.jpg",
  },
  {
    id: "aligners",
    title: "Invisible Teeth Straightening",
    treatment: "Clear Aligners",
    duration: "7 Months · At Home",
    doctor: "Dr. Arjun Mehta",
    beforeDesc: "Crowded lower teeth and gap between front teeth",
    afterDesc: "Perfect alignment and healthy bite",
    points: [
      "Completely invisible — no metal wires or brackets",
      "Remove easily while eating and brushing",
      "Weekly progress checked via 3D scan",
    ],
    imageBefore: "/images/smile-before.jpg",
    imageAfter: "/images/smile-transformation.jpg",
  },
  {
    id: "whitening",
    title: "In-Clinic Laser Whitening",
    treatment: "Professional LED Whitening",
    duration: "60 Minutes · 1 Visit",
    doctor: "Dr. Neha Reddy",
    beforeDesc: "Deep yellow stains from coffee, tea & lifestyle",
    afterDesc: "7 shades brighter natural white",
    points: [
      "Safe for enamel with zero pain or sensitivity",
      "Noticeable transformation in under an hour",
      "Results last 12+ months with basic care",
    ],
    imageBefore: "/images/smile-before.jpg",
    imageAfter: "/images/smile-after.jpg",
  },
];

export function SmileSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = cases[activeIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(clamped);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <Section id="results" className="bg-slate-50/60 py-24 border-b border-slate-200/80">
      <Container>
        {/* Modern Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Before & After Results</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Real smiles. Real results.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Drag the slider to see actual transformations from our patients in Bengaluru.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveIdx(i);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeIdx === i
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-400"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Split Comparison Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Drag Frame */}
          <div className="lg:col-span-7">
            <Reveal>
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative w-full aspect-[4/3] rounded-[26px] overflow-hidden shadow-card select-none cursor-ew-resize border border-slate-200 bg-slate-900 group"
              >
                {/* AFTER Base Layer */}
                <div className="absolute inset-0">
                  <Image
                    src={active.imageAfter}
                    alt={`${active.title} - After treatment result`}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* After Label */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-xs font-bold text-slate-900 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
                      After Result
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10 bg-slate-950/75 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-white text-xs font-medium">
                    {active.afterDesc}
                  </div>
                </div>

                {/* BEFORE Clipped Layer */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="relative w-[100cqw] min-w-[320px] sm:min-w-[500px] lg:min-w-[650px] h-full">
                    <Image
                      src={active.imageBefore}
                      alt={`${active.title} - Before treatment condition`}
                      fill
                      className="object-cover object-center filter brightness-95"
                    />

                    {/* Before Label */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-xs font-bold text-slate-700 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
                        Before Treatment
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 z-10 bg-slate-950/75 backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-white text-xs font-medium">
                      {active.beforeDesc}
                    </div>
                  </div>
                </div>

                {/* Divider Line & Glow Knob */}
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 text-white shadow-elevated flex items-center justify-center border-2 border-white">
                    <MoveHorizontal className="w-4 h-4" />
                  </div>
                </div>

                {/* Drag Hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold px-4 py-1.5 rounded-full pointer-events-none shadow-sm z-20">
                  ↔ Drag handle to compare
                </div>
              </div>
            </Reveal>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.15}>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1.5">
                  {active.treatment}
                </span>
                <h3 className="font-heading font-extrabold text-3xl text-slate-950">
                  {active.title}
                </h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed font-normal">
                  Completed in <strong className="text-slate-900">{active.duration}</strong> by {active.doctor}. Every patient receives a 3D digital simulation before we begin.
                </p>
              </div>

              <div className="space-y-3 py-5 border-y border-slate-200">
                {active.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                  <Link href="/book" className="flex items-center gap-2">
                    <span>Book a Free Smile Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
