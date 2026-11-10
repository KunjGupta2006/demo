"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { GALLERY_DATA } from "@/data/gallery";

export function GalleryTeaser() {
  const teaserItems = GALLERY_DATA.slice(0, 5);

  return (
    <Section id="lookbook-teaser" variant="light" padding="xl" hairlineBottom={true} className="bg-white">
      <Container>
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <Heading level={2} size="display-xl" className="text-slate-900 mb-2">
              Our Work & Lookbook
            </Heading>
            <p className="text-[16px] text-slate-600 font-sans">
              Recent transformations, clean silhouettes, and healthy color finished in our Paris studio.
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button href="/gallery" variant="secondary" size="md">
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Large Featured Portrait (Span 7) */}
          <div className="md:col-span-7 relative aspect-[4/5] bg-slate-100 border border-slate-200 overflow-hidden group rounded-lg">
            <Image
              src={teaserItems[0].imageUrl}
              alt={teaserItems[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end text-white">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8] mb-1">
                {teaserItems[0].category} · By {teaserItems[0].stylistName}
              </span>
              <h4 className="font-serif text-[1.8rem] leading-tight mb-2">
                {teaserItems[0].title}
              </h4>
              <p className="text-[14px] text-slate-200 max-w-md font-normal">
                {teaserItems[0].caption}
              </p>
            </div>
          </div>

          {/* Card 2 & 3: Two Stacked Right Tiles (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="relative aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden group rounded-lg">
              <Image
                src={teaserItems[1].imageUrl}
                alt={teaserItems[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#FDA4AF]">
                  {teaserItems[1].category} · {teaserItems[1].stylistName}
                </span>
                <h4 className="font-serif text-[1.4rem] leading-tight">
                  {teaserItems[1].title}
                </h4>
              </div>
            </div>

            <div className="relative aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden group rounded-lg">
              <Image
                src={teaserItems[2].imageUrl}
                alt={teaserItems[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#DDD6FE]">
                  {teaserItems[2].category} · {teaserItems[2].stylistName}
                </span>
                <h4 className="font-serif text-[1.4rem] leading-tight">
                  {teaserItems[2].title}
                </h4>
              </div>
            </div>
          </div>

          {/* Card 4 & 5: Bottom 2 Equal Balance Tiles (Span 6 each) */}
          <div className="md:col-span-6 relative aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden group rounded-lg">
            <Image
              src={teaserItems[3].imageUrl}
              alt={teaserItems[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#38BDF8]">
                {teaserItems[3].category} · {teaserItems[3].stylistName}
              </span>
              <h4 className="font-serif text-[1.4rem] leading-tight">
                {teaserItems[3].title}
              </h4>
            </div>
          </div>

          <div className="md:col-span-6 relative aspect-[16/10] bg-slate-100 border border-slate-200 overflow-hidden group rounded-lg">
            <Image
              src={teaserItems[4].imageUrl}
              alt={teaserItems[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#FDA4AF]">
                {teaserItems[4].category} · {teaserItems[4].stylistName}
              </span>
              <h4 className="font-serif text-[1.4rem] leading-tight">
                {teaserItems[4].title}
              </h4>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
