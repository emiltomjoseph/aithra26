"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MissionEvent } from "@/data/events";
import RegistrationModal from "@/components/ui/RegistrationModal";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import { sound } from "@/lib/audio";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  DollarSign,
  ShieldCheck,
  CheckCircle,
  Phone,
  Share2,
  ExternalLink,
} from "lucide-react";

interface MissionDetailClientProps {
  mission: MissionEvent;
}

export default function MissionDetailClient({ mission }: MissionDetailClientProps) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    sound.playClick();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gta-night text-gta-white">
      {/* Top Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content Body */}
      <main className="relative pt-28 pb-24">
        {/* Subtle Cyber Grid & Scanline */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-30" />
        <div className="pointer-events-none absolute inset-0 gta-scanlines opacity-20" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center justify-between border-b border-gta-white/10 pb-4">
            <Link
              href="/#missions"
              onClick={() => sound.playClick()}
              className="interactive inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-gta-white/70 hover:text-gta-yellow transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>RETURN TO MISSION SELECTOR</span>
            </Link>

            <button
              onClick={handleShare}
              className="interactive inline-flex items-center gap-1.5 rounded border border-gta-white/15 px-3 py-1 font-display text-xs uppercase tracking-wider text-gta-white/80 hover:border-gta-yellow hover:text-gta-yellow"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>{isCopied ? "LINK COPIED" : "SHARE DOSSIER"}</span>
            </button>
          </div>

          {/* Mission Classified Dossier Card */}
          <div className="overflow-hidden rounded-2xl border-2 border-gta-magenta/40 bg-gta-surface/95 shadow-2xl hud-corner-lg">
            {/* Mission Hero Banner */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-gta-night">
              <Image
                src={mission.image}
                alt={mission.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gta-surface via-gta-surface/60 to-transparent" />

              {/* Classified Watermark Stamp */}
              <div className="pointer-events-none absolute top-6 right-6 rotate-12 rounded border-2 border-gta-yellow/50 bg-gta-night/60 px-4 py-1.5 font-display text-xl sm:text-2xl uppercase tracking-widest text-gta-yellow/70">
                OFFICIAL BRIEFING
              </div>

              {/* Title & Category In Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded bg-gta-yellow px-2.5 py-1 font-display text-xs uppercase font-bold text-gta-night">
                    {mission.missionNumber}
                  </span>
                  <span className="rounded bg-gta-magenta/80 px-2.5 py-1 font-display text-xs uppercase text-gta-white">
                    {mission.category.toUpperCase()} // {mission.subCategory.toUpperCase()}
                  </span>
                  <span className="rounded bg-gta-night/80 px-2.5 py-1 font-mono text-xs uppercase text-gta-white/80 border border-gta-white/10">
                    {mission.department}
                  </span>
                </div>

                <h1 className="mt-3 font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-gta-white">
                  {mission.title}
                </h1>
              </div>
            </div>

            {/* Dossier Content Grid */}
            <div className="p-6 sm:p-10 space-y-10">
              {/* Tactical Parameters Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl border border-gta-white/10 bg-gta-night/80 p-4">
                <div>
                  <span className="font-mono text-[10px] uppercase text-gta-white/40">MISSION DATE</span>
                  <div className="mt-1 flex items-center gap-1.5 font-display text-base text-gta-yellow">
                    <Calendar className="h-4 w-4" />
                    <span>{mission.date}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-gta-white/40">DEPLOYMENT TIME</span>
                  <div className="mt-1 flex items-center gap-1.5 font-display text-base text-gta-pink">
                    <Clock className="h-4 w-4" />
                    <span>{mission.time}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-gta-white/40">ZONE / VENUE</span>
                  <div className="mt-1 flex items-center gap-1.5 font-display text-base text-gta-white">
                    <MapPin className="h-4 w-4 text-gta-magenta shrink-0" />
                    <span className="truncate">{mission.venue}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase text-gta-white/40">SQUAD FORMATION</span>
                  <div className="mt-1 flex items-center gap-1.5 font-display text-base text-gta-yellow">
                    <Users className="h-4 w-4" />
                    <span>{mission.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Mission Intel & Description */}
              <div>
                <h3 className="font-display text-xl uppercase tracking-wider text-gta-yellow border-b border-gta-white/10 pb-2">
                  MISSION BRIEFING // OBJECTIVE
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gta-white/80 font-sans leading-relaxed">
                  {mission.description}
                </p>
                <p className="mt-2 text-sm text-gta-white/70 font-sans leading-relaxed">
                  This engagement is officially sanctioned as part of AITHRA 2026 at Amal Jyothi College of Engineering, Kanjirappally. Participants will be scored on technical execution, tactical speed, strategy, and engineering precision.
                </p>
              </div>

              {/* Rules of Engagement */}
              <div>
                <h3 className="font-display text-xl uppercase tracking-wider text-gta-pink border-b border-gta-white/10 pb-2">
                  RULES OF ENGAGEMENT
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {mission.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gta-white/80 font-sans">
                      <CheckCircle className="h-4 w-4 text-gta-yellow shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bounty & Entry Requirements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-xl border border-gta-magenta/30 bg-gta-night/90 p-6">
                <div>
                  <span className="font-mono text-xs uppercase text-gta-white/50">MISSION BOUNTY (PRIZE POOL)</span>
                  <div className="mt-1 font-display text-4xl font-bold text-gta-yellow text-glow-yellow">
                    {mission.prizePool}
                  </div>
                  <p className="mt-1 text-xs text-gta-white/60">
                    Awarded on the Main Stage during grand closing ceremony.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase text-gta-white/50">ENTRY ADMISSION FEE</span>
                  <div className="mt-1 font-display text-4xl font-bold text-gta-pink text-glow-pink">
                    {mission.entryFee}
                  </div>
                  <p className="mt-1 text-xs text-gta-white/60">
                    Includes official digital credentials and participation certificates.
                  </p>
                </div>
              </div>

              {/* Handlers & Communications */}
              <div>
                <h3 className="font-display text-xl uppercase tracking-wider text-gta-white border-b border-gta-white/10 pb-2">
                  TACTICAL MISSION HANDLERS
                </h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mission.coordinators.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border border-gta-white/10 bg-gta-night/60 p-3.5"
                    >
                      <div>
                        <div className="font-display text-base uppercase text-gta-white">{c.name}</div>
                        <div className="text-xs font-mono text-gta-yellow">{c.phone}</div>
                      </div>
                      <a
                        href={`tel:${c.phone}`}
                        onClick={() => sound.playClick()}
                        className="interactive rounded-lg bg-gta-surface p-2 text-gta-yellow hover:bg-gta-yellow hover:text-gta-night transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gta-white/10">
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsRegisterOpen(true);
                  }}
                  className="interactive w-full sm:flex-1 rounded-lg bg-gta-yellow py-4 font-display text-xl font-bold uppercase tracking-wider text-gta-night shadow-neonYellow hover:bg-gta-yellow/90 transition-all"
                >
                  ACCEPT MISSION / REGISTER NOW
                </button>

                {mission.registrationUrl && (
                  <a
                    href={mission.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => sound.playClick()}
                    className="interactive flex items-center justify-center gap-2 rounded-lg border border-gta-magenta/60 bg-gta-surface px-6 py-4 font-display text-base uppercase tracking-wider text-gta-white hover:border-gta-yellow hover:text-gta-yellow transition-colors"
                  >
                    <span>AJCE PORTAL DIRECT</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultMissionTitle={mission.title}
        defaultMissionCode={mission.registrationCode}
      />
    </div>
  );
}
