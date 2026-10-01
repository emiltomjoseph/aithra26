"use client";

import Image from "next/image";
import { sound } from "@/lib/audio";
import { ArrowRight, Flame, Shield, MapPin } from "lucide-react";

interface FinalCTAProps {
  onOpenRegister: () => void;
}

export default function FinalCTA({ onOpenRegister }: FinalCTAProps) {
  const handleScrollToMissions = () => {
    sound.playClick();
    const elem = document.querySelector("#missions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gta-night py-28 sm:py-36">
      {/* Background Cinematic Night Highway Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/brand/Background.png"
          alt="Night City Environment"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gta-night via-gta-night/70 to-gta-night" />
      </div>

      <div className="pointer-events-none absolute inset-0 gta-scanlines opacity-30 z-10" />

      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Emblem */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gta-yellow bg-gta-yellow/10 text-gta-yellow shadow-neonYellow">
          <Flame className="h-7 w-7" />
        </div>

        <span className="font-display text-base sm:text-lg uppercase tracking-widest text-gta-yellow">
          FINAL CALL FOR OPERATORS
        </span>

        <h2 className="mt-4 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-gta-white">
          READY TO <span className="text-gta-yellow text-glow-yellow">ENTER?</span>
        </h2>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 font-display text-xl sm:text-2xl uppercase tracking-wider text-gta-pink">
          <span>AITHRA 2026</span>
          <span className="text-gta-white/40">•</span>
          <span className="text-gta-white">30 — 31 OCTOBER</span>
          <span className="text-gta-white/40">•</span>
          <span className="text-gta-yellow">AMAL JYOTHI</span>
        </div>

        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-gta-white/80 font-sans leading-relaxed">
          The gates to Kerala&apos;s most immersive techfest open soon. Secure your mission credentials, access exclusive hackathons, and challenge for the ₹6,00,000+ bounty pool.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              sound.playClick();
              onOpenRegister();
            }}
            onMouseEnter={() => sound.playHover()}
            className="interactive group relative w-full sm:w-auto rounded-md bg-gta-yellow px-10 py-4 font-display text-xl font-bold uppercase tracking-wider text-gta-night shadow-neonYellow transition-all duration-300 hover:bg-gta-yellow/90 hover:scale-105"
          >
            <div className="flex items-center justify-center gap-2">
              <span>REGISTER NOW</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          <button
            onClick={handleScrollToMissions}
            onMouseEnter={() => sound.playHover()}
            className="interactive w-full sm:w-auto rounded-md border border-gta-magenta/60 bg-gta-surface/80 px-8 py-4 font-display text-xl uppercase tracking-wider text-gta-white backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:text-gta-yellow hover:bg-gta-surface"
          >
            EXPLORE MISSIONS
          </button>
        </div>
      </div>
    </section>
  );
}
