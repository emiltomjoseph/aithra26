"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Film } from "lucide-react";
import { clsx } from "clsx";

interface HeroVideoBackgroundProps {
  scrollProgress?: number;
}

export default function HeroVideoBackground({ scrollProgress = 0 }: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState<"sports_car" | "night_drive">("sports_car");

  const videoSources = {
    sports_car: "https://res.cloudinary.com/demo/video/upload/f_auto,q_auto/blue_sports_car.mp4",
    night_drive: "https://res.cloudinary.com/demo/video/upload/blue_sports_car.mp4",
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: ensure muted and retry
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, [activeVideo]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black select-none">
      {/* Real-World Cinematic Video Stream */}
      <video
        ref={videoRef}
        key={activeVideo}
        src={videoSources[activeVideo]}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${1 + scrollProgress * 0.15})`,
          filter: "contrast(1.15) brightness(0.85) saturate(1.1)",
        }}
      />

      {/* Cinematic Vice City / Dusk Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050308] via-transparent to-[#050308]/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050308]/70 via-transparent to-[#050308]/70" />

      {/* Subtle Perforated Mesh & Film Grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 film-grain opacity-40" />

      {/* Floating Audio & Playback Controls in Bottom Right */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest text-luxury-muted hover:text-white hover:border-cyan-400 transition-colors"
          title={isMuted ? "Unmute Engine Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="h-3.5 w-3.5 text-luxury-amber" /> : <Volume2 className="h-3.5 w-3.5 text-cyan-400" />}
          <span className="hidden sm:inline">{isMuted ? "SOUND: OFF" : "SOUND: ON"}</span>
        </button>

        <button
          onClick={togglePlay}
          className="flex items-center justify-center h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-luxury-muted hover:text-white hover:border-cyan-400 transition-colors"
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3 text-cyan-400" />}
        </button>
      </div>

      {/* Live Video Indicator Badge (Top Left Corner of Background) */}
      <div className="absolute top-24 left-6 sm:left-12 z-20 hidden md:flex items-center gap-2 text-[9px] font-mono tracking-widest text-cyan-400 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-cyan-500/20">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
        </span>
        <span>REAL-WORLD 4K AUTOMOTIVE FEED</span>
      </div>
    </div>
  );
}
