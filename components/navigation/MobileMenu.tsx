"use client";

import { X, ArrowRight, Shield, MapPin } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { sound } from "@/lib/audio";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenRegister }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = (href: string) => {
    sound.playClick();
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterClick = () => {
    sound.playClick();
    onClose();
    onOpenRegister();
  };

  return (
    <div className="fixed inset-0 z-[90] flex flex-col justify-between bg-gta-night/95 backdrop-blur-2xl p-6 sm:p-8 gta-scanlines">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-gta-magenta/20 pb-4">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/aithra white.png"
            alt="AITHRA 2026 Logo"
            width={120}
            height={36}
            className="h-8 w-auto object-contain"
          />
          <span className="rounded bg-gta-yellow/20 px-2 py-0.5 font-display text-xs uppercase tracking-wider text-gta-yellow">
            2026
          </span>
        </div>

        <button
          onClick={onClose}
          className="interactive rounded-lg border border-gta-white/10 p-2 text-gta-white/80 transition-colors hover:border-gta-yellow hover:text-gta-yellow"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links with Large Condensed Typography */}
      <nav className="my-auto flex flex-col space-y-4 py-8">
        {siteConfig.navLinks.map((link, idx) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.href)}
            className="group flex items-center justify-between text-left font-display text-4xl uppercase tracking-wider text-gta-white transition-all hover:text-gta-yellow hover:translate-x-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-gta-magenta">0{idx + 1}.</span>
              <span>{link.name}</span>
            </div>
            <ArrowRight className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100 text-gta-yellow" />
          </button>
        ))}
      </nav>

      {/* Bottom Action & Venue Info */}
      <div className="space-y-4 border-t border-gta-magenta/20 pt-6">
        <button
          onClick={handleRegisterClick}
          className="interactive flex w-full items-center justify-center gap-2 rounded-lg bg-gta-yellow py-3.5 font-display text-lg font-bold uppercase tracking-wider text-gta-night shadow-neonYellow hover:bg-gta-yellow/90"
        >
          <span>CLAIM MISSION PASS</span>
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gta-white/60 gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-gta-pink" />
            <span>Amal Jyothi College of Engineering, Kanjirappally</span>
          </div>
          <div className="flex items-center gap-1.5 text-gta-yellow">
            <Shield className="h-4 w-4" />
            <span>30 — 31 OCTOBER 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
