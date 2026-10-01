"use client";

import { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/data/site";

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

          const duration = 1600;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
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
      { threshold: 0.2 }
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
      label: "EVENTS",
      sublabel: "Technical & General Competitions",
    },
    {
      id: "02",
      number: `${counts.players}+`,
      label: "PARTICIPANTS",
      sublabel: "Engineers & Creators Across India",
    },
    {
      id: "03",
      number: `${counts.gameZones}+`,
      label: "GAMES & LABS",
      sublabel: "Active Arenas, Hubs & Zones",
    },
    {
      id: "04",
      number: `₹${counts.prizePool}L+`,
      label: "PRIZE POOL",
      sublabel: "Total Award Bounty",
    },
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-luxury-obsidian py-24 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Marker */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-12">
          <span className="text-luxury-amber">02 // SCALE</span>
          <div className="h-px w-12 bg-white/20" />
          <span>FESTIVAL METRICS</span>
        </div>

        {/* 4 Clean Editorial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div
              key={m.id}
              className="relative pt-6 border-t border-white/10 group hover:border-white/30 transition-colors"
            >
              <span className="font-mono text-xs text-luxury-dim block mb-3">
                {m.id} / 04
              </span>

              <div className="font-display text-6xl sm:text-7xl font-bold tracking-tight text-luxury-white">
                {m.number}
              </div>

              <div className="mt-2 font-display text-sm uppercase tracking-widest text-luxury-amber">
                {m.label}
              </div>

              <p className="mt-1 text-xs text-luxury-muted font-sans font-light leading-relaxed">
                {m.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
