"use client";

import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import AboutSection from "@/components/about/AboutSection";
import StatsHUD from "@/components/stats/StatsHUD";
import DepartmentsSection from "@/components/departments/DepartmentsSection";
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
  const [selectedDept, setSelectedDept] = useState<string>("All Departments");

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
      {/* Reference Image 5: Bilateral Centered-Logo Navigation */}
      <Navbar onOpenRegister={handleOpenGeneralRegister} />

      {/* Main Continuous Experience Following Reference Layout */}
      <main className="relative flex flex-col w-full">
        {/* 01. Hero: Display Headline + 3D Car + Docked Capsule Countdown HUD (Ref Image 5) */}
        <Hero onOpenRegister={handleOpenGeneralRegister} />

        {/* 02. Editorial About: Halftone Header + Narrative + Blueprint + Campus Aerial (Ref Images 1, 3, 4) */}
        <AboutSection />

        {/* 03. Festival Telemetry Metrics */}
        <StatsHUD />

        {/* 04. Dedicated DEPARTMENTS Section with 3-Column Grid (Ref Image 2) */}
        <DepartmentsSection onSelectDepartment={(dept) => setSelectedDept(dept)} />

        {/* 05. Event Directory with 3D Cult UI ShiftCards */}
        <MissionBrowser
          onAcceptMission={handleAcceptEvent}
          selectedDepartment={selectedDept}
          onDepartmentChange={setSelectedDept}
        />

        {/* 06. Featured Arenas & Masterclasses */}
        <ExperienceDistricts onOpenRegister={handleOpenGeneralRegister} />

        {/* 07. Visual Archives */}
        <GallerySection />

        {/* 08. Precision Chronometer Countdown */}
        <CountdownHUD />

        {/* 09. Final Call to the Grid */}
        <FinalCTA onOpenRegister={handleOpenGeneralRegister} />
      </main>

      {/* Official Footer with AJCE Students' Council Credentials */}
      <Footer />

      {/* Official Accreditation Modal */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        defaultMissionTitle={selectedEvent ? selectedEvent.title : undefined}
        defaultMissionCode={selectedEvent ? selectedEvent.registrationCode : undefined}
      />
    </div>
  );
}
