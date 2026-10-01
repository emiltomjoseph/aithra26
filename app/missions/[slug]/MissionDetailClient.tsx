"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MissionEvent } from "@/data/events";
import RegistrationModal from "@/components/ui/RegistrationModal";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

interface MissionDetailClientProps {
  mission: MissionEvent;
}

export default function MissionDetailClient({ mission }: MissionDetailClientProps) {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-luxury-obsidian text-luxury-white">
      {/* Top Navbar */}
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />

      {/* Main Content */}
      <main className="relative pt-32 pb-24">
        <div className="relative mx-auto max-w-5xl px-6 sm:px-12">
          {/* Breadcrumb Back Link */}
          <div className="mb-8 border-b border-white/10 pb-4">
            <Link
              href="/#events"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-luxury-muted hover:text-luxury-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>RETURN TO EVENT DIRECTORY</span>
            </Link>
          </div>

          {/* Editorial Dossier Article */}
          <article className="border border-white/10 bg-luxury-carbon overflow-hidden">
            {/* High-Resolution Hero Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-luxury-obsidian">
              <Image
                src={mission.image}
                alt={mission.title}
                fill
                priority
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-carbon via-luxury-carbon/50 to-transparent" />

              {/* Title & Category In Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-luxury-amber">
                  <span>{mission.missionNumber.replace("MISSION", "EVENT")}</span>
                  <span>•</span>
                  <span>{mission.department}</span>
                  <span>•</span>
                  <span className="text-luxury-white">{mission.category.toUpperCase()}</span>
                </div>

                <h1 className="mt-3 font-display text-4xl sm:text-6xl uppercase tracking-cinematic text-luxury-white">
                  {mission.title}
                </h1>
              </div>
            </div>

            {/* Dossier Content */}
            <div className="p-8 sm:p-12 space-y-12">
              {/* Event Parameters Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-white/10 pb-8 text-xs font-mono">
                <div>
                  <span className="text-luxury-dim block mb-1">DATE</span>
                  <div className="flex items-center gap-1.5 text-luxury-white font-medium">
                    <Calendar className="h-3.5 w-3.5 text-luxury-amber" />
                    <span>{mission.date}</span>
                  </div>
                </div>

                <div>
                  <span className="text-luxury-dim block mb-1">TIME</span>
                  <div className="flex items-center gap-1.5 text-luxury-white font-medium">
                    <Clock className="h-3.5 w-3.5 text-luxury-amber" />
                    <span>{mission.time}</span>
                  </div>
                </div>

                <div>
                  <span className="text-luxury-dim block mb-1">VENUE</span>
                  <div className="flex items-center gap-1.5 text-luxury-white font-medium">
                    <MapPin className="h-3.5 w-3.5 text-luxury-amber shrink-0" />
                    <span className="truncate">{mission.venue}</span>
                  </div>
                </div>

                <div>
                  <span className="text-luxury-dim block mb-1">TEAM SQUAD</span>
                  <div className="flex items-center gap-1.5 text-luxury-white font-medium">
                    <Users className="h-3.5 w-3.5 text-luxury-amber" />
                    <span>{mission.teamSize}</span>
                  </div>
                </div>
              </div>

              {/* Event Description */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-extreme text-luxury-amber mb-3">
                  EVENT SPECIFICATIONS
                </h3>
                <p className="text-sm sm:text-base text-luxury-muted font-sans font-light leading-relaxed">
                  {mission.description}
                </p>
                <p className="mt-2 text-sm text-luxury-muted font-sans font-light leading-relaxed">
                  Official sanctioned competition at Amal Jyothi College of Engineering, Kanjirappally as part of AITHRA 2026. Teams will be evaluated by industry judges and academic leads on technical precision, speed, and design brilliance.
                </p>
              </div>

              {/* Rules & Guidelines */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-extreme text-luxury-amber mb-4">
                  COMPETITION RULES & GUIDELINES
                </h3>
                <ul className="space-y-3">
                  {mission.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-luxury-muted font-sans font-light">
                      <CheckCircle className="h-4 w-4 text-luxury-amber shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bounty & Fee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-b border-white/10 py-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-luxury-dim">
                    PRIZE BOUNTY
                  </span>
                  <div className="mt-1 font-display text-4xl sm:text-5xl font-bold text-luxury-white">
                    {mission.prizePool}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-luxury-dim">
                    REGISTRATION FEE
                  </span>
                  <div className="mt-1 font-display text-4xl sm:text-5xl font-bold text-luxury-white">
                    {mission.entryFee}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => setIsRegisterOpen(true)}
                  className="w-full sm:flex-1 py-4 rounded-full bg-luxury-white text-luxury-obsidian font-display text-xs uppercase tracking-widest font-bold hover:bg-luxury-amber transition-colors"
                >
                  REGISTER FOR THIS EVENT
                </button>

                {mission.registrationUrl && (
                  <a
                    href={mission.registrationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-full font-display text-xs uppercase tracking-widest text-luxury-white hover:border-luxury-amber hover:text-luxury-amber transition-colors"
                  >
                    <span>AJCE PORTAL DIRECT</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </article>
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
