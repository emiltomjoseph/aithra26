"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "@/data/gallery";
import { sound } from "@/lib/audio";
import { Camera, X, Maximize2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handleOpenLightbox = (item: GalleryItem) => {
    sound.playClick();
    setActiveItem(item);
  };

  const handleCloseLightbox = () => {
    sound.playClick();
    setActiveItem(null);
  };

  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-gta-surface py-24 sm:py-32 border-t border-gta-magenta/25">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between border-b border-gta-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-gta-yellow/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
              <Camera className="h-3.5 w-3.5" />
              <span>THE VISUAL ARCHIVES</span>
            </div>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-gta-white">
              THE CITY IN <span className="text-gta-yellow text-glow-yellow">MOTION</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-gta-white/70 font-sans max-w-xl">
              Moments etched into the memory of Amal Jyothi College of Engineering. High-energy arenas, illuminated nightscapes, and intense code sprints.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-gta-white/60">
            RECORDED ARCHIVES: <span className="text-gta-yellow font-bold">{galleryItems.length} SNAPSHOTS</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const isWide = item.aspect === "wide";
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                onMouseEnter={() => sound.playHover()}
                className={`group interactive relative cursor-pointer overflow-hidden rounded-xl border border-gta-magenta/30 bg-gta-night shadow-lg transition-all duration-300 hover:border-gta-yellow hover:shadow-neonYellow hud-corner ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gta-night via-gta-night/30 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

                  {/* Top Tag Badge */}
                  <div className="absolute top-3 left-3 rounded bg-gta-night/85 px-2.5 py-1 text-[10px] font-display uppercase tracking-wider text-gta-yellow border border-gta-yellow/30 backdrop-blur-md">
                    {item.tag}
                  </div>

                  {/* Expand icon on hover */}
                  <div className="absolute top-3 right-3 rounded-full bg-gta-night/85 p-2 text-gta-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 border border-gta-white/20">
                    <Maximize2 className="h-4 w-4 text-gta-yellow" />
                  </div>

                  {/* Bottom Title Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="font-display text-lg sm:text-xl uppercase tracking-wider text-gta-white transition-colors group-hover:text-gta-yellow">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 bg-[#050307]/90 backdrop-blur-xl">
          <div className="relative max-w-5xl w-full overflow-hidden rounded-2xl border-2 border-gta-yellow bg-gta-night shadow-neonYellow">
            <button
              onClick={handleCloseLightbox}
              className="interactive absolute top-4 right-4 z-20 rounded-full bg-gta-night/80 p-2 text-gta-white transition-colors hover:bg-gta-yellow hover:text-gta-night border border-gta-white/20"
              aria-label="Close lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gta-night via-transparent to-transparent" />
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="font-display text-xs uppercase tracking-widest text-gta-yellow">
                  {activeItem.tag}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wider text-gta-white">
                  {activeItem.title}
                </h3>
              </div>

              <span className="rounded bg-gta-magenta/20 px-3 py-1 font-mono text-xs text-gta-magenta uppercase">
                AITHRA ARCHIVAL ASSET
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
