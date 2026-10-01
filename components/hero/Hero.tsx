"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroFallback from "@/components/hero/HeroFallback";
import { sound } from "@/lib/audio";
import { ArrowDown, Flame, Radio, Shield } from "lucide-react";

// Dynamically import 3D WebGL Scene with fallback
const CityScene = dynamic(() => import("@/components/three/CityScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [webGLError, setWebGLError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 15;
      const y = (e.clientY / innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnterAithra = () => {
    sound.playClick();
    const elem = document.querySelector("#about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreMissions = () => {
    sound.playClick();
    const elem = document.querySelector("#missions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-gta-night pt-20 pb-10 sm:py-24">
      {/* Background 3D or Fallback */}
      <div className="absolute inset-0 z-0">
        {!webGLError && mounted ? (
          <div className="h-full w-full">
            <CityScene />
          </div>
        ) : (
          <HeroFallback />
        )}
      </div>

      {/* Atmospheric Vignette & Scanlines */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-radial-vignette opacity-80" />
      <div className="pointer-events-none absolute inset-0 z-10 gta-scanlines opacity-40" />

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-gta-magenta/20 bg-gta-surface/40 px-4 py-2 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-gta-white/70">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gta-yellow opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gta-yellow" />
            </span>
            <span className="text-gta-yellow font-bold">TRANSMISSION LIVE</span>
            <span className="text-gta-white/30">|</span>
            <span>KANJIRAPPALLY RADAR SECTOR 09</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-gta-white/60">
            <span className="flex items-center gap-1">
              <Radio className="h-3 w-3 text-gta-pink" /> 104.8 MHZ TECH WAVE
            </span>
            <span>COORD: 9.5593° N, 76.8188° E</span>
          </div>
        </div>
      </div>

      {/* Center Cinematic Content */}
      <div
        className="relative z-20 mx-auto my-auto flex w-full max-w-5xl flex-col items-center px-4 text-center transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
        }}
      >
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gta-magenta/40 bg-gta-surface/70 px-4 py-1.5 backdrop-blur-md shadow-neonPink">
          <Flame className="h-3.5 w-3.5 text-gta-yellow" />
          <span className="font-display text-xs sm:text-sm uppercase tracking-widest text-gta-yellow">
            FLAGSHIP TECHFEST 2026
          </span>
          <span className="text-gta-white/30">•</span>
          <span className="font-display text-xs sm:text-sm uppercase tracking-wider text-gta-white/90">
            AJCE STUDENTS&apos; COUNCIL
          </span>
        </div>

        {/* Main Logo & Giant Display Header */}
        <div className="relative mt-6 sm:mt-8 flex flex-col items-center">
          <div className="relative mb-2">
            <Image
              src="/brand/Aithra LOGO.png"
              alt="Official AITHRA Logo"
              width={340}
              height={140}
              priority
              className="h-24 sm:h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(217,43,255,0.7)]"
            />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight text-gta-white">
            <span className="bg-gradient-to-r from-gta-white via-gta-pink to-gta-yellow bg-clip-text text-transparent drop-shadow-lg">
              TECHFEST 2026
            </span>
          </h1>

          <p className="mt-3 font-display text-lg sm:text-2xl md:text-3xl uppercase tracking-widest text-gta-yellow text-glow-yellow">
            ENTER THE CITY. CHOOSE YOUR MISSION.
          </p>

          <p className="mt-4 max-w-2xl text-xs sm:text-base text-gta-white/80 font-sans leading-relaxed">
            30 — 31 OCTOBER 2026 • AMAL JYOTHI COLLEGE OF ENGINEERING, KANJIRAPPALLY.
            <br />
            Kerala&apos;s premier engineering symposium transformed into an open-world digital metropolis.
          </p>
        </div>

        {/* Hero Call To Actions */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleEnterAithra}
            onMouseEnter={() => sound.playHover()}
            className="interactive group relative w-full sm:w-auto overflow-hidden rounded-md bg-gta-yellow px-8 py-3.5 font-display text-lg font-bold uppercase tracking-wider text-gta-night shadow-neonYellow transition-all duration-300 hover:bg-gta-yellow/90 hover:scale-105"
          >
            <div className="flex items-center justify-center gap-2">
              <span>ENTER AITHRA</span>
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </div>
          </button>

          <button
            onClick={handleExploreMissions}
            onMouseEnter={() => sound.playHover()}
            className="interactive group relative w-full sm:w-auto overflow-hidden rounded-md border border-gta-magenta/60 bg-gta-surface/80 px-8 py-3.5 font-display text-lg uppercase tracking-wider text-gta-white backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:text-gta-yellow hover:bg-gta-surface"
          >
            <div className="flex items-center justify-center gap-2">
              <span>EXPLORE MISSIONS</span>
              <span className="text-xs font-mono text-gta-yellow">(70+)</span>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom HUD Quick Stats Strip */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 rounded-xl border border-gta-white/10 bg-gta-surface/60 p-3 sm:p-4 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center border-r border-gta-white/10 p-2 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl text-gta-yellow text-glow-yellow">70+</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-gta-white/60">MISSIONS</span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-gta-white/10 p-2 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl text-gta-pink text-glow-pink">500+</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-gta-white/60">PLAYERS</span>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-gta-white/10 p-2 last:border-r-0">
            <span className="font-display text-2xl sm:text-3xl text-gta-magenta text-glow-magenta">35+</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-gta-white/60">GAME ZONES</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-display text-2xl sm:text-3xl text-gta-yellow text-glow-yellow">₹6,00,000+</span>
            <span className="font-display text-[11px] uppercase tracking-wider text-gta-white/60">PRIZE BOUNTY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
