"use client";

import Image from "next/image";
import ShiftCard from "@/components/ui/ShiftCard";
import { Award, ShieldCheck, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-luxury-obsidian border-t border-white/10 overflow-hidden">
      {/* Reference Image 1 & 3: Diagonal Halftone Cloud / Line Graphic Header Transition */}
      <div className="relative w-full py-16 flex flex-col items-center justify-center border-b border-white/5 bg-gradient-to-b from-[#0A0710] to-luxury-obsidian">
        {/* Halftone Line Patterns */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-25"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 8px)",
          }}
        />

        <div className="relative z-10 text-center">
          {/* Official Emblem */}
          <div className="relative inline-block mb-3">
            <Image
              src="/brand/aithra white.png"
              alt="AITHRA 2026"
              width={140}
              height={40}
              className="h-9 w-auto object-contain mx-auto"
            />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-widest text-luxury-white">
            AITHRA 2026
          </h2>

          <p className="mt-2 font-mono text-xs uppercase tracking-extreme text-cyan-400 font-semibold">
            30 & 31 OCTOBER 2026
          </p>
        </div>
      </div>

      {/* Reference Image 3: Editorial Narrative & Blueprint Wireframe Showcase */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs uppercase tracking-extreme text-luxury-amber flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              <span>POWERED BY AMAL JYOTHI COLLEGE OF ENGINEERING, KANJIRAPPALLY</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-luxury-white leading-snug">
              THE NATIONAL-LEVEL TECHFEST OF CENTRAL KERALA
            </h3>

            <p className="text-sm sm:text-base font-sans text-luxury-muted font-light leading-relaxed">
              AITHRA, the apex national-level technology festival of Amal Jyothi College of Engineering, stands as an enduring symbol of innovation, velocity, and engineering mastery. Since its inception, AITHRA has provided a dynamic proving ground where students, coders, roboticists, and automotive enthusiasts from across India assemble to ideate, compete, and showcase cutting-edge breakthroughs.
            </p>

            <p className="text-sm sm:text-base font-sans text-luxury-muted font-light leading-relaxed">
              Over two adrenaline-fueled days on 30 and 31 October 2026, the 65-acre campus transforms into a state-of-the-art technological circuit hosting 74 sanctioned competitions, ₹6,00,000+ in bounties, continuous 36-hour hackathons, and certified engineering workshops.
            </p>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-6 font-mono text-xs text-luxury-muted">
              <div>
                <span className="text-luxury-dim block mb-1">GOVERNING BODY</span>
                <span className="text-luxury-white font-medium">AJCE Students&apos; Council</span>
              </div>
              <div>
                <span className="text-luxury-dim block mb-1">ACCIDENTAL STATUS</span>
                <span className="text-cyan-400 font-medium">Autonomous Campus</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Blueprint / Wireframe Character (Reference Image 3) */}
          <div className="lg:col-span-6 relative">
            <ShiftCard chamfer className="p-2 overflow-hidden border border-white/15">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-[#07050B]">
                {/* Sacred Blueprint Tech Circles Background */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, transparent 30%, rgba(0, 240, 255, 0.15) 31%, transparent 32%), radial-gradient(circle at center, transparent 60%, rgba(255, 122, 69, 0.15) 61%, transparent 62%)",
                  }}
                />

                <Image
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                  alt="AITHRA Precision Blueprint"
                  fill
                  className="object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Technical HUD Overlay Line Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07050B] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest text-cyan-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-cyan-500/30">
                  SYSTEM // TELEMETRY PROTOTYPE
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-widest text-luxury-muted border-t border-white/10 pt-2">
                  <span>AJCE TECHFEST SPEC 2026</span>
                  <span className="text-luxury-amber">OCT 30-31</span>
                </div>
              </div>
            </ShiftCard>
          </div>
        </div>
      </div>

      {/* Reference Image 4: Campus Aerial Showcase & Milestone Stat */}
      <div className="relative w-full border-t border-white/10 bg-[#06040A] py-20 overflow-hidden">
        {/* Full Bleed Campus Aerial Photograph */}
        <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
          <ShiftCard chamfer className="p-0 overflow-hidden relative border border-white/15">
            <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full min-h-[340px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80"
                alt="Amal Jyothi College of Engineering Campus"
                fill
                className="object-cover contrast-110 brightness-90 transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

              {/* Bottom Campus Details & 25 Years Milestone (Reference Image 4) */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                {/* Left Description */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>KANJIRAPPALLY, KOTTAYAM, KERALA</span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-white">
                    AMAL JYOTHI COLLEGE OF ENGINEERING
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-luxury-muted font-sans font-light leading-relaxed">
                    St. Joseph&apos;s educational tradition meets modern technological leadership. Amal Jyothi College of Engineering, established under the Catholic Diocese of Kanjirappally, is an autonomous powerhouse rated &apos;A&apos; Grade by NAAC and NBA accredited across primary departments.
                  </p>
                </div>

                {/* Right Milestone: 25 Years of Excellence (Reference Image 4) */}
                <div className="shrink-0 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-cyan-400 pl-4 md:pl-0 md:pr-4">
                  <div className="font-display text-7xl sm:text-8xl font-bold tracking-tight text-white leading-none">
                    25
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-cyan-400 mt-1 font-semibold flex items-center md:justify-end gap-1.5">
                    <Award className="h-3.5 w-3.5" />
                    <span>Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </ShiftCard>
        </div>
      </div>
    </section>
  );
}
