"use client";

import { useState } from "react";
import { cityLocations, CityLocation } from "@/data/mapLocations";
import { sound } from "@/lib/audio";
import { MapPin, Navigation, Shield, Compass, ChevronRight, Zap } from "lucide-react";

export default function AithraCityMap() {
  const [selectedLocation, setSelectedLocation] = useState<CityLocation>(cityLocations[0]);

  const handleSelectLocation = (loc: CityLocation) => {
    sound.playRadarPing();
    setSelectedLocation(loc);
  };

  return (
    <section id="map" className="relative w-full overflow-hidden bg-gta-night py-24 sm:py-32 cyber-grid">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gta-electric/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between border-b border-gta-magenta/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-gta-yellow/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
              <Compass className="h-3.5 w-3.5" />
              <span>SATELLITE RADAR // CAMPUS GRID</span>
            </div>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-gta-white">
              AITHRA <span className="text-gta-yellow text-glow-yellow">CITY</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-gta-white/70 font-sans max-w-xl">
              Tactical map representation of Amal Jyothi College of Engineering. Navigate the operational districts, live arenas, and checkpoints.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 rounded-lg border border-gta-white/10 bg-gta-surface/70 px-4 py-2 font-mono text-xs text-gta-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gta-pink opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gta-pink" />
            </span>
            <span>RADAR SWEEP ACTIVE</span>
          </div>
        </div>

        {/* Map Layout: Interactive Vector Radar (Left) + Intel Inspector (Right) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Vector Radar Map Canvas */}
          <div className="lg:col-span-8 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border-2 border-gta-magenta/40 bg-[#0b0314] p-4 sm:p-6 shadow-2xl hud-corner-lg">
            {/* Radar Circular Sweep Line */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative h-[85%] w-[85%] rounded-full border border-gta-magenta/20">
                <div className="absolute inset-0 rounded-full border border-gta-magenta/10 scale-75" />
                <div className="absolute inset-0 rounded-full border border-gta-magenta/10 scale-50" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gta-magenta/15" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gta-magenta/15" />

                {/* Rotating radar beam */}
                <div className="absolute inset-0 animate-radarScan rounded-full bg-gradient-to-tr from-gta-yellow/15 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Stylized Campus Roads SVG */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none opacity-40"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Main Outer Highway Loop */}
              <path
                d="M 15 25 Q 50 10 85 25 Q 92 50 85 75 Q 50 90 15 75 Q 8 50 15 25 Z"
                fill="none"
                stroke="#D92BFF"
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
              {/* Internal Cross Arterials */}
              <line x1="50" y1="15" x2="50" y2="85" stroke="#7A20C8" strokeWidth="1.8" />
              <line x1="20" y1="52" x2="80" y2="52" stroke="#7A20C8" strokeWidth="1.8" />
              {/* Diagonal Avenues */}
              <line x1="30" y1="35" x2="50" y2="52" stroke="#FF4FA3" strokeWidth="1" strokeDasharray="1 1" />
              <line x1="72" y1="32" x2="50" y2="52" stroke="#FF7448" strokeWidth="1" strokeDasharray="1 1" />
              <line x1="25" y1="68" x2="50" y2="52" stroke="#E8FF4F" strokeWidth="1" strokeDasharray="1 1" />
              <line x1="75" y1="70" x2="50" y2="52" stroke="#FF4FA3" strokeWidth="1" strokeDasharray="1 1" />
            </svg>

            {/* Interactive Radar Location Pins */}
            {cityLocations.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => handleSelectLocation(loc)}
                  onMouseEnter={() => sound.playHover()}
                  style={{
                    left: `${loc.coordinates.x}%`,
                    top: `${loc.coordinates.y}%`,
                  }}
                  className={`interactive group absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
                    isSelected ? "scale-125 z-30" : "hover:scale-110"
                  }`}
                  aria-label={loc.name}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring for active location */}
                    {isSelected && (
                      <span
                        className="absolute h-10 w-10 animate-ping rounded-full opacity-60"
                        style={{ backgroundColor: loc.color }}
                      />
                    )}

                    {/* Marker icon box */}
                    <div
                      className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border shadow-lg transition-colors ${
                        isSelected
                          ? "border-gta-yellow bg-gta-yellow text-gta-night shadow-neonYellow font-bold"
                          : "border-gta-magenta/60 bg-gta-night/90 text-gta-white hover:border-gta-yellow"
                      }`}
                    >
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>

                    {/* Label Tag on Hover/Select */}
                    <div
                      className={`absolute top-10 whitespace-nowrap rounded bg-gta-night/95 px-2 py-0.5 text-[10px] font-display uppercase tracking-wider text-gta-white border border-gta-white/10 backdrop-blur-md pointer-events-none transition-opacity ${
                        isSelected ? "opacity-100 border-gta-yellow" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {loc.codename}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Corner Map HUD Legend */}
            <div className="absolute bottom-4 left-4 rounded-lg border border-gta-white/10 bg-gta-night/90 px-3 py-2 text-[10px] font-mono text-gta-white/70 backdrop-blur-md">
              <span className="text-gta-yellow font-bold">GRID CALIBRATION:</span> AJCE CAMPUS, KANJIRAPPALLY
            </div>
          </div>

          {/* Right: Selected District Intel Inspector */}
          <div className="lg:col-span-4 rounded-2xl border border-gta-magenta/40 bg-gta-surface/90 p-6 backdrop-blur-xl shadow-xl hud-corner">
            <div className="flex items-center justify-between border-b border-gta-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-gta-yellow">
                  {selectedLocation.codename}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide text-gta-white">
                  {selectedLocation.name}
                </h3>
              </div>

              <div
                className="rounded-full px-2.5 py-1 text-[10px] font-display uppercase tracking-wider"
                style={{
                  backgroundColor: `${selectedLocation.color}20`,
                  color: selectedLocation.color,
                  border: `1px solid ${selectedLocation.color}60`,
                }}
              >
                {selectedLocation.securityLevel}
              </div>
            </div>

            <div className="mt-4">
              <span className="text-xs font-mono uppercase text-gta-white/50">DISTRICT / ZONE</span>
              <p className="font-display text-base uppercase text-gta-yellow">{selectedLocation.district}</p>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gta-white/80 leading-relaxed font-sans">
              {selectedLocation.description}
            </p>

            {/* Active Operations in this sector */}
            <div className="mt-6 border-t border-gta-white/10 pt-4">
              <span className="font-display text-xs uppercase tracking-widest text-gta-white/60">
                ACTIVE SECTOR MISSIONS
              </span>

              <ul className="mt-3 space-y-2">
                {selectedLocation.activeMissions.map((op) => (
                  <li
                    key={op}
                    className="flex items-center gap-2 rounded-md bg-gta-night/60 px-3 py-2 text-xs font-sans text-gta-white/90 border border-gta-white/5"
                  >
                    <Zap className="h-3.5 w-3.5 text-gta-yellow shrink-0" />
                    <span>{op}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick List for Mobile Navigation */}
            <div className="mt-6 border-t border-gta-white/10 pt-4">
              <span className="text-[11px] font-display uppercase tracking-wider text-gta-white/50">
                SWITCH RADAR CHECKPOINT
              </span>
              <div className="mt-2 grid grid-cols-2 gap-1.5">
                {cityLocations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => handleSelectLocation(loc)}
                    className={`interactive truncate rounded px-2 py-1.5 text-left font-display text-xs uppercase transition-colors ${
                      selectedLocation.id === loc.id
                        ? "bg-gta-yellow text-gta-night font-bold"
                        : "bg-gta-night/60 text-gta-white/70 hover:bg-gta-night hover:text-gta-yellow"
                    }`}
                  >
                    {loc.codename}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
