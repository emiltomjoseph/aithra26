"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/data/site";
import { animate } from "animejs";
import ShiftCard from "@/components/ui/ShiftCard";
import { Gauge, Users, Cpu, Trophy } from "lucide-react";

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

          const animObj = {
            missions: 0,
            players: 0,
            gameZones: 0,
            prizePool: 0,
          };

          // Anime.js smooth physics interpolation
          animate(animObj, {
            missions: siteConfig.stats.missions.count,
            players: siteConfig.stats.players.count,
            gameZones: siteConfig.stats.gameZones.count,
            prizePool: siteConfig.stats.prizePool.count,
            duration: 1800,
            ease: "outExpo",
            onUpdate: () => {
              setCounts({
                missions: Math.round(animObj.missions),
                players: Math.round(animObj.players),
                gameZones: Math.round(animObj.gameZones),
                prizePool: Math.round(animObj.prizePool),
              });
            },
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const metrics = [
    {
      id: "01",
      number: `${counts.missions}+`,
      raw: counts.missions,
      max: 100,
      label: "EVENTS",
      sublabel: "Technical & General Competitions",
      icon: Gauge,
      accent: "#FF7A45",
    },
    {
      id: "02",
      number: `${counts.players}+`,
      raw: counts.players,
      max: 600,
      label: "PARTICIPANTS",
      sublabel: "Engineers & Creators Across India",
      icon: Users,
      accent: "#9A4BFF",
    },
    {
      id: "03",
      number: `${counts.gameZones}+`,
      raw: counts.gameZones,
      max: 50,
      label: "GAMES & LABS",
      sublabel: "Active Arenas, Hubs & Zones",
      icon: Cpu,
      accent: "#FF7A45",
    },
    {
      id: "04",
      number: `₹${counts.prizePool}L+`,
      raw: counts.prizePool,
      max: 10,
      label: "PRIZE POOL",
      sublabel: "Total Official Award Bounty",
      icon: Trophy,
      accent: "#9A4BFF",
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-luxury-obsidian py-28 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-12">
          <span className="text-luxury-amber">02 // SCALE</span>
          <div className="h-px w-12 bg-white/20" />
          <span>FESTIVAL TELEMETRY</span>
        </div>

        {/* 4 Interactive Cult UI ShiftCards with Telemetry Arcs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            const progressPct = Math.min(100, Math.round((m.raw / m.max) * 100));
            // SVG circular perimeter = 2 * PI * r = 2 * 3.14159 * 28 ≈ 176
            const strokeDashoffset = 176 - (176 * progressPct) / 100;

            return (
              <ShiftCard
                key={m.id}
                chamfer
                className="p-6 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Sector and Telemetry Arc */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-luxury-dim uppercase tracking-widest">
                      SECTOR // {m.id}
                    </span>

                    {/* Circular Automotive Tachometer Progress Meter */}
                    <div className="relative h-10 w-10 flex items-center justify-center">
                      <svg className="h-10 w-10 -rotate-90 transform" viewBox="0 0 64 64">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="3.5"
                          fill="transparent"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke={m.accent}
                          strokeWidth="3.5"
                          strokeDasharray="176"
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          fill="transparent"
                          className="transition-all duration-300"
                        />
                      </svg>
                      <Icon className="h-3.5 w-3.5 text-luxury-muted absolute" />
                    </div>
                  </div>

                  {/* Dynamic Anime.js Numeric Display */}
                  <div className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-luxury-white">
                    {m.number}
                  </div>

                  {/* Label */}
                  <div className="mt-3 font-display text-sm tracking-widest uppercase text-luxury-amber">
                    {m.label}
                  </div>
                </div>

                {/* Subtitle */}
                <div className="mt-4 pt-3 border-t border-white/10 text-xs font-sans text-luxury-muted">
                  {m.sublabel}
                </div>
              </ShiftCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
