import React from "react";
import Image from "next/image";
import { Dumbbell, Target, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessDetails } from "@/data/business";

export const metadata = {
  title: "About the Club | Spark Fitness Bandra",
  description: "Learn about the brand philosophy, facility standards, and coaching culture at Spark Fitness Bandra West, Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#10100F] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <SectionLabel>OUR STORY & PURPOSE</SectionLabel>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-[#F1EEE7] uppercase leading-[0.9] max-w-4xl">
            A BETTER WAY TO <span className="text-[#C8A45D]">TRAIN.</span>
          </h1>
          <p className="font-body text-base md:text-xl text-[#B8B3A8] max-w-2xl mt-6 leading-relaxed">
            Spark Fitness was imagined around a simple idea: a gym should make it easier to train with purpose. Not louder. Not more complicated. Better.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-[#191917] border-b border-[rgba(241,238,231,0.10)]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>WHY WE EXIST</SectionLabel>
              <h2 className="font-display text-4xl sm:text-5xl text-[#F1EEE7] uppercase leading-[0.95]">
                RECLAIMING THE TRAINING FLOOR.
              </h2>
              <p className="font-body text-base text-[#B8B3A8] leading-relaxed">
                Most commercial gyms sell access to crowded rooms filled with pin-select machines and leave members to figure things out alone. We built Spark Fitness to combine expert coaching, calibrated equipment, and a focused environment where members achieve structured progress.
              </p>
              <p className="font-body text-base text-[#B8B3A8] leading-relaxed">
                Located in Bandra West, our space is designed for people who take their health, time, and physical capability seriously.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-[#262622] rounded border border-[rgba(241,238,231,0.08)]">
                  <div className="font-display text-2xl text-[#C8A45D]">QUALIFIED</div>
                  <div className="font-subhead text-xs text-[#F1EEE7] uppercase mt-1">Full-Time Practitioners</div>
                </div>
                <div className="p-4 bg-[#262622] rounded border border-[rgba(241,238,231,0.08)]">
                  <div className="font-display text-2xl text-[#C8A45D]">STRUCTURED</div>
                  <div className="font-subhead text-xs text-[#F1EEE7] uppercase mt-1">Periodized Blocks</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] rounded-[8px] overflow-hidden border border-[rgba(241,238,231,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop"
                alt="Spark Fitness interior strength floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-[#10100F]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-10 text-center">
          <SectionHeading title="OUR THREE NON-NEGOTIABLES." align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#191917] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)] space-y-3 text-left">
              <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-[#F1EEE7] uppercase">1. Equipment Quality</h3>
              <p className="font-body text-xs sm:text-sm text-[#B8B3A8]">
                Calibrated Eleiko plates, rigid power racks, and specialized bars maintained to elite performance standards.
              </p>
            </div>

            <div className="bg-[#191917] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)] space-y-3 text-left">
              <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-[#F1EEE7] uppercase">2. Coaching Integrity</h3>
              <p className="font-body text-xs sm:text-sm text-[#B8B3A8]">
                Every coach on our floor is an active teacher who understands mechanics, progressive loading, and client communication.
              </p>
            </div>

            <div className="bg-[#191917] p-8 rounded-[8px] border border-[rgba(241,238,231,0.10)] space-y-3 text-left">
              <div className="w-10 h-10 rounded bg-[#C8A45D]/10 flex items-center justify-center text-[#C8A45D]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl text-[#F1EEE7] uppercase">3. Environment</h3>
              <p className="font-body text-xs sm:text-sm text-[#B8B3A8]">
                No camera tripods blocking walkways, no overcrowded waiting lists for racks. Dedicated, respectful lifting space.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Button href="/book-trial" variant="primary" size="lg">
              Book Your Free Trial Session
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
