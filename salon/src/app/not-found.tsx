import React from "react";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <ShellLayout>
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] mb-4">
          [404 · Uncharted Route]
        </span>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-none text-[#171614] mb-6">
          Silhouette Not Located
        </h1>
        <p className="max-w-md text-[#666159] text-[15px] leading-relaxed mb-10">
          The coiffure archive or reservation dossier you requested does not exist or has been relocated to another wing of the studio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="md">
            Return to Studio
          </Button>
          <Button href="/services" variant="secondary" size="md">
            Explore Services
          </Button>
        </div>
      </div>
    </ShellLayout>
  );
}
