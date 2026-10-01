"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";

export default function CountdownHUD() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(siteConfig.targetDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: String(timeLeft.days).padStart(2, "0") },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <section className="relative w-full bg-luxury-obsidian py-28 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 text-center">
        {/* Section Marker */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-6">
          <span className="text-luxury-amber">06 // CHRONOMETER</span>
          <div className="h-px w-12 bg-white/20" />
          <span>OFFICIAL COUNTDOWN</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-cinematic text-luxury-white">
          THE GRID OPENS IN
        </h2>

        <p className="mt-2 text-xs font-mono text-luxury-muted uppercase tracking-widest">
          30 OCTOBER 2026 • 09:00 AM IST • AMAL JYOTHI COLLEGE OF ENGINEERING
        </p>

        {/* 4 Minimal Editorial Time Blocks */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {timeUnits.map((u) => (
            <div
              key={u.label}
              className="border-t border-white/10 pt-6 text-center"
            >
              <div className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-luxury-white">
                {u.value}
              </div>

              <div className="mt-2 font-mono text-xs uppercase tracking-widest text-luxury-amber">
                {u.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
