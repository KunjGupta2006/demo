import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { STYLISTS_DATA } from "@/data/stylists";

export const metadata = {
  title: "Our Stylists & Colorists | Care4U Studio",
  description:
    "Meet the experienced dry-cutting stylists and hair colorists at Care4U Studio in Paris.",
};

export default function TeamPage() {
  return (
    <ShellLayout>
      {/* Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 text-[12px] font-medium rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Meet the Team
            </div>
            <Heading level={1} size="display-xl" className="mb-4">
              Our Stylists & Colorists
            </Heading>
            <p className="text-[16px] text-slate-600 leading-relaxed max-w-2xl font-normal">
              Trained across London, Tokyo, and Paris. Every member of our team brings warm personal attention, deep technical craft, and genuine care to your hair.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Roster Grid */}
      <Section variant="surface" padding="xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STYLISTS_DATA.map((stylist) => (
              <div
                key={stylist.id}
                className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between p-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group"
              >
                <div>
                  {/* Portrait */}
                  <div className="relative aspect-[3/4] bg-slate-100 rounded-xl overflow-hidden mb-5 border border-slate-100">
                    <Image
                      src={stylist.avatar}
                      alt={stylist.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/85 text-white font-mono text-[11px] px-2.5 py-1 rounded">
                      {stylist.experienceYears} Years Exp.
                    </div>
                  </div>

                  {/* Name & Credentials */}
                  <h2 className="font-serif text-[1.6rem] text-slate-900 leading-tight mb-1">
                    {stylist.name}
                  </h2>
                  <span className="text-[13px] font-medium text-sky-600 block mb-3">
                    {stylist.role}
                  </span>

                  <p className="text-[14px] text-slate-500 leading-relaxed mb-5 font-normal">
                    {stylist.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {stylist.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/team/${stylist.slug}`}
                    className="text-[13px] font-medium text-slate-700 hover:text-sky-600 transition-colors"
                  >
                    View Profile →
                  </Link>
                  <Button
                    href={`/booking?stylist=${stylist.id}`}
                    variant="crystal"
                    size="sm"
                  >
                    Book with {stylist.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
