"use client";

import Image from "next/image";
import { siteConfig } from "@/data/site";
import { sound } from "@/lib/audio";
import { Shield, Sparkles, Trophy, Users, Terminal } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-gta-night py-24 sm:py-32 cyber-grid">
      {/* Background Lighting Blobs */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-96 w-96 rounded-full bg-gta-electric/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-gta-pink/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded bg-gta-magenta/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
            <Terminal className="h-3.5 w-3.5" />
            <span>DISTRICT 01 // OVERVIEW BRIEFING</span>
          </div>

          <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-gta-white">
            WELCOME TO <span className="text-gta-yellow text-glow-yellow">AITHRA</span>
          </h2>

          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-gta-yellow to-gta-pink" />
        </div>

        {/* 2-Column Story / District Overview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text / Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-xl border border-gta-magenta/30 bg-gta-surface/70 p-6 sm:p-8 backdrop-blur-xl hud-corner">
              <p className="font-display text-xl sm:text-2xl uppercase tracking-wide text-gta-yellow leading-snug">
                &ldquo;Where technology meets imagination, powered by the AJCE Students&apos; Council.&rdquo;
              </p>

              <p className="mt-4 text-base sm:text-lg text-gta-white/80 leading-relaxed font-sans">
                {siteConfig.description}
              </p>

              <p className="mt-4 text-sm sm:text-base text-gta-white/70 leading-relaxed font-sans">
                {siteConfig.aboutText}
              </p>

              {/* 3 Pillar Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gta-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <div className="rounded bg-gta-electric/30 p-2 text-gta-yellow">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base uppercase text-gta-white">INNOVATION</h4>
                    <p className="text-xs text-gta-white/60">Pushing hardware & software frontiers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded bg-gta-pink/20 p-2 text-gta-pink">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base uppercase text-gta-white">COMPETITION</h4>
                    <p className="text-xs text-gta-white/60">High-stakes ₹6L+ bounty pools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded bg-gta-magenta/20 p-2 text-gta-magenta">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-base uppercase text-gta-white">COMMUNITY</h4>
                    <p className="text-xs text-gta-white/60">Over 500+ elite engineers & squads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / City Portal Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl border-2 border-gta-magenta/40 bg-gta-surface shadow-2xl shadow-gta-electric/30 hud-corner-lg group">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80"
                  alt="AITHRA City Atmosphere"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gta-night via-gta-night/40 to-transparent" />
                
                {/* Official AJCE Logo Badge */}
                <div className="absolute top-4 left-4 rounded-lg bg-gta-night/80 p-2 border border-gta-white/10 backdrop-blur-md">
                  <Image
                    src="/brand/ajcelogo.png"
                    alt="Amal Jyothi Logo"
                    width={90}
                    height={30}
                    className="h-7 w-auto object-contain"
                  />
                </div>

                {/* Tactical HUD Overlay Box */}
                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-gta-yellow/30 bg-gta-night/90 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-xs uppercase tracking-widest text-gta-yellow">
                        OPERATIONAL SECTOR
                      </span>
                      <h4 className="font-display text-lg uppercase text-gta-white">
                        AMAL JYOTHI CAMPUS, KANJIRAPPALLY
                      </h4>
                    </div>
                    <span className="rounded bg-gta-yellow/20 px-2 py-1 font-mono text-xs text-gta-yellow font-bold">
                      OCT 30-31
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
