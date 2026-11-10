import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { STYLISTS_DATA } from "@/data/stylists";

export function generateStaticParams() {
  return STYLISTS_DATA.map((stylist) => ({
    slug: stylist.slug,
  }));
}

export default async function StylistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stylist = STYLISTS_DATA.find((s) => s.slug === slug);

  if (!stylist) {
    notFound();
  }

  return (
    <ShellLayout>
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Availability (5 cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="relative aspect-[3/4] bg-[#E5E0D6] border border-[rgba(23,22,20,0.1)] overflow-hidden shadow-xl mb-6">
                <Image
                  src={stylist.avatar}
                  alt={stylist.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover grayscale"
                />
                <div className="absolute top-4 left-4 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[10px] tracking-widest uppercase px-3 py-1">
                  {stylist.experienceYears} YEARS COUTURE PRACTICE
                </div>
              </div>

              {/* Weekly Availability Card */}
              <div className="p-6 bg-[#EFECE5] border border-[rgba(23,22,20,0.08)]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B38E58] block mb-2">
                  [Studio Residency Schedule]
                </span>
                <p className="text-[13px] text-[#171614] mb-3">
                  In studio weekly on:
                </p>
                <div className="flex flex-wrap gap-2">
                  {stylist.availableDays.map((day) => (
                    <span
                      key={day}
                      className="font-mono text-[11px] bg-[#F8F6F1] text-[#171614] px-3 py-1 border border-[rgba(23,22,20,0.1)]"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Bio Narrative & Portfolio (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center space-x-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B38E58] mb-3">
                <Link href="/team" className="hover:underline">
                  FELLOWSHIP
                </Link>
                <span>/</span>
                <span>DOSSIER</span>
              </div>

              <Heading level={1} size="display-xl" className="mb-2">
                {stylist.name}
              </Heading>

              <span className="font-mono text-[14px] uppercase tracking-wider text-[#B38E58] block mb-6">
                {stylist.role}
              </span>

              <p className="text-[17px] text-[#666159] leading-relaxed mb-8 font-light">
                {stylist.bio}
              </p>

              <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-[rgba(23,22,20,0.1)]">
                <Button
                  href={`/booking?stylist=${stylist.id}`}
                  variant="brass"
                  size="lg"
                >
                  Book with {stylist.name.split(" ")[0]}
                </Button>
                {stylist.instagramHandle && (
                  <span className="inline-flex items-center font-mono text-[12px] text-[#666159] px-4 py-3">
                    Portfolio: {stylist.instagramHandle}
                  </span>
                )}
              </div>

              {/* Specialties */}
              <div className="mb-12">
                <h3 className="font-serif text-[1.4rem] text-[#171614] mb-4">
                  Master Disciplines
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stylist.specialties.map((spec) => (
                    <div
                      key={spec}
                      className="p-3.5 bg-[#EFECE5] border border-[rgba(23,22,20,0.06)] font-sans text-[13px] text-[#171614]"
                    >
                      ✓ {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio Grid */}
              <div>
                <h3 className="font-serif text-[1.4rem] text-[#171614] mb-4">
                  Curated Work Archive
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stylist.portfolioImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[4/5] bg-[#EFECE5] overflow-hidden border border-[rgba(23,22,20,0.08)]"
                    >
                      <Image
                        src={img}
                        alt={`${stylist.name} hair sculpture portfolio item`}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover grayscale contrast-[1.05]"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
