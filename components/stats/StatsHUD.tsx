"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/data/site";
import { Target, Users, Gamepad2, Award } from "lucide-react";

export default function StatsHUD() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    missions: 0,
    players: 0,
    gameZones: 0,
    prizePool: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate numbers up
          const duration = 1800;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              missions: Math.floor(easeOut * siteConfig.stats.missions.count),
              players: Math.floor(easeOut * siteConfig.stats.players.count),
              gameZones: Math.floor(easeOut * siteConfig.stats.gameZones.count),
              prizePool: Math.floor(easeOut * siteConfig.stats.prizePool.count),
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-gta-surface py-20 border-y border-gta-magenta/25">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 gta-scanlines opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="rounded bg-gta-yellow/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
            LIVE TELEMETRY // HUD RECORD
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-gta-white">
            THE NUMBERS OF <span className="text-gta-yellow text-glow-yellow">AITHRA 2026</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gta-white/60 font-sans max-w-lg">
            High-octane participation across engineering colleges throughout India.
          </p>
        </div>

        {/* 4 HUD Metric Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Missions */}
          <div className="group relative overflow-hidden rounded-xl border border-gta-magenta/40 bg-gta-night/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:shadow-neonYellow hud-corner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gta-white/40">SYS-01</span>
              <Target className="h-5 w-5 text-gta-yellow" />
            </div>

            <div className="mt-4">
              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-gta-yellow text-glow-yellow">
                {counts.missions}{siteConfig.stats.missions.suffix}
              </div>
              <div className="mt-1 font-display text-lg uppercase tracking-wider text-gta-white">
                {siteConfig.stats.missions.label}
              </div>
              <p className="text-xs text-gta-white/60 font-sans mt-0.5">
                {siteConfig.stats.missions.sublabel}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-yellow/40 group-hover:bg-gta-yellow" />
          </div>

          {/* Card 2: Players */}
          <div className="group relative overflow-hidden rounded-xl border border-gta-pink/40 bg-gta-night/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-gta-pink hover:shadow-neonPink hud-corner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gta-white/40">SYS-02</span>
              <Users className="h-5 w-5 text-gta-pink" />
            </div>

            <div className="mt-4">
              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-gta-pink text-glow-pink">
                {counts.players}{siteConfig.stats.players.suffix}
              </div>
              <div className="mt-1 font-display text-lg uppercase tracking-wider text-gta-white">
                {siteConfig.stats.players.label}
              </div>
              <p className="text-xs text-gta-white/60 font-sans mt-0.5">
                {siteConfig.stats.players.sublabel}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-pink/40 group-hover:bg-gta-pink" />
          </div>

          {/* Card 3: Game Zones */}
          <div className="group relative overflow-hidden rounded-xl border border-gta-magenta/40 bg-gta-night/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-gta-magenta hover:shadow-neonElectric hud-corner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gta-white/40">SYS-03</span>
              <Gamepad2 className="h-5 w-5 text-gta-magenta" />
            </div>

            <div className="mt-4">
              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-gta-magenta text-glow-magenta">
                {counts.gameZones}{siteConfig.stats.gameZones.suffix}
              </div>
              <div className="mt-1 font-display text-lg uppercase tracking-wider text-gta-white">
                {siteConfig.stats.gameZones.label}
              </div>
              <p className="text-xs text-gta-white/60 font-sans mt-0.5">
                {siteConfig.stats.gameZones.sublabel}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-magenta/40 group-hover:bg-gta-magenta" />
          </div>

          {/* Card 4: Prize Bounty */}
          <div className="group relative overflow-hidden rounded-xl border border-gta-orange/40 bg-gta-night/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:shadow-neonYellow hud-corner">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-gta-white/40">SYS-04</span>
              <Award className="h-5 w-5 text-gta-yellow" />
            </div>

            <div className="mt-4">
              <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-gta-yellow text-glow-yellow">
                {siteConfig.stats.prizePool.prefix}{counts.prizePool}{siteConfig.stats.prizePool.suffix}
              </div>
              <div className="mt-1 font-display text-lg uppercase tracking-wider text-gta-white">
                {siteConfig.stats.prizePool.label}
              </div>
              <p className="text-xs text-gta-white/60 font-sans mt-0.5">
                {siteConfig.stats.prizePool.sublabel}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-orange/40 group-hover:bg-gta-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
}
