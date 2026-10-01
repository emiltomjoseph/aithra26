"use client";

import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export default function MobileMenu({ isOpen, onClose, onOpenRegister }: MobileMenuProps) {
  if (!isOpen) return null;

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "ARCHIVES", href: "#archives" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegisterClick = () => {
    onClose();
    onOpenRegister();
  };

  return (
    <div className="fixed inset-0 z-[90] flex flex-col justify-between bg-luxury-obsidian/98 p-8 backdrop-blur-3xl">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Image
          src="/brand/aithra white.png"
          alt="AITHRA 2026"
          width={100}
          height={28}
          className="h-6 w-auto object-contain"
        />

        <button
          onClick={onClose}
          className="p-2 text-luxury-muted hover:text-luxury-white transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="my-auto flex flex-col space-y-6">
        {navLinks.map((link, idx) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.href)}
            className="flex items-baseline justify-between text-left font-display text-4xl uppercase tracking-cinematic text-luxury-white hover:text-luxury-amber transition-colors"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-luxury-dim">0{idx + 1}</span>
              <span>{link.name}</span>
            </div>
            <ArrowRight className="h-5 w-5 text-luxury-amber opacity-40" />
          </button>
        ))}
      </nav>

      {/* Bottom Action */}
      <div className="border-t border-white/10 pt-6 space-y-4">
        <button
          onClick={handleRegisterClick}
          className="w-full py-4 rounded-full bg-luxury-white text-luxury-obsidian font-display text-sm uppercase tracking-widest font-bold hover:bg-luxury-amber transition-colors"
        >
          REGISTER CREDENTIALS
        </button>

        <div className="flex items-center justify-between text-[11px] font-mono text-luxury-dim uppercase tracking-wider">
          <span>AMAL JYOTHI COLLEGE</span>
          <span>30 — 31 OCT 2026</span>
        </div>
      </div>
    </div>
  );
}
