import React from "react";
import Image from "next/image";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export const metadata = {
  title: "About Our Studio | Care4U Studio Paris",
  description:
    "Learn about Care4U Studio on the Quai de la Tournelle in Paris: dry precision haircuts, gentle balayage, and restorative Japanese head spa.",
};

export default function AboutPage() {
  return (
    <ShellLayout>
      {/* Editorial Hero */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              About Care4U Studio
            </div>
            <Heading level={1} size="display-xl" className="mb-6">
              A peaceful space for natural hair, gentle care, and quiet comfort.
            </Heading>
            <p className="text-[clamp(1.1rem,1.3vw,1.35rem)] text-slate-600 font-normal leading-relaxed max-w-2xl">
              Located on the Quai de la Tournelle overlooking the Seine, Care4U Studio was created to replace rushed, noisy salons with personal attention and relaxed private suites.
            </p>
          </div>
        </Container>
      </Section>

      {/* Philosophy: Dry Cutting */}
      <Section variant="surface" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Stylist cutting hair dry at Care4U Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-3.5 py-1.5 text-[12px] font-medium rounded-lg">
                Precision Dry Haircut
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-sky-600 text-[13px] font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Our Haircut Approach
              </div>
              <Heading level={2} size="h1" className="mb-6">
                Why We Cut Hair Dry First
              </Heading>

              <div className="space-y-4 text-[15px] text-slate-600 leading-relaxed font-normal">
                <p>
                  Wet hair stretches artificially when pulled with tension. When cut wet, it shrinks back unpredictably as it dries, which can reveal uneven layers or cowlicks that take heat styling to hide.
                </p>
                <p>
                  At Care4U Studio, every cut begins with hair dry in its natural movement. We see exactly how your hair falls across your shoulders, where volume gathers, and how your natural wave patterns behave. Your haircut is shaped to look effortless straight out of the shower.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 flex items-center space-x-10">
                <div>
                  <span className="block font-serif text-[2.2rem] text-slate-900 leading-none font-bold">
                    18 Yrs
                  </span>
                  <span className="block text-[12px] text-slate-500 mt-1">
                    Salon Experience
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-[2.2rem] text-rose-600 leading-none font-bold">
                    0%
                  </span>
                  <span className="block text-[12px] text-slate-500 mt-1">
                    Harsh Ammonia
                  </span>
                </div>
                <div>
                  <span className="block font-serif text-[2.2rem] text-purple-600 leading-none font-bold">
                    5
                  </span>
                  <span className="block text-[12px] text-slate-500 mt-1">
                    Private Quiet Suites
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Brand Values Matrix */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-[12px] font-medium rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Our Core Standards
            </div>
            <Heading level={2} size="h1">
              Three Things We Care Deeply About
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SALON_INFO.brandValues.map((v, i) => {
              const borderAccent =
                i === 0
                  ? "border-sky-200 hover:border-sky-400"
                  : i === 1
                  ? "border-rose-200 hover:border-rose-400"
                  : "border-purple-200 hover:border-purple-400";
              const tagColor =
                i === 0
                  ? "text-sky-700 bg-sky-50"
                  : i === 1
                  ? "text-rose-700 bg-rose-50"
                  : "text-purple-700 bg-purple-50";

              return (
                <div
                  key={v.title}
                  className={`p-8 bg-white border ${borderAccent} rounded-2xl flex flex-col justify-between shadow-sm transition-all`}
                >
                  <div>
                    <span className={`inline-block text-[12px] font-semibold px-2.5 py-1 rounded-full ${tagColor} mb-4`}>
                      Pillar 0{i + 1}
                    </span>
                    <h3 className="font-serif text-[1.5rem] leading-snug text-slate-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-[13px] font-medium text-slate-500 mb-3">
                      {v.principle}
                    </p>
                    <p className="text-[14px] text-slate-600 leading-relaxed font-normal">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Clean Products & Clean Air */}
      <Section variant="dark" padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[12px] font-medium rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Clean Products & Soft Water
              </div>
              <Heading level={2} size="h1" className="text-white mb-6">
                Clean, Gentle Formulas and Medical-Grade Hygiene
              </Heading>
              
              <div className="space-y-4 text-[15px] text-slate-300 leading-relaxed font-normal">
                <p>
                  All our cutting shears and instruments are sterilized in medical autoclaves between guests, sealed in individual pouches until your service begins.
                </p>
                <p>
                  Every color formula, glaze, and shampoo is 100% cruelty-free and free of parabens, harsh ammonia fumes, and synthetic sulfates. We wash with reverse-osmosis filtered water, eliminating hard tap water minerals and chlorine so your hair feels light and soft.
                </p>
              </div>

              <div className="mt-8">
                <Button href="/booking" variant="crystal" size="md">
                  Book an Appointment
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/5] bg-slate-800 rounded-2xl border border-white/10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Japanese Carbonated Water Scalp Bath at Care4U Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
