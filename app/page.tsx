"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import StatsHUD from "@/components/stats/StatsHUD";
import MissionBrowser from "@/components/events/MissionBrowser";
import ExperienceDistricts from "@/components/experience/ExperienceDistricts";
import GallerySection from "@/components/gallery/GallerySection";
import CountdownHUD from "@/components/countdown/CountdownHUD";
import FinalCTA from "@/components/cta/FinalCTA";
import Footer from "@/components/footer/Footer";
import RegistrationModal from "@/components/ui/RegistrationModal";
import { MissionEvent } from "@/data/events";

export default function HomePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<MissionEvent | null>(null);

  const handleOpenGeneralRegister = () => {
    setSelectedEvent(null);
    setIsRegisterOpen(true);
  };

  const handleAcceptEvent = (event: MissionEvent) => {
    setSelectedEvent(event);
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-luxury-obsidian text-luxury-white">
      {/* Minimal Top Navigation */}
      <Navbar onOpenRegister={handleOpenGeneralRegister} />

      {/* Main Continuous Editorial Experience */}
      <main className="relative flex flex-col w-full">
        {/* 01. Hero: Porsche 911 GT3 RS on Racing Circuit */}
        <Hero onOpenRegister={handleOpenGeneralRegister} />

        {/* 02. Editorial Introduction */}
        <AboutSection />

        {/* 03. The Metrics */}
        <StatsHUD />

        {/* 04. Event Directory */}
        <MissionBrowser onAcceptMission={handleAcceptEvent} />

        {/* 05. Featured Arenas & Masterclasses */}
        <ExperienceDistricts onOpenRegister={handleOpenGeneralRegister} />

        {/* 06. Visual Archives */}
        <GallerySection />

        {/* 07. Precision Chronometer */}
        <CountdownHUD />

        {/* 08. Final Call */}
        <FinalCTA onOpenRegister={handleOpenGeneralRegister} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accreditation Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultMissionTitle={selectedEvent?.title}
        defaultMissionCode={selectedEvent?.registrationCode}
      />
    </div>
  );
}
