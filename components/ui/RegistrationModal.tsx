"use client";

import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 overflow-y-auto">
      {/* Dark Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-luxury-obsidian/90 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg border border-white/15 bg-luxury-carbon p-8 sm:p-10 shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 text-luxury-muted hover:text-luxury-white transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-luxury-amber bg-luxury-amber/10 text-luxury-amber">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber">
              ACCREDITATION CONFIRMED
            </span>

            <h3 className="mt-2 font-display text-3xl sm:text-4xl uppercase tracking-wider text-luxury-white">
              PASS ISSUED
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-luxury-muted font-sans font-light">
              Registration confirmed for <span className="text-luxury-white font-medium">{formData.fullName}</span>. Entry credentials for <span className="text-luxury-amber font-medium">{formData.event}</span> have been recorded.
            </p>

            <div className="mt-6 border border-white/10 bg-luxury-obsidian p-4 text-left font-mono text-xs text-luxury-muted space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>PASS ID:</span>
                <span className="text-luxury-white">AJCE-26-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>VENUE:</span>
                <span className="text-luxury-white">AMAL JYOTHI CAMPUS</span>
              </div>
              <div className="flex justify-between">
                <span>DATES:</span>
                <span className="text-luxury-amber">30 — 31 OCTOBER 2026</span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="mt-6 w-full py-3.5 rounded-full bg-luxury-white text-luxury-obsidian font-display text-xs uppercase tracking-widest font-bold hover:bg-luxury-amber transition-colors"
            >
              RETURN TO SITE
            </button>
          </div>
        ) : (
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-luxury-amber">
              OFFICIAL REGISTRATION
            </span>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl uppercase tracking-wider text-luxury-white">
              {defaultMissionTitle ? defaultMissionTitle : "ACCREDITATION"}
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
                  className="w-full border border-white/10 bg-luxury-obsidian py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:outline-none"
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
                    className="w-full border border-white/10 bg-luxury-obsidian py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:outline-none"
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
                    className="w-full border border-white/10 bg-luxury-obsidian py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:outline-none"
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
                    className="w-full border border-white/10 bg-luxury-obsidian py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:outline-none"
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
                    className="w-full border border-white/10 bg-luxury-obsidian py-3 px-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-luxury-white text-luxury-obsidian font-display text-xs uppercase tracking-widest font-bold hover:bg-luxury-amber transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "PROCESSING..." : "CONFIRM ACCREDITATION"}
                </button>
              </div>

              <div className="text-center text-[10px] font-mono text-luxury-dim">
                AJCE Students&apos; Council • Official AITHRA 2026 Portal
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
