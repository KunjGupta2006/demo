import React from "react";
import Image from "next/image";
import { Check, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coaches } from "@/data/coaches";

export const metadata = {
  title: "Coaching Team & Practitioners | Spark Fitness Bandra",
  description: "Meet Kabir Malhotra, Ananya Rao, Dev Mehra and Meera Kapoor — the strength and conditioning coaches at Spark Fitness Bandra West.",
};

export default function CoachesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>THE PRACTITIONERS</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            PEOPLE WHO CARE ABOUT <span className="text-[#C8A45D]">YOUR PROGRESS.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            Our team consists of full-time performance practitioners. We teach movement quality, barbell mechanics, and joint safety — not hype or shouting.
          </p>
        </div>
      </section>

      {/* Coaches List */}
      <section className="py-20 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 space-y-16">
          {coaches.map((coach, index) => (
            <div
              key={coach.id}
              className="bg-[#262622] rounded-[8px] border border-[rgba(241,238,231,0.10)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] w-full">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                <div>
                  <span className="px-3 py-1 bg-[#10100F] border border-[#C8A45D]/30 rounded font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                    {coach.role}
                  </span>
                  <h2 className="font-display text-4xl sm:text-5xl text-[#F1EEE7] uppercase mt-3">
                    {coach.name}
                  </h2>
                  <p className="font-subhead text-xs uppercase tracking-wider text-[#77776F] mt-1 flex items-center gap-1.5 font-semibold">
                    <Award className="w-3.5 h-3.5 text-[#C8A45D]" /> {coach.experience}
                  </p>
                </div>

                <div className="p-4 bg-[#10100F] rounded border-l-2 border-[#C8A45D]">
                  <div className="font-subhead text-[10px] uppercase tracking-widest text-[#77776F] font-bold">
                    Coaching Philosophy
                  </div>
                  <p className="font-body text-sm text-[#F1EEE7] italic mt-1">
                    "{coach.philosophy}"
                  </p>
                </div>

                <p className="font-body text-sm sm:text-base text-[#B8B3A8] leading-relaxed">
                  {coach.bio}
                </p>

                <div className="space-y-2">
                  <span className="font-subhead text-xs uppercase tracking-wider text-[#F1EEE7] font-bold">
                    Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialty.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#10100F] rounded border border-[rgba(241,238,231,0.12)] font-subhead text-xs uppercase tracking-wider text-[#C8A45D] font-semibold"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button href={`/book-trial?coach=${coach.id}`} variant="primary" size="sm">
                    Book Trial With {coach.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
