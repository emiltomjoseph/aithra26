"use client";

import { useState } from "react";
import { sound } from "@/lib/audio";
import { X, CheckCircle2, ShieldCheck, Flame, User, Mail, Phone, Building } from "lucide-react";
import confetti from "canvas-confetti";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMissionTitle?: string;
  defaultMissionCode?: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  defaultMissionTitle,
  defaultMissionCode,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    department: "",
    year: "3rd Year",
    mission: defaultMissionTitle || "General All-Access Pass (AITHRA 2026)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sound.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sound.playSuccess();

      // Trigger celebratory GTA neon confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E8FF4F", "#D92BFF", "#FF4FA3", "#FF7448"],
      });
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#050307]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl border border-gta-magenta/40 bg-gta-surface p-6 sm:p-8 shadow-2xl shadow-gta-magenta/20 z-10 hud-corner-lg">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gta-yellow via-gta-pink to-gta-magenta" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="interactive absolute top-5 right-5 rounded-lg border border-gta-white/10 p-1.5 text-gta-white/60 transition-colors hover:border-gta-yellow hover:text-gta-yellow"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gta-yellow bg-gta-yellow/10 text-gta-yellow shadow-neonYellow">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>

            <span className="inline-block rounded-full bg-gta-yellow/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
              TACTICAL CLEARANCE GRANTED
            </span>

            <h3 className="mt-3 font-display text-3xl sm:text-4xl uppercase tracking-wider text-gta-white">
              MISSION ACCEPTED
            </h3>

            <p className="mt-2 text-sm text-gta-white/70">
              Welcome to the city, <span className="font-semibold text-gta-yellow">{formData.fullName}</span>. Your accreditation pass for <span className="text-gta-pink font-semibold">{formData.mission}</span> has been confirmed.
            </p>

            <div className="mt-6 rounded-lg border border-gta-white/10 bg-gta-night/80 p-4 text-left font-mono text-xs text-gta-white/80">
              <div className="flex justify-between border-b border-gta-white/10 pb-2 mb-2">
                <span className="text-gta-white/50">OPERATOR ID:</span>
                <span className="text-gta-yellow">AJCE-26-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between border-b border-gta-white/10 pb-2 mb-2">
                <span className="text-gta-white/50">SECTOR:</span>
                <span>KANJIRAPPALLY CAMPUS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gta-white/50">DATES:</span>
                <span className="text-gta-pink">30 — 31 OCTOBER 2026</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="interactive mt-6 w-full rounded-md bg-gta-yellow py-3 font-display text-base uppercase tracking-wider text-gta-night font-bold transition-all hover:bg-gta-yellow/90 hover:shadow-neonYellow"
            >
              RETURN TO CITY
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded bg-gta-magenta/20 px-2 py-0.5 font-display text-[11px] uppercase tracking-wider text-gta-magenta">
                <Flame className="h-3 w-3 text-gta-yellow" />
                ACCREDITATION DESK
              </span>
              {defaultMissionCode && (
                <span className="rounded bg-gta-yellow/20 px-2 py-0.5 font-display text-[11px] uppercase tracking-wider text-gta-yellow">
                  CODE: {defaultMissionCode}
                </span>
              )}
            </div>

            <h2 className="mt-2 font-display text-2xl sm:text-3xl uppercase tracking-wide text-gta-white">
              {defaultMissionTitle ? `DEPLOY: ${defaultMissionTitle}` : "ENTER AITHRA 2026"}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gta-white/60">
              Register official entry credentials for Amal Jyothi College of Engineering TechFest.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block font-display text-xs uppercase tracking-wider text-gta-white/80">
                  Full Legal Name / Call-Sign *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gta-white/40" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alex Vance"
                    className="w-full rounded-md border border-gta-white/15 bg-gta-night/90 py-2.5 pl-10 pr-3 text-sm text-gta-white placeholder:text-gta-white/30 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-display text-xs uppercase tracking-wider text-gta-white/80">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gta-white/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full rounded-md border border-gta-white/15 bg-gta-night/90 py-2.5 pl-10 pr-3 text-sm text-gta-white placeholder:text-gta-white/30 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-display text-xs uppercase tracking-wider text-gta-white/80">
                    Mobile Comms *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gta-white/40" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-md border border-gta-white/15 bg-gta-night/90 py-2.5 pl-10 pr-3 text-sm text-gta-white placeholder:text-gta-white/30 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-display text-xs uppercase tracking-wider text-gta-white/80">
                    Institution / College *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gta-white/40" />
                    <input
                      type="text"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      placeholder="Amal Jyothi / Other"
                      className="w-full rounded-md border border-gta-white/15 bg-gta-night/90 py-2.5 pl-10 pr-3 text-sm text-gta-white placeholder:text-gta-white/30 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block font-display text-xs uppercase tracking-wider text-gta-white/80">
                    Department / Major *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="CSE, ME, ECE, etc."
                    className="w-full rounded-md border border-gta-white/15 bg-gta-night/90 py-2.5 px-3 text-sm text-gta-white placeholder:text-gta-white/30 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive w-full rounded-md bg-gta-yellow py-3.5 font-display text-base font-bold uppercase tracking-wider text-gta-night transition-all hover:bg-gta-yellow/90 hover:shadow-neonYellow disabled:opacity-50"
                >
                  {isSubmitting ? "TRANSMITTING TELEMETRY..." : "CONFIRM MISSION REGISTRATION"}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-gta-white/40">
                <ShieldCheck className="h-3.5 w-3.5 text-gta-magenta" />
                <span>Authorized by AJCE Students&apos; Council • Official AITHRA 2026 Portal</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
