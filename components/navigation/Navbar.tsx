"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/navigation/MobileMenu";
import BorderBeamButton from "@/components/ui/BorderBeamButton";
import { Menu, ArrowRight, Radio } from "lucide-react";
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

      // Detect active section
      const sections = ["about", "events", "experience", "archives", "contact"];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "EVENTS", href: "#events", id: "events" },
    { name: "EXPERIENCE", href: "#experience", id: "experience" },
    { name: "ARCHIVES", href: "#archives", id: "archives" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

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
          isScrolled ? "py-3" : "py-6"
        )}
      >
        {/* Floating Dynamic Island / Luxury Pill Dock */}
        <div
          className={clsx(
            "flex items-center justify-between w-full max-w-6xl rounded-full px-5 py-2.5 transition-all duration-500",
            "bg-[#0A0710]/85 backdrop-blur-2xl border border-white/12 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.85)]",
            isScrolled && "border-white/20 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95),0_0_20px_rgba(255,122,69,0.08)]"
          )}
        >
          {/* Brand Identity: Official AITHRA Logo */}
          <Link href="/" className="group flex items-center gap-3 select-none">
            <Image
              src="/brand/aithra white.png"
              alt="AITHRA 2026"
              width={105}
              height={30}
              priority
              className="h-5 sm:h-6 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
            />
            <span className="hidden lg:inline-flex items-center gap-2 border-l border-white/15 pl-3 font-mono text-[9px] uppercase tracking-widest text-luxury-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span>GRID LIVE // 30-31 OCT</span>
            </span>
          </Link>

          {/* Desktop Navigation Links with Animated Pill Underlay */}
          <nav className="hidden md:flex items-center gap-1 bg-black/40 rounded-full p-1 border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={clsx(
                    "relative px-4 py-1.5 rounded-full font-display text-[11px] uppercase tracking-widest transition-all duration-300 select-none",
                    isActive
                      ? "text-luxury-white font-bold bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                      : "text-luxury-muted hover:text-luxury-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: BorderBeam Button */}
          <div className="flex items-center gap-3">
            <BorderBeamButton
              onClick={onOpenRegister}
              size="sm"
              glowColor="amber"
              className="hidden sm:inline-flex"
            >
              <span>ACCREDIT</span>
              <ArrowRight className="h-3 w-3" />
            </BorderBeamButton>

            {/* Mobile Hamburger */}
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
