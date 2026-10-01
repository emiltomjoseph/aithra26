"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onOpenRegister: () => void;
}

export default function FinalCTA({ onOpenRegister }: FinalCTAProps) {
  const handleScrollToEvents = () => {
    const elem = document.querySelector("#events");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-luxury-obsidian py-36 border-t border-white/10 overflow-hidden">
      {/* Background Track Horizon Composite */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          alt="Porsche on Dusk Track"
          fill
          className="object-cover opacity-20 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-luxury-obsidian/80 to-luxury-obsidian" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-12 text-center">
        <div className="inline-flex items-center gap-3 text-xs font-mono tracking-extreme uppercase text-luxury-amber mb-6">
          <span>FINAL ADMISSION CALL</span>
          <span className="opacity-40">•</span>
          <span>AITHRA 2026</span>
        </div>

        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl uppercase tracking-cinematic text-luxury-white leading-none">
          THE GRID AWAITS.
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono tracking-widest uppercase text-luxury-muted">
          <span>30 — 31 OCTOBER 2026</span>
          <span>•</span>
          <span>AMAL JYOTHI COLLEGE OF ENGINEERING</span>
          <span>•</span>
          <span className="text-luxury-amber">₹6,00,000+ BOUNTY</span>
        </div>

        <p className="mt-6 max-w-xl mx-auto text-xs sm:text-sm font-sans text-luxury-muted font-light leading-relaxed">
          Accreditation passes provide full access to all technical competitions, workshops, hackathons, and symposium tracks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-luxury-white text-luxury-obsidian font-display text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:scale-105 hover:bg-luxury-amber"
          >
            REGISTER CREDENTIALS NOW
          </button>

          <button
            onClick={handleScrollToEvents}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-luxury-white font-display text-sm uppercase tracking-widest transition-colors duration-300 hover:border-luxury-amber hover:text-luxury-amber"
          >
            EXPLORE DIRECTORY
          </button>
        </div>
      </div>
    </section>
  );
}
