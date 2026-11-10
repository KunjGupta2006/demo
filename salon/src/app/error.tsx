"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Studio runtime error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#F8F6F1] text-[#171614]">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#DC2626] mb-4">
        [Runtime Anomaly]
      </span>
      <h1 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] font-normal leading-none text-[#171614] mb-6">
        Interrupted Ceremony
      </h1>
      <p className="max-w-md text-[#666159] text-[15px] leading-relaxed mb-8">
        An unexpected interruption occurred during the digital studio session. Our engineers have documented the incident.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="brass" size="md">
          Retry Ritual
        </Button>
        <Button href="/" variant="secondary" size="md">
          Return Home
        </Button>
      </div>
    </div>
  );
}
