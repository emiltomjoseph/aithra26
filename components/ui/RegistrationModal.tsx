"use client";

import { useState } from "react";
import BorderBeam from "@/components/ui/BorderBeam";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import MetalButton from "@/components/ui/MetalButton";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";

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
    event: defaultMissionTitle || "General Admission (AITHRA 2026)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Obsidian Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-[#050505]/92 backdrop-blur-2xl transition-opacity"
      />

      {/* Modal Dialog with BorderBeam */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#130E1C] via-[#0A0710] to-[#050408] p-8 sm:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.95)] z-10">
        <BorderBeam size={140} duration={8} colorFrom="#FF7A45" colorTo="#9A4BFF" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 text-luxury-muted hover:text-luxury-white transition-colors rounded-full bg-white/5 border border-white/10"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-luxury-amber/30 bg-luxury-amber/10 text-luxury-amber shadow-[0_0_30px_rgba(255,122,69,0.3)]">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber">
              ACCREDITATION CONFIRMED
            </span>

            <h3 className="mt-2 font-display text-3xl sm:text-4xl uppercase tracking-wider text-luxury-white">
              PASS ISSUED
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-luxury-muted font-sans font-light">
              Registration confirmed for <span className="text-luxury-white font-medium">{formData.fullName}</span>. Entry credentials for <span className="text-luxury-amber font-medium">{formData.event}</span> have been recorded in the central mainframe.
            </p>

            <div className="mt-6 border border-white/10 rounded-xl bg-black/60 p-4 text-left font-mono text-xs text-luxury-muted space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>PASS ID:</span>
                <span className="text-luxury-white font-bold">AJCE-26-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>VENUE:</span>
                <span className="text-luxury-white">AMAL JYOTHI CAMPUS, KANJIRAPPALLY</span>
              </div>
              <div className="flex justify-between">
                <span>DATES:</span>
                <span className="text-luxury-amber font-bold">30 — 31 OCTOBER 2026</span>
              </div>
            </div>

            <div className="mt-6">
              <MetalButton
                variant="titanium"
                size="md"
                onClick={handleResetAndClose}
                className="w-full"
              >
                RETURN TO GRID
              </MetalButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-luxury-amber">
              <ShieldCheck className="h-4 w-4" />
              <span>OFFICIAL ACCREDITATION PORTAL</span>
            </div>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl uppercase tracking-wider text-luxury-white">
              {defaultMissionTitle ? defaultMissionTitle : "CREDENTIAL ACCESS"}
            </h2>
            <p className="mt-1 text-xs text-luxury-muted font-sans font-light">
              Amal Jyothi College of Engineering • Flagship TechFest 2026
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Alexander Vance"
                  className="w-full rounded-lg border border-white/10 bg-black/60 py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full rounded-lg border border-white/10 bg-black/60 py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-white/10 bg-black/60 py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
                    Institution / College *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="Amal Jyothi / Other"
                    className="w-full rounded-lg border border-white/10 bg-black/60 py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
                    Department *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="CSE, ME, ECE..."
                    className="w-full rounded-lg border border-white/10 bg-black/60 py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <BorderBeamButton
                  type="submit"
                  disabled={isSubmitting}
                  glowColor="amber"
                  className="w-full"
                >
                  {isSubmitting ? "PROCESSING..." : "CONFIRM ACCREDITATION"}
                </BorderBeamButton>
              </div>

              <div className="text-center text-[10px] font-mono text-luxury-dim">
                AJCE Students&apos; Council • Official AITHRA 2026 Mainframe
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
