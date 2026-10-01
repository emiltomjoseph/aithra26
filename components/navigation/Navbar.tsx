"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/navigation/MobileMenu";
import { Menu, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "EVENTS", href: "#events" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "ARCHIVES", href: "#archives" },
    { name: "CONTACT", href: "#contact" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/10 bg-luxury-obsidian/90 py-3.5 backdrop-blur-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Brand Identity: Official AITHRA Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/brand/aithra white.png"
              alt="AITHRA 2026"
              width={110}
              height={32}
              priority
              className="h-6 sm:h-7 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
            <span className="hidden sm:inline border-l border-white/15 pl-3 font-mono text-[10px] uppercase tracking-widest text-luxury-muted">
              TECHFEST 2026
            </span>
          </Link>

          {/* Desktop Minimal Editorial Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-xs uppercase tracking-widest text-luxury-muted transition-colors duration-200 hover:text-luxury-white"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action: Minimal Discrete Register Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenRegister}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-display text-xs uppercase tracking-widest text-luxury-white transition-all duration-300 hover:border-luxury-amber hover:text-luxury-amber hover:bg-white/10"
            >
              <span>REGISTER</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex md:hidden p-2 text-luxury-white hover:text-luxury-amber transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
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
