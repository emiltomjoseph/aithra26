"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Clock, ShieldAlert, Sparkles } from "lucide-react";

export default function CountdownHUD() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const target = new Date(siteConfig.targetDateISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: String(timeLeft.days).padStart(2, "0"), color: "#E8FF4F" },
    { label: "HOURS", value: String(timeLeft.hours).padStart(2, "0"), color: "#FF4FA3" },
    { label: "MINUTES", value: String(timeLeft.minutes).padStart(2, "0"), color: "#D92BFF" },
    { label: "SECONDS", value: String(timeLeft.seconds).padStart(2, "0"), color: "#FF7448" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gta-night py-20 border-y border-gta-magenta/25">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 gta-scanlines opacity-25" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gta-yellow/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded bg-gta-yellow/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
          <Clock className="h-3.5 w-3.5 animate-pulse" />
          <span>MISSION DEPLOYMENT COUNTDOWN</span>
        </div>

        <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-gta-white">
          AITHRA BEGINS IN
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-gta-white/60 font-sans">
          Target Date: 30 OCTOBER 2026 • 09:00 AM IST • Amal Jyothi College of Engineering
        </p>

        {/* 4 Digit Modules */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {timeUnits.map((u) => (
            <div
              key={u.label}
              className="relative overflow-hidden rounded-xl border border-gta-magenta/40 bg-gta-surface/90 p-5 backdrop-blur-xl shadow-xl hud-corner"
            >
              <div
                className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                style={{
                  color: u.color,
                  textShadow: `0 0 20px ${u.color}80`,
                }}
              >
                {u.value}
              </div>

              <div className="mt-2 font-display text-xs sm:text-sm uppercase tracking-widest text-gta-white/70">
                {u.label}
              </div>

              {/* Sub-bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: `${u.color}80` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
