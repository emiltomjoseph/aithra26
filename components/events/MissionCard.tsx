"use client";

import Link from "next/link";
import Image from "next/image";
import { MissionEvent } from "@/data/events";
import { ArrowUpRight } from "lucide-react";

interface MissionCardProps {
  mission: MissionEvent;
  onAcceptMission: (mission: MissionEvent) => void;
}

export default function MissionCard({ mission, onAcceptMission }: MissionCardProps) {
  return (
    <div className="group relative flex flex-col justify-between border-t border-white/10 pt-6 pb-8 transition-colors hover:border-white/30">
      <div>
        {/* Top Header: Department & Serial Number */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-luxury-muted uppercase mb-4">
          <span className="truncate max-w-[200px] text-luxury-amber">
            {mission.department}
          </span>
          <span className="text-luxury-dim">
            {mission.missionNumber.replace("MISSION", "EVENT")}
          </span>
        </div>

        {/* Cinematic Photography Frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-luxury-carbon mb-5 rounded-sm">
          <Image
            src={mission.image}
            alt={mission.title}
            fill
            className="object-cover grayscale contrast-110 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian/80 via-transparent to-transparent opacity-40" />

          {/* Minimal Bounty Badge */}
          <div className="absolute bottom-3 left-3 bg-luxury-obsidian/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono tracking-wider text-luxury-white border border-white/10">
            BOUNTY: {mission.prizePool}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl uppercase tracking-wider text-luxury-white transition-colors group-hover:text-luxury-amber">
          {mission.title}
        </h3>

        {/* Concise Description */}
        <p className="mt-2 text-xs text-luxury-muted font-sans font-light leading-relaxed line-clamp-2">
          {mission.description}
        </p>

        {/* Metadata Line */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-luxury-dim border-t border-white/5 pt-3">
          <span>{mission.date}</span>
          <span>•</span>
          <span>{mission.time}</span>
          <span>•</span>
          <span className="truncate max-w-[150px]">{mission.venue}</span>
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <Link
          href={`/missions/${mission.slug}`}
          className="inline-flex items-center gap-1 font-display text-xs uppercase tracking-widest text-luxury-muted hover:text-luxury-white transition-colors"
        >
          <span>DOSSIER</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          onClick={() => onAcceptMission(mission)}
          className="font-display text-xs uppercase tracking-widest text-luxury-amber hover:text-luxury-white transition-colors"
        >
          REGISTER →
        </button>
      </div>
    </div>
  );
}
