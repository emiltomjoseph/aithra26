"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import AudioToggle from "@/components/ui/AudioToggle";
import MobileMenu from "@/components/navigation/MobileMenu";
import { Menu, ChevronRight } from "lucide-react";
import { sound } from "@/lib/audio";

interface NavbarProps {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    sound.playClick();
    if (href.startsWith("#")) {
      e.preventDefault();
      const elem = document.querySelector(href);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gta-magenta/25 bg-gta-night/85 py-3 backdrop-blur-xl shadow-lg shadow-black/40"
            : "bg-gradient-to-b from-gta-night/90 via-gta-night/40 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Identity */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="interactive group flex items-center gap-3"
          >
            <div className="relative">
              <Image
                src="/brand/aithra white.png"
                alt="AITHRA 2026 Logo"
                width={130}
                height={40}
                priority
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-gta-white/15 pl-3">
              <span className="font-display text-[10px] uppercase tracking-widest text-gta-yellow">
                TECHFEST 2026
              </span>
              <span className="text-[10px] text-gta-white/50 tracking-tight">
                AMAL JYOTHI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 rounded-full border border-gta-white/10 bg-gta-surface/60 px-4 py-1.5 backdrop-blur-md">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => sound.playHover()}
                className="interactive rounded-full px-3.5 py-1 font-display text-sm uppercase tracking-wider text-gta-white/80 transition-all duration-200 hover:text-gta-yellow hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Audio + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <AudioToggle />

            {/* Registration CTA button */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenRegister();
              }}
              onMouseEnter={() => sound.playHover()}
              className="interactive group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-md bg-gta-yellow px-5 py-2 font-display text-sm font-bold uppercase tracking-wider text-gta-night transition-all duration-300 hover:bg-gta-yellow/90 hover:shadow-neonYellow"
            >
              <span>REGISTER</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                setIsMobileMenuOpen(true);
              }}
              className="interactive flex lg:hidden rounded-lg border border-gta-white/15 bg-gta-surface/80 p-2 text-gta-white hover:border-gta-yellow hover:text-gta-yellow"
              aria-label="Open mobile navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenRegister={onOpenRegister}
      />
    </>
  );
}
