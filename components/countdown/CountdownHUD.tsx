"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import ShiftCard from "@/components/ui/ShiftCard";
import BorderBeam from "@/components/ui/BorderBeam";
import { Clock } from "lucide-react";

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
    { label: "DAYS", value: String(timeLeft.days).padStart(2, "0"), max: 365, num: timeLeft.days },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, "0"), max: 24, num: timeLeft.hours },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, "0"), max: 60, num: timeLeft.minutes },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, "0"), max: 60, num: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-luxury-amber/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 text-center">
        {/* Section Marker */}
        <div className="flex items-center justify-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-6">
          <span className="text-luxury-amber">06 // CHRONOMETER</span>
          <div className="h-px w-12 bg-white/20" />
          <span>PRECISION COUNTDOWN</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-cinematic text-luxury-white">
          THE GRID OPENS IN
        </h2>

        <div className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-luxury-muted uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          <Clock className="h-3.5 w-3.5 text-luxury-amber" />
          <span>30 OCTOBER 2026 • 09:00 AM IST • AMAL JYOTHI COLLEGE OF ENGINEERING</span>
        </div>

        {/* 4 Cult UI Tactile Chronometer ShiftCards */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {timeUnits.map((u, i) => {
            const pct = Math.min(100, Math.round((u.num / u.max) * 100));

            return (
              <ShiftCard
                key={u.label}
                chamfer
                className="p-6 relative text-center flex flex-col justify-between"
              >
                {/* Border Beam on Seconds block */}
                {u.label === "SECONDS" && (
                  <BorderBeam size={80} duration={4} colorFrom="#FF7A45" colorTo="#E65C38" />
                )}

                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-luxury-dim uppercase mb-3">
                    <span>SECTOR 0{i + 1}</span>
                    <span className="text-luxury-amber">{pct}%</span>
                  </div>

                  {/* Digit Display */}
                  <div className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-luxury-white leading-none">
                    {u.value}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  {/* Progress Bar Gauge */}
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-luxury-amber to-luxury-violet transition-all duration-500 rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-luxury-amber font-semibold">
                    {u.label}
                  </div>
                </div>
              </ShiftCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
