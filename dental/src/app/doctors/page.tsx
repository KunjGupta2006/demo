import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Calendar, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/final-cta";
import clinic from "@/data/clinic";

export const metadata: Metadata = {
  title: "Our Doctors — Experienced Dental Specialists",
  description:
    "Meet our team of dentists at Aura Dental Studio in Indiranagar, Bengaluru: Dr. Priya Sharma, Dr. Arjun Mehta, and Dr. Neha Reddy.",
};

const doctorImages: Record<string, string> = {
  "priya-sharma": "/images/dr-priya-sharma.jpg",
  "arjun-mehta": "/images/dr-arjun-mehta.jpg",
  "neha-reddy": "/images/dr-neha-reddy.jpg",
};

export default function DoctorsPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Our Specialists
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.08]">
              Gentle doctors you can actually <span className="text-blue-600">talk to</span>.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Every doctor at Aura Dental is an MDS specialist with years of hands-on clinical experience. We believe in unhurried visits where we explain what we are doing and listen to your concerns.
            </p>
          </div>
        </Container>
      </section>

      <Section className="py-20 bg-white">
        <Container>
          <div className="space-y-12">
            {clinic.doctors.map((doctor, idx) => {
              const photo = doctorImages[doctor.slug] || "/images/dr-priya-sharma.jpg";

              return (
                <div
                  key={doctor.slug}
                  className="bg-slate-50/70 rounded-[28px] p-8 sm:p-12 border border-slate-200 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group"
                >
                  {/* Photo Frame */}
                  <div className="lg:col-span-4">
                    <div className="relative w-full aspect-[4/4.8] rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-card">
                      <Image
                        src={photo}
                        alt={`${doctor.name} - ${doctor.specialty}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                        {doctor.experience} Experience
                      </div>
                    </div>
                  </div>

                  {/* Biography & Details */}
                  <div className="lg:col-span-8 space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                        {doctor.specialty}
                      </span>
                      
                      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-950">
                        {doctor.name}
                      </h2>
                      
                      <p className="text-xs font-semibold text-slate-600 mt-1 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <span>{doctor.qualification}</span>
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {doctor.bio}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Master of Dental Surgery (MDS Qualified)</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200 font-medium">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Advanced Fellowship in Modern Smile Design</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button asChild size="md" className="rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white px-7 shadow-sm">
                        <Link href={`/book?doctor=${encodeURIComponent(doctor.name)}`} className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book with Dr. {doctor.name.split(" ")[1]}</span>
                        </Link>
                      </Button>
                      <span className="text-xs text-slate-500 font-normal">
                        Private 45-minute consultation slot
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
