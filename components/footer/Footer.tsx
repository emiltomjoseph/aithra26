"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { sound } from "@/lib/audio";
import { Phone, MapPin, Instagram, Globe, Shield, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full overflow-hidden bg-[#07020d] pt-20 pb-12 border-t border-gta-magenta/30">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Brand & Direct Comms */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-gta-white/10 pb-16">
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/aithra white.png"
                alt="AITHRA 2026 Logo"
                width={140}
                height={45}
                className="h-9 w-auto object-contain"
              />
              <span className="rounded bg-gta-yellow/20 px-2.5 py-0.5 font-display text-xs uppercase tracking-wider text-gta-yellow">
                EDITION 2026
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gta-white/70 font-sans leading-relaxed max-w-sm">
              The flagship TechFest of Amal Jyothi College of Engineering, Kanjirappally. Powered by the AJCE Students&apos; Council.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Image
                src="/brand/ajcelogo.png"
                alt="Amal Jyothi College of Engineering"
                width={110}
                height={35}
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-base uppercase tracking-wider text-gta-yellow">
              TACTICAL DIRECTORY
            </h4>
            <ul className="space-y-2 text-xs font-sans text-gta-white/70">
              <li>
                <a
                  href="#about"
                  onClick={() => sound.playClick()}
                  className="interactive hover:text-gta-yellow transition-colors"
                >
                  District Overview (About)
                </a>
              </li>
              <li>
                <a
                  href="#missions"
                  onClick={() => sound.playClick()}
                  className="interactive hover:text-gta-yellow transition-colors"
                >
                  Mission Briefings (Events)
                </a>
              </li>
              <li>
                <a
                  href="#map"
                  onClick={() => sound.playClick()}
                  className="interactive hover:text-gta-yellow transition-colors"
                >
                  Satellite Radar Map
                </a>
              </li>
              <li>
                <a
                  href="#districts"
                  onClick={() => sound.playClick()}
                  className="interactive hover:text-gta-yellow transition-colors"
                >
                  Experience Zones
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={() => sound.playClick()}
                  className="interactive hover:text-gta-yellow transition-colors"
                >
                  Visual Archives
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Comms & Phone Numbers (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display text-base uppercase tracking-wider text-gta-pink">
              TACTICAL COMMS / CONTACT
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {siteConfig.contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={`tel:${contact.tel}`}
                  onClick={() => sound.playClick()}
                  className="interactive group rounded-lg border border-gta-white/10 bg-gta-surface/60 p-2.5 transition-colors hover:border-gta-yellow hover:bg-gta-surface"
                >
                  <div className="text-[10px] font-mono uppercase text-gta-white/40">
                    {contact.role}
                  </div>
                  <div className="font-display text-sm uppercase text-gta-white group-hover:text-gta-yellow">
                    {contact.name}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-gta-yellow mt-0.5">
                    <Phone className="h-3 w-3" />
                    <span>{contact.phone}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Handles */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={siteConfig.socials.aithraInsta}
                target="_blank"
                rel="noreferrer"
                className="interactive rounded-lg border border-gta-white/15 bg-gta-surface/70 p-2 text-gta-white/80 transition-colors hover:border-gta-yellow hover:text-gta-yellow"
                title="AITHRA Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.councilInsta}
                target="_blank"
                rel="noreferrer"
                className="interactive rounded-lg border border-gta-white/15 bg-gta-surface/70 p-2 text-gta-white/80 transition-colors hover:border-gta-yellow hover:text-gta-yellow"
                title="AJCE Students' Council Instagram"
              >
                <Shield className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.collegeInsta}
                target="_blank"
                rel="noreferrer"
                className="interactive rounded-lg border border-gta-white/15 bg-gta-surface/70 p-2 text-gta-white/80 transition-colors hover:border-gta-yellow hover:text-gta-yellow"
                title="Amal Jyothi Official Instagram"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gta-white/50 font-sans gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gta-pink" />
            <span>
              Amal Jyothi College of Engineering, Koovappally P.O., Kanjirappally, Kerala 686518
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>© 2026 AITHRA • AJCE Students&apos; Council. All Rights Reserved.</span>
            <button
              onClick={handleScrollTop}
              className="interactive ml-2 rounded bg-gta-surface px-2 py-1 font-display text-[10px] uppercase text-gta-yellow hover:bg-gta-surface/80"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
