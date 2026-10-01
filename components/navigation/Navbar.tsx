"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/navigation/MobileMenu";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import { Menu, ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface NavbarProps {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["about", "departments", "events", "experience", "archives", "contact"];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-8 transition-all duration-500",
          isScrolled ? "py-2.5" : "py-5"
        )}
      >
        {/* Reference Image 5: Bilateral Luxury Centered-Logo Dock */}
        <div
          className={clsx(
            "flex items-center justify-between w-full max-w-5xl rounded-full px-6 py-2 transition-all duration-500",
            "bg-[#08050E]/85 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.85)]",
            isScrolled && "border-white/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95),0_0_25px_rgba(0,240,255,0.08)]"
          )}
        >
          {/* Left Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "#about")}
              className={clsx(
                "font-display text-xs uppercase tracking-widest transition-colors duration-200 select-none",
                activeSection === "about"
                  ? "text-luxury-white font-bold"
                  : "text-luxury-muted hover:text-luxury-white"
              )}
            >
              ABOUT
            </a>
            <a
              href="#departments"
              onClick={(e) => handleLinkClick(e, "#departments")}
              className={clsx(
                "font-display text-xs uppercase tracking-widest transition-colors duration-200 select-none",
                activeSection === "departments"
                  ? "text-luxury-white font-bold"
                  : "text-luxury-muted hover:text-luxury-white"
              )}
            >
              DEPARTMENTS
            </a>
            <a
              href="#events"
              onClick={(e) => handleLinkClick(e, "#events")}
              className={clsx(
                "font-display text-xs uppercase tracking-widest transition-colors duration-200 select-none",
                activeSection === "events"
                  ? "text-luxury-white font-bold"
                  : "text-luxury-muted hover:text-luxury-white"
              )}
            >
              EVENTS
            </a>
          </nav>

          {/* Centered Brand Emblem / Logo (Reference Image 5) */}
          <Link href="/" className="group flex flex-col items-center justify-center select-none py-1">
            <div className="relative flex items-center justify-center">
              {/* Subtle Ambient Wing Glow */}
              <div className="pointer-events-none absolute -inset-2 rounded-full bg-cyan-500/10 blur-md group-hover:bg-cyan-500/20 transition-colors" />
              <Image
                src="/brand/aithra white.png"
                alt="AITHRA 2026"
                width={120}
                height={34}
                priority
                className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="font-mono text-[8px] uppercase tracking-extreme text-cyan-400/80 -mt-0.5">
              NATIONAL LEVEL TECHFEST
            </span>
          </Link>

          {/* Right Navigation Links & Accredit Trigger */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#experience"
                onClick={(e) => handleLinkClick(e, "#experience")}
                className={clsx(
                  "font-display text-xs uppercase tracking-widest transition-colors duration-200 select-none",
                  activeSection === "experience"
                    ? "text-luxury-white font-bold"
                    : "text-luxury-muted hover:text-luxury-white"
                )}
              >
                GALLERY
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className={clsx(
                  "font-display text-xs uppercase tracking-widest transition-colors duration-200 select-none",
                  activeSection === "contact"
                    ? "text-luxury-white font-bold"
                    : "text-luxury-muted hover:text-luxury-white"
                )}
              >
                CONTACT
              </a>
            </nav>

            <BorderBeamButton
              onClick={onOpenRegister}
              size="sm"
              glowColor="amber"
              className="text-[10px] hidden sm:inline-flex"
            >
              <span>ACCREDIT</span>
              <ArrowRight className="h-3 w-3" />
            </BorderBeamButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex md:hidden p-1.5 text-luxury-white hover:text-luxury-amber transition-colors rounded-full bg-white/5 border border-white/10"
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenRegister={onOpenRegister}
      />
    </>
  );
}
