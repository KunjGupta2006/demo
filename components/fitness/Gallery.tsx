"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

export const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % galleryItems.length));
    }
  }, [lightboxIndex]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
      );
    }
  }, [lightboxIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    },
    [lightboxIndex, handleNext, handlePrev]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const currentItem: GalleryItem | null =
    lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <div>
      {/* Asymmetric Editorial Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className={`group relative overflow-hidden rounded-[8px] bg-[#191917] border border-[rgba(241,238,231,0.10)] cursor-pointer h-[280px] sm:h-[320px] ${
              idx === 0 || idx === 3 ? "lg:col-span-2" : ""
            }`}
            tabIndex={0}
            role="button"
            aria-label={`View photo: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setLightboxIndex(idx);
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10100F]/90 via-[#10100F]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 bg-[#10100F]/80 backdrop-blur-sm border border-[rgba(241,238,231,0.15)] rounded font-subhead text-[10px] uppercase tracking-widest text-[#C8A45D] font-bold">
                {item.category}
              </span>
            </div>

            {/* Hover Expand Icon */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[#C8A45D] flex items-center justify-center text-[#10100F]">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-[#F1EEE7] leading-tight">
                {item.title}
              </h3>
              <p className="font-body text-xs text-[#B8B3A8] line-clamp-1 mt-1 font-light">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-[#10100F]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in-50 duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 p-3 text-[#F1EEE7] hover:text-[#C8A45D] bg-[#262622] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F1EEE7] hover:text-[#C8A45D] bg-[#262622]/80 hover:bg-[#262622] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Nav Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-[#F1EEE7] hover:text-[#C8A45D] bg-[#262622]/80 hover:bg-[#262622] rounded-full focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Display */}
          <div className="max-w-4xl w-full flex flex-col items-center gap-4">
            <div className="relative w-full h-[50vh] sm:h-[65vh] rounded-lg overflow-hidden border border-[rgba(241,238,231,0.15)] bg-[#191917]">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="text-center max-w-xl">
              <span className="font-subhead text-xs uppercase tracking-widest text-[#C8A45D] font-bold">
                {currentItem.category} • Image {(lightboxIndex ?? 0) + 1} of {galleryItems.length}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#F1EEE7] uppercase mt-1">
                {currentItem.title}
              </h3>
              <p className="font-body text-sm text-[#B8B3A8] mt-1 font-light">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
