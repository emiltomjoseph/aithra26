"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import ShiftCard from "@/components/ui/ShiftCard";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Index Marker */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-8">
          <span className="text-luxury-amber">01 // INTRODUCTION</span>
          <div className="h-px w-12 bg-white/20" />
          <span>AITHRA TECHFEST</span>
        </div>

        {/* Editorial Headline Statement */}
        <div className="max-w-4xl">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-cinematic text-luxury-white leading-tight">
            WHERE TECHNOLOGY MEETS IMAGINATION.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6 text-sm sm:text-base font-sans text-luxury-muted leading-relaxed font-light">
            <p className="text-luxury-white text-lg font-normal leading-relaxed">
              {siteConfig.description}
            </p>

            <p>
              Set against the engineering campus of Amal Jyothi College of Engineering in Kanjirappally, AITHRA 2026 brings together over 70 sanctioned technical competitions, hackathons, engineering masterclasses, and an unprecedented ₹6,00,000+ prize pool.
            </p>

            <p>
              Centred around the ethos of innovation, precision, and collaboration, this edition is conceived as a high-performance technological showcase for innovators, designers, and collegiate squads from across India.
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-mono text-xs text-luxury-muted">
              <div>
                <span className="text-luxury-dim block mb-1">GOVERNING BODY</span>
                <span className="text-luxury-white font-medium">AJCE Students&apos; Council</span>
              </div>
              <div>
                <span className="text-luxury-dim block mb-1">DATES</span>
                <span className="text-luxury-white font-medium">30 — 31 October 2026</span>
              </div>
            </div>
          </div>

          {/* Right: High-End Full Bleed Imagery with 3D Tilt */}
          <div className="lg:col-span-6 relative">
            <ShiftCard chamfer className="p-0 overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                  alt="Automotive & Tech Precision"
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent opacity-60" />

                {/* Bottom Caption Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-luxury-muted">
                  <span>AMAL JYOTHI CAMPUS, KANJIRAPPALLY</span>
                  <span>OCT 2026</span>
                </div>
              </div>
            </ShiftCard>
          </div>
        </div>
      </div>
    </section>
  );
}
