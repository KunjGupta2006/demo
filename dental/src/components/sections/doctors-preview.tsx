"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, GraduationCap, Calendar } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import clinic from "@/data/clinic";

const doctorImages: Record<string, string> = {
  "priya-sharma": "/images/dr-priya-sharma.jpg",
  "arjun-mehta": "/images/dr-arjun-mehta.jpg",
  "neha-reddy": "/images/dr-neha-reddy.jpg",
};

export function DoctorsPreview({ showFull = false }: { showFull?: boolean }) {
  const doctors = showFull ? clinic.doctors : clinic.doctors.slice(0, 3);

  return (
    <Section id="doctors" className="bg-white py-24 border-b border-slate-200/80">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Experienced Specialists</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-950 tracking-tight">
            Meet your dental team.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Gentle, experienced doctors who take their time, explain every step, and listen to what you need.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => {
            const photoSrc = doctorImages[doc.slug] || "/images/dr-priya-sharma.jpg";

            return (
              <Reveal key={doc.slug} delay={idx * 0.1}>
                <div className="bg-slate-50/70 rounded-[26px] p-6 border border-slate-200/80 shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-400 flex flex-col justify-between h-full group">
                  <div>
                    {/* Modern Photo Frame */}
                    <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-200">
                      <Image
                        src={photoSrc}
                        alt={`${doc.name} - ${doc.specialty}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                      {/* Experience Pill */}
                      <div className="absolute top-3.5 right-3.5 bg-white/95 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                        {doc.experience} Experience
                      </div>

                      <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                        <span className="text-xs font-semibold text-blue-200 block">
                          {doc.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Name & Degree */}
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                        <span>{doc.qualification}</span>
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                        {doc.bio}
                      </p>
                    </div>
                  </div>

                  {/* Consultation Button */}
                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <Button asChild size="sm" className="w-full rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-blue-600 text-white transition-colors">
                      <Link href={`/book?doctor=${encodeURIComponent(doc.name)}`} className="flex items-center justify-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book with Dr. {doc.name.split(" ")[1]}</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
