"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import HeroFallback from "@/components/hero/HeroFallback";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import MetalButton from "@/components/ui/MetalButton";
import { siteConfig } from "@/data/site";
import { ChevronDown, Sparkles } from "lucide-react";

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

  // Live countdown state for bottom capsule HUD (Ref Image 5)
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // 1. Mouse movement tracking (-1 to +1)
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMouse({ x, y });
    };

    // 2. Scroll progression tracking
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = heroRef.current.offsetHeight - windowHeight;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      setScrollProgress(progress);
    };

    // 3. Live countdown calculation
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

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
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

        {/* Perforated Dot-Matrix Carbon Texture (Reference Image 5) */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Subtle Vignette & Film Grain */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-radial-vignette opacity-70" />
        <div className="pointer-events-none absolute inset-0 z-10 film-grain" />

        {/* Top Spacer */}
        <div className="relative z-20 pt-28 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-luxury-muted">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            KANJIRAPPALLY CIRCUIT // SECTOR 09
          </span>
          <span className="hidden sm:inline">30 — 31 OCTOBER 2026</span>
        </div>

        {/* Center Headline Typography (Reference Image 5 Architecture) */}
        <div
          className="relative z-20 mx-auto max-w-5xl px-6 text-center transition-opacity duration-500 my-auto"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 1.8) }}
        >
          {/* Subtitle Line */}
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-extreme uppercase text-cyan-400 mb-2">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span>AMAL JYOTHI COLLEGE OF ENGINEERING • FLAGSHIP TECHFEST</span>
          </div>

          {/* Reference Image 5: Display Headline */}
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-cinematic text-luxury-white leading-none">
            <span className="block">INNOVATION</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 drop-shadow-[0_0_35px_rgba(0,240,255,0.45)]">
              BECOMES
            </span>
            <span className="block">THE FUTURE.</span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm font-sans text-luxury-muted max-w-lg mx-auto tracking-wide leading-relaxed font-light">
            Where automotive precision meets engineering brilliance. Kerala&apos;s apex technological gathering at Amal Jyothi College of Engineering.
          </p>

          {/* Action Triggers */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BorderBeamButton
              onClick={onOpenRegister}
              size="lg"
              glowColor="amber"
              className="w-full sm:w-auto"
            >
              REGISTER CREDENTIALS
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

        {/* Reference Image 5: Docked Futuristic Glowing Capsule Pill Countdown HUD */}
        <div className="relative z-20 pb-8 px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-5 sm:gap-8 rounded-full px-6 sm:px-10 py-3 bg-[#08050E]/85 backdrop-blur-2xl border border-cyan-500/35 shadow-[0_0_30px_rgba(0,240,255,0.18)]">
            {/* Days */}
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider leading-none">
                {timeLeft.days}
              </div>
              <div className="text-[9px] font-mono tracking-widest text-cyan-400 mt-1">DAYS</div>
            </div>

            <span className="text-cyan-400/80 font-display text-xl sm:text-2xl -mt-3 select-none">:</span>

            {/* Hours */}
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider leading-none">
                {timeLeft.hours}
              </div>
              <div className="text-[9px] font-mono tracking-widest text-cyan-400 mt-1">HOURS</div>
            </div>

            <span className="text-cyan-400/80 font-display text-xl sm:text-2xl -mt-3 select-none">:</span>

            {/* Minutes */}
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider leading-none">
                {timeLeft.minutes}
              </div>
              <div className="text-[9px] font-mono tracking-widest text-cyan-400 mt-1">MINUTES</div>
            </div>

            <span className="text-cyan-400/80 font-display text-xl sm:text-2xl -mt-3 select-none">:</span>

            {/* Seconds */}
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 tracking-wider leading-none animate-pulse">
                {timeLeft.seconds}
              </div>
              <div className="text-[9px] font-mono tracking-widest text-cyan-400 mt-1">SECONDS</div>
            </div>
          </div>

          {/* Scroll Cue */}
          <button
            onClick={handleScrollToNext}
            className="group inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-extreme text-luxury-dim hover:text-luxury-white transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="h-3 w-3 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
