"use client";

import Image from "next/image";
import { sound } from "@/lib/audio";
import { Code, Flame, Cpu, Gamepad2, Users, ArrowRight, Laptop, Sparkles } from "lucide-react";

interface ExperienceDistrictsProps {
  onOpenRegister: () => void;
}

export default function ExperienceDistricts({ onOpenRegister }: ExperienceDistrictsProps) {
  const handleScrollToMissions = () => {
    sound.playClick();
    const elem = document.querySelector("#missions");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const districts = [
    {
      id: "tech",
      name: "TECH DISTRICT",
      tagline: "CODE. ARCHITECT. DOMINATE.",
      icon: Code,
      color: "#D92BFF",
      description: "Cutting-edge artificial intelligence, blockchain, algorithms, algorithmic heists, and high-performance system design.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "compete",
      name: "COMPETE DISTRICT",
      tagline: "HIGH STAKES. REAL BOUNTIES.",
      icon: Flame,
      color: "#FF7448",
      description: "Intense head-to-head engineering challenges, robotics combat arenas, rapid-fire CAD battles, and ₹6,00,000+ in bounties.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "create",
      name: "CREATE DISTRICT",
      tagline: "PROTOTYPES TO REALITY.",
      icon: Cpu,
      color: "#FF4FA3",
      description: "Hands-on maker labs, IoT installations, 3D printing showcases, and interactive technical exhibitions.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "play",
      name: "PLAY DISTRICT",
      tagline: "ESPORTS & ENTERTAINMENT.",
      icon: Gamepad2,
      color: "#E8FF4F",
      description: "Competitive multiplayer tournaments, retro arcade setups, virtual reality arenas, and energetic campus fun zones.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "connect",
      name: "CONNECT DISTRICT",
      tagline: "SQUADS & NETWORKING.",
      icon: Users,
      color: "#7A20C8",
      description: "Connect with thousands of aspiring tech pioneers, industry mentors, alumni innovators, and dynamic student chapters.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="districts" className="relative w-full overflow-hidden bg-gta-night py-24 sm:py-32">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute top-10 left-1/3 h-96 w-96 rounded-full bg-gta-pink/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start border-b border-gta-magenta/20 pb-8">
          <div className="inline-flex items-center gap-2 rounded bg-gta-pink/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-pink">
            <Sparkles className="h-3.5 w-3.5" />
            <span>FESTIVAL ZONES // THE EXPEDITION</span>
          </div>

          <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-gta-white">
            EXPERIENCE <span className="text-gta-yellow text-glow-yellow">AITHRA</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gta-white/70 font-sans max-w-2xl">
            Immerse yourself across five dedicated festival sectors designed for engineers, coders, gamers, and visionary builders.
          </p>
        </div>

        {/* 2 Flagship Mega Feature Blocks: Hackathon & Workshop */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Feature 1: Hackathon District */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gta-magenta/40 bg-gta-surface p-8 shadow-2xl transition-all duration-300 hover:border-gta-yellow hover:shadow-neonYellow hud-corner-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
                alt="Hackathon District"
                fill
                className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gta-surface via-gta-surface/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <span className="rounded bg-gta-magenta/30 px-3 py-1 font-display text-xs uppercase tracking-wider text-gta-magenta border border-gta-magenta/40">
                  FLAGSHIP 36-HOUR SPRINT
                </span>
                <h3 className="mt-4 font-display text-4xl sm:text-5xl uppercase tracking-tight text-gta-white">
                  HACKATHON DISTRICT
                </h3>
                <p className="mt-2 font-display text-lg uppercase tracking-wider text-gta-yellow">
                  BUILD. BREAK. REBUILD.
                </p>
                <p className="mt-3 text-sm text-gta-white/75 font-sans leading-relaxed max-w-md">
                  Assemble your squad for 36 hours of non-stop adrenaline, rapid prototyping, and high-impact software deployment in the Cyber Complex.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={handleScrollToMissions}
                  className="interactive flex items-center gap-2 rounded bg-gta-yellow px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-gta-night transition-all hover:bg-gta-yellow/90 hover:shadow-neonYellow"
                >
                  <span>EXPLORE HACKS</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="font-mono text-xs text-gta-white/60">₹1,50,000+ BOUNTY</span>
              </div>
            </div>
          </div>

          {/* Feature 2: Workshop District */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-gta-pink/40 bg-gta-surface p-8 shadow-2xl transition-all duration-300 hover:border-gta-pink hover:shadow-neonPink hud-corner-lg">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="Workshop District"
                fill
                className="object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gta-surface via-gta-surface/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px]">
              <div>
                <span className="rounded bg-gta-pink/30 px-3 py-1 font-display text-xs uppercase tracking-wider text-gta-pink border border-gta-pink/40">
                  TECHNICAL MASTERCLASSES
                </span>
                <h3 className="mt-4 font-display text-4xl sm:text-5xl uppercase tracking-tight text-gta-white">
                  WORKSHOP DISTRICT
                </h3>
                <p className="mt-2 font-display text-lg uppercase tracking-wider text-gta-pink">
                  LEARN FROM THE BEST.
                </p>
                <p className="mt-3 text-sm text-gta-white/75 font-sans leading-relaxed max-w-md">
                  Hands-on masterclasses covering generative AI, autonomous robotics, electric vehicle powertrains, and modern UI/UX design.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={handleScrollToMissions}
                  className="interactive flex items-center gap-2 rounded bg-gta-pink px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-gta-night transition-all hover:bg-gta-pink/90 hover:shadow-neonPink"
                >
                  <span>EXPLORE WORKSHOPS</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="font-mono text-xs text-gta-white/60">CERTIFIED CREDITS</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Experience District Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {districts.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.id}
                className="group relative overflow-hidden rounded-xl border border-gta-magenta/25 bg-gta-surface/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:-translate-y-1.5 hover:shadow-neonYellow hud-corner"
              >
                <div
                  className="mb-4 inline-flex rounded-lg p-2.5"
                  style={{ backgroundColor: `${d.color}20`, color: d.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="font-display text-xl uppercase tracking-wide text-gta-white">
                  {d.name}
                </h4>

                <p
                  className="mt-1 font-display text-xs uppercase tracking-wider"
                  style={{ color: d.color }}
                >
                  {d.tagline}
                </p>

                <p className="mt-3 text-xs text-gta-white/70 font-sans leading-relaxed">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
