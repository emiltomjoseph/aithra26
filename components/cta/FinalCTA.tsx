"use client";

import Image from "next/image";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import MetalButton from "@/components/ui/MetalButton";
import { ArrowRight, Trophy } from "lucide-react";

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
          <span className="text-luxury-amber flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5" />
            ₹6,00,000+ BOUNTY
          </span>
        </div>

        <p className="mt-6 max-w-xl mx-auto text-xs sm:text-sm font-sans text-luxury-muted font-light leading-relaxed">
          Accreditation passes provide full access to all technical competitions, workshops, hackathons, and symposium tracks.
        </p>

        {/* Cult UI Luxury CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BorderBeamButton
            onClick={onOpenRegister}
            size="lg"
            glowColor="amber"
            className="w-full sm:w-auto"
          >
            <span>REGISTER CREDENTIALS NOW</span>
            <ArrowRight className="h-4 w-4" />
          </BorderBeamButton>

          <MetalButton
            variant="titanium"
            size="lg"
            onClick={handleScrollToEvents}
            className="w-full sm:w-auto"
          >
            EXPLORE DIRECTORY
          </MetalButton>
        </div>
      </div>
    </section>
  );
}
