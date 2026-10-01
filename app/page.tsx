"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import StatsHUD from "@/components/stats/StatsHUD";
import MissionBrowser from "@/components/events/MissionBrowser";
import AithraCityMap from "@/components/map/AithraCityMap";
import ExperienceDistricts from "@/components/experience/ExperienceDistricts";
import GallerySection from "@/components/gallery/GallerySection";
import CountdownHUD from "@/components/countdown/CountdownHUD";
import FinalCTA from "@/components/cta/FinalCTA";
import Footer from "@/components/footer/Footer";
import RegistrationModal from "@/components/ui/RegistrationModal";
import { MissionEvent } from "@/data/events";

export default function HomePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState<MissionEvent | null>(null);

  const handleOpenGeneralRegister = () => {
    setSelectedMission(null);
    setIsRegisterOpen(true);
  };

  const handleAcceptMission = (mission: MissionEvent) => {
    setSelectedMission(mission);
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gta-night text-gta-white">
      {/* Top HUD Navigation */}
      <Navbar onOpenRegister={handleOpenGeneralRegister} />

      {/* Main Single-Page Experience */}
      <main className="relative flex flex-col w-full">
        {/* 1. Hero Section */}
        <Hero onOpenRegister={handleOpenGeneralRegister} />

        {/* 2. Welcome to AITHRA (About) */}
        <AboutSection />

        {/* 3. The Numbers (Stats HUD) */}
        <StatsHUD />

        {/* 4. Missions (Events Catalog) */}
        <MissionBrowser onAcceptMission={handleAcceptMission} />

        {/* 5. AITHRA City (Interactive Campus Radar Map) */}
        <AithraCityMap />

        {/* 6. Experience Districts (Tech, Compete, Create, Play, Connect) */}
        <ExperienceDistricts onOpenRegister={handleOpenGeneralRegister} />

        {/* 7. The City In Motion (Gallery) */}
        <GallerySection />

        {/* 8. Mission Launch Countdown */}
        <CountdownHUD />

        {/* 9. Final CTA */}
        <FinalCTA onOpenRegister={handleOpenGeneralRegister} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Universal Registration Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultMissionTitle={selectedMission?.title}
        defaultMissionCode={selectedMission?.registrationCode}
      />
    </div>
  );
}
