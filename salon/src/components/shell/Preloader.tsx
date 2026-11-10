"use client";

import React, { useState, useEffect } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only show once per session
    const hasVisited = sessionStorage.getItem("care4u_has_visited");
    if (hasVisited) {
      const timer = setTimeout(() => setLoading(false), 0);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("care4u_has_visited", "true");
          }, 350);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 120);

    // Escape listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.code === "Space") {
        setLoading(false);
        sessionStorage.setItem("care4u_has_visited", "true");
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSkip = () => {
    setLoading(false);
    sessionStorage.setItem("care4u_has_visited", "true");
  };

  if (!loading) return null;

  return (
    <div
      onClick={handleSkip}
      className="fixed inset-0 z-[100] bg-[#121110] text-[#F8F6F1] flex flex-col justify-between p-6 sm:p-12 cursor-pointer transition-opacity duration-500 select-none"
      role="status"
      aria-label="Loading studio experience"
    >
      <div className="flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-slate-400">
        <span className="font-medium text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
          CARE4U STUDIO · PARIS 5E
        </span>
        <button onClick={handleSkip} className="hover:text-white transition-colors">
          Skip intro (Esc)
        </button>
      </div>

      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="font-serif text-[clamp(2.5rem,7.5vw,7rem)] font-normal leading-none tracking-[-0.03em] uppercase text-white">
          CARE4U STUDIO
        </h1>
        <p className="font-sans text-[13px] sm:text-[15px] tracking-[0.2em] text-[#38BDF8] mt-4 uppercase">
          Precision Haircuts · Vibrant Color · Calming Head Spa
        </p>
      </div>

      <div className="flex items-end justify-between text-[12px] tracking-wider border-t border-white/10 pt-6">
        <span className="text-slate-400 uppercase">PARIS 5TH ARRONDISSEMENT</span>
        <span className="text-[2rem] font-serif leading-none text-[#38BDF8]">
          {Math.min(100, progress)}%
        </span>
      </div>
    </div>
  );
}
