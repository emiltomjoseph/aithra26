"use client";

import { useState } from "react";
import { sound } from "@/lib/audio";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(!sound.getMutedState());

  const handleToggle = () => {
    const active = sound.toggleMute();
    setIsPlaying(active);
  };

  return (
    <button
      onClick={handleToggle}
      className="interactive group relative flex items-center gap-2 rounded-full border border-gta-magenta/40 bg-gta-surface/80 px-3 py-1.5 backdrop-blur-md transition-all duration-300 hover:border-gta-yellow hover:bg-gta-surface hover:shadow-neonYellow"
      title={isPlaying ? "Mute Atmospheric Sound" : "Enable City Soundscape & SFX"}
      aria-label="Toggle Audio"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3.5 w-3.5">
            <span className="w-0.5 bg-gta-yellow animate-[pulseGlow_0.8s_ease-in-out_infinite] h-full" />
            <span className="w-0.5 bg-gta-magenta animate-[pulseGlow_1.1s_ease-in-out_infinite] h-2/3" />
            <span className="w-0.5 bg-gta-pink animate-[pulseGlow_0.6s_ease-in-out_infinite] h-4/5" />
          </div>
          <span className="text-[11px] font-display uppercase tracking-wider text-gta-yellow hidden sm:inline">
            AUDIO ON
          </span>
        </>
      ) : (
        <>
          <VolumeX className="h-3.5 w-3.5 text-gta-white/60 transition-colors group-hover:text-gta-yellow" />
          <span className="text-[11px] font-display uppercase tracking-wider text-gta-white/60 group-hover:text-gta-yellow hidden sm:inline">
            SOUND OFF
          </span>
        </>
      )}
    </button>
  );
}
