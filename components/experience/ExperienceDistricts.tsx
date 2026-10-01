"use client";

import Image from "next/image";
import ShiftCard from "@/components/ui/ShiftCard";
import MetalButton from "@/components/ui/MetalButton";
import { ArrowRight, Code, BookOpen, Trophy, Sparkles } from "lucide-react";

interface ExperienceDistrictsProps {
  onOpenRegister: () => void;
}

export default function ExperienceDistricts({ onOpenRegister }: ExperienceDistrictsProps) {
  const handleScrollToEvents = () => {
    const elem = document.querySelector("#events");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-4">
          <span className="text-luxury-amber">04 // HIGHLIGHTS</span>
          <div className="h-px w-12 bg-white/20" />
          <span>FEATURED EXPERIENCES</span>
        </div>

        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-cinematic text-luxury-white">
          THE FESTIVAL ARENAS
        </h2>

        {/* 2 Full-Width Cult UI ShiftCard Feature Spreads */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Spread 1: The 36-Hour Hackathon */}
          <ShiftCard chamfer className="p-0 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                  alt="Hackathon Arena"
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0710] via-black/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-luxury-amber border border-white/15">
                  <Code className="h-3 w-3" />
                  <span>36 HOURS NON-STOP</span>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber block mb-2">
                  FLAGSHIP COMPETITION // 36 HOURS
                </span>

                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-luxury-white">
                  THE HACKATHON
                </h3>

                <p className="mt-2 font-display text-lg uppercase tracking-widest text-luxury-muted">
                  BUILD. BREAK. REBUILD.
                </p>

                <p className="mt-4 text-xs sm:text-sm text-luxury-muted font-sans font-light leading-relaxed max-w-lg">
                  Assemble your squad for 36 continuous hours of intense software engineering, rapid algorithmic prototyping, and system design in the Central Computing Labs.
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-4 flex items-center justify-between border-t border-white/10">
              <span className="font-mono text-xs text-luxury-dim flex items-center gap-1.5">
                <Trophy className="h-3.5 w-3.5 text-luxury-amber" />
                BOUNTY: ₹1,50,000+
              </span>

              <MetalButton
                variant="amber"
                size="sm"
                onClick={handleScrollToEvents}
              >
                <span>VIEW BRIEFING</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </MetalButton>
            </div>
          </ShiftCard>

          {/* Spread 2: Engineering Masterclasses */}
          <ShiftCard chamfer className="p-0 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Engineering Masterclasses"
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0710] via-black/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-luxury-violet border border-white/15">
                  <Sparkles className="h-3 w-3" />
                  <span>HANDS-ON WORKSHOPS</span>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber block mb-2">
                  TECHNICAL INTEL // CERTIFIED
                </span>

                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-luxury-white">
                  MASTERCLASSES
                </h3>

                <p className="mt-2 font-display text-lg uppercase tracking-widest text-luxury-muted">
                  LEARN FROM THE BEST.
                </p>

                <p className="mt-4 text-xs sm:text-sm text-luxury-muted font-sans font-light leading-relaxed max-w-lg">
                  High-level masterclasses covering generative artificial intelligence, high-voltage powertrain systems, autonomous robotics, and modern digital interfaces.
                </p>
              </div>
            </div>

            <div className="px-8 pb-8 sm:px-10 sm:pb-10 pt-4 flex items-center justify-between border-t border-white/10">
              <span className="font-mono text-xs text-luxury-dim flex items-center gap-1.5">
                <BookOpen className="h-3.5 w-3.5 text-luxury-violet" />
                CERTIFIED WORKSHOPS
              </span>

              <MetalButton
                variant="titanium"
                size="sm"
                onClick={handleScrollToEvents}
              >
                <span>VIEW WORKSHOPS</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </MetalButton>
            </div>
          </ShiftCard>
        </div>
      </div>
    </section>
  );
}
