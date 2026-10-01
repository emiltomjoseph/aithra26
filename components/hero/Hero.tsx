"use client";

import { useState, useEffect, useRef } from "react";
import HeroVideoBackground from "@/components/hero/HeroVideoBackground";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import MetalButton from "@/components/ui/MetalButton";
import { siteConfig } from "@/data/site";
import { ChevronDown, Gauge, Trophy } from "lucide-react";

interface HeroProps {
  onOpenRegister: () => void;
}

export default function Hero({ onOpenRegister }: HeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Live countdown state for bottom capsule HUD (Ref Image 5)
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = heroRef.current.offsetHeight - windowHeight;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      setScrollProgress(progress);
    };

    // Live countdown calculation to 30 October 2026
    const target = new Date(siteConfig.targetDateISO).getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
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
      className="relative w-full h-[135vh] bg-black overflow-hidden select-none"
    >
      {/* Sticky Fullscreen Real-World Video Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* Real-World Cinematic Automotive Video Background */}
        <HeroVideoBackground scrollProgress={scrollProgress} />

        {/* ========================================================
            TOP ZONE: Clean, High-Impact Editorial Header
            Positioned high so the real-world video shines below
            ======================================================== */}
        <div
          className="relative z-20 pt-24 sm:pt-28 px-6 sm:px-12 max-w-7xl mx-auto w-full text-center transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 2.2) }}
        >
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-extreme uppercase text-cyan-400 bg-cyan-950/40 border border-cyan-500/25 px-3.5 py-1 rounded-full mb-3 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>AMAL JYOTHI COLLEGE OF ENGINEERING • TECHFEST 2026</span>
          </div>

          {/* Grand Headline (GTA + Ref Image 5) */}
          <h1 className="font-display uppercase tracking-cinematic text-luxury-white leading-none">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal block sm:inline sm:mr-4">
              INNOVATION
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A45] via-[#FF2E93] to-[#00F0FF] drop-shadow-[0_0_35px_rgba(255,122,69,0.35)] block sm:inline sm:mr-4">
              BECOMES
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/90 tracking-widest block sm:inline">
              THE FUTURE.
            </span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-widest text-luxury-muted">
            30 & 31 OCTOBER 2026 // KANJIRAPPALLY CIRCUIT • KERALA
          </p>
        </div>

        {/* ========================================================
            MIDDLE ZONE: 100% UNCLUTTERED FOR REAL-WORLD CAR FOOTAGE
            Left and right margins hold non-intrusive automotive HUD telemetry
            ======================================================== */}
        <div
          className="relative z-20 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between pointer-events-none transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 2.0) }}
        >
          {/* Left Lateral Telemetry HUD */}
          <div className="hidden lg:flex flex-col gap-3 font-mono text-[10px] text-luxury-muted/80 tracking-widest bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold">
              <Gauge className="h-3.5 w-3.5" />
              <span>LIVE AUTOMOTIVE TELEMETRY</span>
            </div>
            <div className="space-y-1">
              <div>MACHINE: HIGH-PERFORMANCE GT</div>
              <div>POWERTRAIN: TWIN-TURBO FLAT-6</div>
              <div>TRANSMISSION: 7-SPEED DUAL-CLUTCH</div>
            </div>
          </div>

          {/* Right Festival Specs HUD */}
          <div className="hidden lg:flex flex-col gap-3 font-mono text-[10px] text-luxury-muted/80 tracking-widest bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 text-right shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-end gap-2 text-luxury-amber font-semibold">
              <Trophy className="h-3.5 w-3.5" />
              <span>CIRCUIT STATUS</span>
            </div>
            <div className="space-y-1">
              <div>TOTAL MISSIONS: 74 SANCTIONED</div>
              <div>BOUNTY POOL: ₹6,00,000+</div>
              <div>SQUADS: 500+ ACROSS INDIA</div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM ZONE: Docked Capsule Countdown HUD & Action Buttons
            ======================================================== */}
        <div
          className="relative z-20 pb-8 px-6 flex flex-col items-center gap-4 transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 1.5) }}
        >
          {/* Ref Image 5: Docked Capsule Countdown HUD */}
          <div className="flex items-center gap-4 sm:gap-7 rounded-full px-6 sm:px-8 py-2.5 bg-[#08050E]/90 backdrop-blur-2xl border border-cyan-500/35 shadow-[0_0_30px_rgba(0,240,255,0.22)]">
            {/* Days */}
            <div className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-wider leading-none">
                {timeLeft.days}
              </div>
              <div className="text-[8px] font-mono tracking-widest text-cyan-400 mt-0.5">DAYS</div>
            </div>

            <span className="text-cyan-400/80 font-display text-lg -mt-2">:</span>

            {/* Hours */}
            <div className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-wider leading-none">
                {timeLeft.hours}
              </div>
              <div className="text-[8px] font-mono tracking-widest text-cyan-400 mt-0.5">HOURS</div>
            </div>

            <span className="text-cyan-400/80 font-display text-lg -mt-2">:</span>

            {/* Minutes */}
            <div className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-wider leading-none">
                {timeLeft.minutes}
              </div>
              <div className="text-[8px] font-mono tracking-widest text-cyan-400 mt-0.5">MINS</div>
            </div>

            <span className="text-cyan-400/80 font-display text-lg -mt-2">:</span>

            {/* Seconds */}
            <div className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-cyan-400 tracking-wider leading-none animate-pulse">
                {timeLeft.seconds}
              </div>
              <div className="text-[8px] font-mono tracking-widest text-cyan-400 mt-0.5">SECS</div>
            </div>
          </div>

          {/* Action Buttons: Neatly placed under the capsule */}
          <div className="flex items-center justify-center gap-3">
            <BorderBeamButton
              onClick={onOpenRegister}
              size="sm"
              glowColor="amber"
              className="px-5 py-2.5 text-xs"
            >
              REGISTER CREDENTIALS
            </BorderBeamButton>

            <MetalButton
              variant="titanium"
              size="sm"
              onClick={handleScrollToEvents}
              className="px-5 py-2.5 text-xs"
            >
              EXPLORE DIRECTORY
            </MetalButton>
          </div>

          {/* Minimal Scroll Cue */}
          <button
            onClick={handleScrollToNext}
            className="group inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-extreme text-luxury-dim hover:text-luxury-white transition-colors"
          >
            <span>SCROLL TO ADVANCE</span>
            <ChevronDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
