import React, { Suspense } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TrialForm } from "@/components/fitness/TrialForm";
import { ShieldCheck, Clock, MapPin, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Book a Free Trial Session | Spark Fitness Bandra West",
  description: "Claim your 45-minute coached trial session at Spark Fitness Bandra West. No commitment, full strength floor access.",
};

function TrialFormWrapper({ searchParams }: { searchParams: Promise<{ plan?: string; program?: string }> }) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#B8B3A8]">Loading booking form...</div>}>
      <TrialFormContent searchParams={searchParams} />
    </Suspense>
  );
}

async function TrialFormContent({ searchParams }: { searchParams: Promise<{ plan?: string; program?: string }> }) {
  const params = await searchParams;
  const defaultPlan = params?.plan || params?.program || "";
  return <TrialForm defaultPlan={defaultPlan} />;
}

export default function BookTrialPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; program?: string }>;
}) {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-[#10100F]">
      <section className="py-12 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <SectionLabel gold className="justify-center flex">COMPLIMENTARY SESSION</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl text-[#F1EEE7] uppercase leading-[0.9]">
            BOOK YOUR FIRST <span className="text-[#C8A45D]">SESSION.</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-[#B8B3A8] max-w-xl mx-auto leading-relaxed">
            Tell us a little about your training background and goals, and we'll match you with a coach for a complimentary 45-minute trial.
          </p>

          {/* Value Badges */}
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs font-subhead uppercase tracking-wider text-[#F1EEE7] font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" /> 100% Free • No Card Needed
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C8A45D]" /> 45-Minute Coached Trial
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C8A45D]" /> Bandra West Studio
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <TrialFormWrapper searchParams={searchParams} />
        </div>
      </section>
    </div>
  );
}
