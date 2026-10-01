"use client";

import Link from "next/link";
import Image from "next/image";
import { MissionEvent } from "@/data/events";
import { sound } from "@/lib/audio";
import { Calendar, Clock, MapPin, Users, Award, ShieldAlert, ChevronRight } from "lucide-react";

interface MissionCardProps {
  mission: MissionEvent;
  onAcceptMission: (mission: MissionEvent) => void;
}

export default function MissionCard({ mission, onAcceptMission }: MissionCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gta-magenta/30 bg-gta-night/90 backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:shadow-neonYellow hud-corner">
      {/* Top Image & Header */}
      <div>
        <div className="relative h-44 w-full overflow-hidden bg-gta-surface">
          <Image
            src={mission.image}
            alt={mission.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gta-night via-gta-night/50 to-transparent" />

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="rounded bg-gta-night/85 px-2.5 py-0.5 font-display text-xs uppercase tracking-wider text-gta-yellow border border-gta-yellow/30">
              {mission.missionNumber}
            </span>
            <span className="rounded bg-gta-magenta/80 px-2 py-0.5 font-display text-[10px] uppercase tracking-wider text-gta-white">
              {mission.category.toUpperCase()}
            </span>
          </div>

          {/* Status Badge */}
          {mission.status === "filling-fast" && (
            <div className="absolute top-3 right-3 flex items-center gap-1 rounded bg-gta-pink/90 px-2 py-0.5 font-display text-[10px] uppercase tracking-wider text-gta-white animate-pulse">
              <ShieldAlert className="h-3 w-3" />
              <span>FILLING FAST</span>
            </div>
          )}

          {/* Prize Bounty Floating Badge */}
          <div className="absolute bottom-2 right-3 flex items-center gap-1 rounded-md bg-gta-night/90 px-2.5 py-1 border border-gta-yellow/40 backdrop-blur-md">
            <Award className="h-3.5 w-3.5 text-gta-yellow" />
            <span className="font-display text-xs text-gta-yellow font-bold">
              BOUNTY: {mission.prizePool}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5">
          <div className="text-[11px] font-mono uppercase tracking-wider text-gta-white/50">
            {mission.department}
          </div>

          <h3 className="mt-1 font-display text-xl sm:text-2xl uppercase tracking-wide text-gta-white transition-colors group-hover:text-gta-yellow line-clamp-1">
            {mission.title}
          </h3>

          <p className="mt-2 text-xs text-gta-white/70 line-clamp-2 font-sans leading-relaxed">
            {mission.description}
          </p>

          {/* Mission Intel Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-gta-white/10 pt-3 text-[11px] text-gta-white/70">
            <div className="flex items-center gap-1.5 truncate">
              <Calendar className="h-3.5 w-3.5 text-gta-pink shrink-0" />
              <span className="truncate">{mission.date}</span>
            </div>

            <div className="flex items-center gap-1.5 truncate">
              <Clock className="h-3.5 w-3.5 text-gta-yellow shrink-0" />
              <span className="truncate">{mission.time}</span>
            </div>

            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="h-3.5 w-3.5 text-gta-magenta shrink-0" />
              <span className="truncate">{mission.venue}</span>
            </div>

            <div className="flex items-center gap-1.5 truncate">
              <Users className="h-3.5 w-3.5 text-gta-yellow shrink-0" />
              <span className="truncate">{mission.teamSize}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="flex items-center gap-2 border-t border-gta-white/10 bg-gta-surface/50 p-4">
        <Link
          href={`/missions/${mission.slug}`}
          onClick={() => sound.playClick()}
          onMouseEnter={() => sound.playHover()}
          className="interactive flex-1 rounded border border-gta-white/15 bg-white/5 py-2 text-center font-display text-xs uppercase tracking-wider text-gta-white transition-colors hover:border-gta-yellow hover:text-gta-yellow"
        >
          VIEW BRIEFING
        </Link>

        <button
          onClick={() => {
            sound.playClick();
            onAcceptMission(mission);
          }}
          onMouseEnter={() => sound.playHover()}
          className="interactive flex-1 rounded bg-gta-yellow py-2 text-center font-display text-xs font-bold uppercase tracking-wider text-gta-night transition-all hover:bg-gta-yellow/90 hover:shadow-neonYellow"
        >
          ACCEPT MISSION
        </button>
      </div>
    </div>
  );
}
