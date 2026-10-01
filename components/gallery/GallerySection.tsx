"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { X, ArrowUpRight } from "lucide-react";

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="archives" className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-4">
              <span className="text-luxury-amber">05 // ARCHIVES</span>
              <div className="h-px w-12 bg-white/20" />
              <span>VISUAL JOURNAL</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-cinematic text-luxury-white">
              THE ARCHIVES
            </h2>
          </div>

          <div className="font-mono text-xs text-luxury-muted uppercase tracking-wider">
            RECORDED FRAMES // AMAL JYOTHI
          </div>
        </div>

        {/* Editorial Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => {
            const isWide = item.aspect === "wide";
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative cursor-pointer overflow-hidden border border-white/10 bg-luxury-carbon transition-colors hover:border-white/30 ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent opacity-60" />

                  {/* Top Serial & Location */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-luxury-white bg-luxury-obsidian/70 backdrop-blur-md px-3 py-1.5 border border-white/10">
                    <span>{item.tag}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                  </div>

                  {/* Bottom Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display text-xl uppercase tracking-wider text-luxury-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Minimalist Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 sm:p-12 bg-luxury-obsidian/95 backdrop-blur-2xl">
          <div className="relative max-w-5xl w-full border border-white/20 bg-luxury-carbon p-4">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-6 right-6 z-20 p-2 text-luxury-muted hover:text-luxury-white transition-colors"
              aria-label="Close image"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-xs text-luxury-muted pt-2">
              <span className="text-luxury-white uppercase tracking-wider">{activeItem.title}</span>
              <span>{activeItem.tag}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
