"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShellLayout } from "@/components/shell/ShellLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { IconClose } from "@/components/ui/Icons";
import { GALLERY_DATA } from "@/data/gallery";
import { ServiceCategory } from "@/types";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { label: string; value: ServiceCategory | "all" }[] = [
    { label: "All Works", value: "all" },
    { label: "Cranial Haircuts", value: "haircuts" },
    { label: "Mineral Balayage", value: "colour" },
    { label: "Haute Coiffure", value: "styling" },
    { label: "Head Spa & Keratin", value: "keratin" },
    { label: "Bespoke Grooming", value: "grooming" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  return (
    <ShellLayout>
      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-[#121110]/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 text-[#F8F6F1]"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#B38E58]">
              {filteredItems[lightboxIndex].category} · {lightboxIndex + 1} OF {filteredItems.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-[#F8F6F1] hover:text-[#B38E58] transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <IconClose size={24} />
            </button>
          </div>

          {/* Centered Image */}
          <div className="relative flex-1 max-w-4xl max-h-[75vh] w-full mx-auto my-auto flex items-center justify-center">
            <div className="relative w-full h-full max-h-[70vh] aspect-[4/5] sm:aspect-[16/10]">
              <Image
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Caption & Nav */}
          <div className="flex flex-col sm:flex-row items-baseline justify-between max-w-4xl mx-auto w-full pt-4 border-t border-[rgba(248,246,241,0.1)] gap-4">
            <div>
              <h3 className="font-serif text-[1.4rem] text-[#F8F6F1]">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="font-mono text-[11px] text-[#666159] uppercase mt-0.5">
                Coiffeur: {filteredItems[lightboxIndex].stylistName} — {filteredItems[lightboxIndex].caption}
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
                  )
                }
                className="px-4 py-2 border border-[rgba(248,246,241,0.2)] text-[12px] font-mono hover:bg-[#F8F6F1] hover:text-[#171614] transition-colors"
                aria-label="Previous photograph"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
                  )
                }
                className="px-4 py-2 border border-[rgba(248,246,241,0.2)] text-[12px] font-mono hover:bg-[#F8F6F1] hover:text-[#171614] transition-colors"
                aria-label="Next photograph"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <Section variant="light" padding="lg" hairlineBottom={true}>
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#B38E58] block mb-3">
              [Visual Coiffure Archive]
            </span>
            <Heading level={1} size="display-xl" className="mb-6">
              The Lookbook Archive
            </Heading>
            <p className="text-[16px] text-[#666159] leading-relaxed max-w-2xl font-light">
              A chronological documentary of anatomical perimeter cuts, open-air kaolin balayage, and sculptural waves created in our Quai de la Tournelle suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`py-2.5 px-5 font-mono text-[11px] uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === cat.value
                    ? "bg-[#171614] text-[#F8F6F1] border-[#171614]"
                    : "bg-[#EFECE5] text-[#171614] border-[rgba(23,22,20,0.08)] hover:border-[#171614]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Masonry Gallery Grid */}
      <Section variant="surface" padding="xl">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="bg-[#F8F6F1] border border-[rgba(23,22,20,0.08)] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative aspect-[4/5] bg-[#E5E0D6] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale contrast-[1.05] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#121110]/85 text-[#F8F6F1] font-mono text-[9px] tracking-widest uppercase px-2 py-0.5">
                    {item.category}
                  </div>
                </div>

                <div className="p-6">
                  <span className="font-mono text-[10px] uppercase text-[#B38E58] block mb-1">
                    Sculpted by {item.stylistName}
                  </span>
                  <h3 className="font-serif text-[1.4rem] text-[#171614] leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#666159] leading-relaxed line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </ShellLayout>
  );
}
