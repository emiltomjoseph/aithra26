"use client";

import Link from "next/link";
import Image from "next/image";
import { MissionEvent } from "@/data/events";
import ShiftCard from "@/components/ui/ShiftCard";
import MetalButton from "@/components/ui/MetalButton";
import { ArrowUpRight, Zap, Trophy, Calendar, MapPin } from "lucide-react";

interface MissionCardProps {
  mission: MissionEvent;
  onAcceptMission: (mission: MissionEvent) => void;
}

export default function MissionCard({ mission, onAcceptMission }: MissionCardProps) {
  return (
    <ShiftCard chamfer className="p-6 flex flex-col justify-between h-full">
      <div>
        {/* Top Header: Department & Event Code */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-luxury-muted uppercase mb-4">
          <span className="truncate max-w-[210px] text-luxury-amber font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-luxury-amber animate-pulse" />
            {mission.department}
          </span>
          <span className="text-luxury-dim font-mono text-[10px] border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">
            {mission.missionNumber.replace("MISSION", "EVT")}
          </span>
        </div>

        {/* Cinematic Photography Frame with Chamfer Cutout */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-luxury-carbon mb-5 rounded-md border border-white/10 group-hover:border-white/20 transition-colors">
          <Image
            src={mission.image}
            alt={mission.title}
            fill
            className="object-cover grayscale contrast-115 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0710] via-transparent to-transparent opacity-60" />

          {/* Cult UI Style Bounty Pill */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#08050E]/85 backdrop-blur-md px-3 py-1 text-[10px] font-mono tracking-wider text-luxury-white border border-white/15 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            <Trophy className="h-3 w-3 text-luxury-amber" />
            <span>BOUNTY: {mission.prizePool}</span>
          </div>

          {/* Registration Code Badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-mono text-luxury-dim border border-white/10 rounded">
            AJCE//{mission.registrationCode.toUpperCase()}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl uppercase tracking-wider text-luxury-white transition-colors duration-200 group-hover:text-luxury-amber">
          {mission.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs text-luxury-muted font-sans font-light leading-relaxed line-clamp-2">
          {mission.description}
        </p>

        {/* Metadata Line */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-mono text-luxury-dim border-t border-white/10 pt-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-luxury-muted" />
            {mission.date}
          </span>
          <span>•</span>
          <span>{mission.time}</span>
          <span>•</span>
          <span className="truncate max-w-[130px] flex items-center gap-1">
            <MapPin className="h-3 w-3 text-luxury-muted" />
            {mission.venue}
          </span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <Link
          href={`/missions/${mission.slug}`}
          className="inline-flex items-center gap-1.5 font-display text-xs uppercase tracking-widest text-luxury-muted hover:text-luxury-white transition-colors py-1"
        >
          <span>DOSSIER</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <MetalButton
          variant="amber"
          size="sm"
          onClick={() => onAcceptMission(mission)}
          className="text-[11px]"
        >
          <span>REGISTER</span>
          <Zap className="h-3 w-3" />
        </MetalButton>
      </div>
    </ShiftCard>
  );
}
