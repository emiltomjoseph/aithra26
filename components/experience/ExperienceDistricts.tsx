"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ExperienceDistrictsProps {
  onOpenRegister: () => void;
}

export default function ExperienceDistricts({ onOpenRegister }: ExperienceDistrictsProps) {
  const handleScrollToEvents = () => {
    const elem = document.querySelector("#events");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-4">
          <span className="text-luxury-amber">04 // HIGHLIGHTS</span>
          <div className="h-px w-12 bg-white/20" />
          <span>FEATURED EXPERIENCES</span>
        </div>

        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-cinematic text-luxury-white">
          THE FESTIVAL ARENAS
        </h2>

        {/* 2 Full-Width Feature Spreads */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Spread 1: The 36-Hour Hackathon */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-luxury-carbon group">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Hackathon Arena"
                fill
                className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-carbon via-luxury-carbon/60 to-transparent" />
            </div>

            <div className="p-8 sm:p-10 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber block mb-2">
                FLAGSHIP COMPETITION // 36 HOURS
              </span>

              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-luxury-white">
                THE HACKATHON
              </h3>

              <p className="mt-2 font-display text-lg uppercase tracking-widest text-luxury-muted">
                BUILD. BREAK. REBUILD.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-luxury-muted font-sans font-light leading-relaxed max-w-lg">
                Assemble your squad for 36 continuous hours of intense software engineering, rapid algorithmic prototyping, and system design in the Central Computing Labs.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-mono text-xs text-luxury-dim">BOUNTY: ₹1,50,000+</span>
                <button
                  onClick={handleScrollToEvents}
                  className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-luxury-white hover:text-luxury-amber transition-colors"
                >
                  <span>VIEW BRIEFING</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Spread 2: Engineering Masterclasses */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-luxury-carbon group">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering Masterclasses"
                fill
                className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-carbon via-luxury-carbon/60 to-transparent" />
            </div>

            <div className="p-8 sm:p-10 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber block mb-2">
                TECHNICAL INTEL // CERTIFIED
              </span>

              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-luxury-white">
                MASTERCLASSES
              </h3>

              <p className="mt-2 font-display text-lg uppercase tracking-widest text-luxury-muted">
                LEARN FROM THE BEST.
              </p>

              <p className="mt-4 text-xs sm:text-sm text-luxury-muted font-sans font-light leading-relaxed max-w-lg">
                High-level masterclasses covering generative artificial intelligence, high-voltage powertrain systems, autonomous robotics, and modern digital interfaces.
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="font-mono text-xs text-luxury-dim">CERTIFIED WORKSHOPS</span>
                <button
                  onClick={handleScrollToEvents}
                  className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-luxury-white hover:text-luxury-amber transition-colors"
                >
                  <span>VIEW WORKSHOPS</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
