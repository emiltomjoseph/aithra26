"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowUp, Instagram, Globe } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#030304] pt-24 pb-12 border-t border-white/10 text-luxury-muted">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Col 1: Brand & College Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/aithra white.png"
                alt="AITHRA 2026"
                width={120}
                height={35}
                className="h-7 w-auto object-contain"
              />
              <span className="border-l border-white/15 pl-3 font-mono text-[10px] uppercase tracking-widest text-luxury-dim">
                EDITION 2026
              </span>
            </div>

            <p className="text-xs font-sans text-luxury-muted leading-relaxed max-w-sm font-light">
              The flagship TechFest of Amal Jyothi College of Engineering, Kanjirappally. Center for technological excellence, innovation, and collegiate competition.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Image
                src="/brand/ajcelogo.png"
                alt="Amal Jyothi College of Engineering"
                width={100}
                height={32}
                className="h-7 w-auto object-contain opacity-70"
              />
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-luxury-white">
              DIRECTORY
            </h4>
            <ul className="space-y-2 text-xs font-sans text-luxury-muted font-light">
              <li>
                <a href="#about" className="hover:text-luxury-white transition-colors">
                  About AITHRA
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-luxury-white transition-colors">
                  Event Directory
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-luxury-white transition-colors">
                  Arenas & Masterclasses
                </a>
              </li>
              <li>
                <a href="#archives" className="hover:text-luxury-white transition-colors">
                  Visual Archives
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contacts & Leads */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-luxury-amber">
              OFFICIAL CONTACTS
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {siteConfig.contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:${contact.tel}`}
                  className="group border border-white/5 bg-luxury-carbon p-3 hover:border-white/20 transition-colors"
                >
                  <div className="text-[10px] font-mono uppercase text-luxury-dim">
                    {contact.role}
                  </div>
                  <div className="font-display text-sm uppercase text-luxury-white group-hover:text-luxury-amber">
                    {contact.name}
                  </div>
                  <div className="text-[11px] font-mono text-luxury-muted mt-0.5">
                    {contact.phone}
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={siteConfig.socials.aithraInsta}
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-white/10 hover:border-luxury-amber hover:text-luxury-white transition-colors"
                title="AITHRA Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.officialWeb}
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-white/10 hover:border-luxury-amber hover:text-luxury-white transition-colors"
                title="Official Portal"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-luxury-dim gap-4">
          <div>
            Amal Jyothi College of Engineering, Koovappally P.O., Kanjirappally, Kerala 686518
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 AITHRA • AJCE Students&apos; Council</span>
            <button
              onClick={handleScrollTop}
              className="inline-flex items-center gap-1 text-luxury-muted hover:text-luxury-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
