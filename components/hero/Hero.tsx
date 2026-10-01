"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeroFallback from "@/components/hero/HeroFallback";
import { ArrowRight, ChevronDown } from "lucide-react";

// Dynamically import 3D WebGL Canvas
const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Mouse movement tracking (-1 to +1)
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMouse({ x, y });
    };

    // 2. Scroll progression tracking (0 to 1 over hero height)
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = heroRef.current.offsetHeight - windowHeight;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToNext = () => {
    const elem = document.querySelector("#about");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToEvents = () => {
    const elem = document.querySelector("#events");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[140vh] bg-luxury-obsidian overflow-hidden"
    >
      {/* Fixed Sticky Viewport for 3D Car & Track */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* 3D WebGL Canvas Background */}
        <div className="absolute inset-0 z-0">
          <HeroCanvas mouse={mouse} scrollProgress={scrollProgress} />
        </div>

        {/* Subtle Vignette & Film Grain */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-radial-vignette opacity-70" />
        <div className="pointer-events-none absolute inset-0 z-10 film-grain" />

        {/* Top Spacer */}
        <div className="relative z-20 pt-24 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-luxury-muted">
          <span>KANJIRAPPALLY CIRCUIT // SECTOR 09</span>
          <span className="hidden sm:inline">30 — 31 OCTOBER 2026</span>
        </div>

        {/* Center Minimal Editorial Typography */}
        <div className="relative z-20 mx-auto max-w-5xl px-6 text-center transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 1.8) }}
        >
          {/* Subtitle Line */}
          <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-mono tracking-extreme uppercase text-luxury-amber">
            <span>AMAL JYOTHI COLLEGE OF ENGINEERING</span>
            <span className="opacity-40">•</span>
            <span>FLAGSHIP TECHFEST</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="mt-4 font-display text-6xl sm:text-8xl md:text-9xl uppercase tracking-cinematic text-luxury-white leading-none">
            ENTER THE FUTURE.
          </h1>

          <p className="mt-3 text-xs sm:text-sm font-sans text-luxury-muted max-w-lg mx-auto tracking-wide leading-relaxed">
            Where engineering mastery meets the thrill of the open circuit. Experience Kerala&apos;s most prestigious technology festival.
          </p>

          {/* Minimal Action Triggers */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-luxury-white text-luxury-obsidian font-display text-sm uppercase tracking-widest font-bold transition-transform duration-300 hover:scale-105 hover:bg-luxury-amber"
            >
              REGISTER CREDENTIALS
            </button>

            <button
              onClick={handleScrollToEvents}
              className="w-full sm:w-auto px-7 py-3 rounded-full border border-white/20 text-luxury-white font-display text-sm uppercase tracking-widest transition-colors duration-300 hover:border-luxury-amber hover:text-luxury-amber"
            >
              EXPLORE EVENTS
            </button>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-20 pb-8 px-6 text-center">
          <button
            onClick={handleScrollToNext}
            className="group inline-flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-extreme text-luxury-dim hover:text-luxury-white transition-colors"
          >
            <span>SCROLL TO ADVANCE</span>
            <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
