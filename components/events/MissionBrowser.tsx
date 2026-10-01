"use client";

import { useState, useMemo } from "react";
import { missionEvents, categoriesList, departmentsList, MissionEvent } from "@/data/events";
import MissionCard from "@/components/events/MissionCard";
import GradientButtonGroup from "@/components/ui/GradientButtonGroup";
import MetalButton from "@/components/ui/MetalButton";
import { Search, SlidersHorizontal } from "lucide-react";

interface MissionBrowserProps {
  onAcceptMission: (mission: MissionEvent) => void;
  selectedDepartment?: string;
  onDepartmentChange?: (dept: string) => void;
}

export default function MissionBrowser({
  onAcceptMission,
  selectedDepartment,
  onDepartmentChange,
}: MissionBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [localDept, setLocalDept] = useState<string>("All Departments");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayCount, setDisplayCount] = useState<number>(12);

  const selectedDept = selectedDepartment !== undefined ? selectedDepartment : localDept;
  const setSelectedDept = (dept: string) => {
    setLocalDept(dept);
    if (onDepartmentChange) {
      onDepartmentChange(dept);
    }
  };

  const filterButtonItems = useMemo(() => {
    return categoriesList.map((cat) => ({
      id: cat.id,
      label: cat.id === "all" ? "ALL DISCIPLINES" : cat.label.replace("MISSIONS", "EVENTS"),
      count: cat.count,
    }));
  }, []);

  const filteredMissions = useMemo(() => {
    return missionEvents.filter((m) => {
      if (selectedCategory !== "all" && m.category !== selectedCategory) {
        return false;
      }
      if (selectedDept !== "All Departments" && m.department !== selectedDept) {
        return false;
      }
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = m.title.toLowerCase().includes(query);
        const matchesDept = m.department.toLowerCase().includes(query);
        const matchesDesc = m.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDept && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDept, searchQuery]);

  const visibleMissions = filteredMissions.slice(0, displayCount);

  return (
    <section id="events" className="relative w-full bg-luxury-obsidian py-32 border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Section Marker & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-12 gap-6">
          <div>
            <div className="flex items-center gap-4 text-xs font-mono tracking-extreme uppercase text-luxury-muted mb-4">
              <span className="text-luxury-amber">03 // COMPETITIONS</span>
              <div className="h-px w-12 bg-white/20" />
              <span>SANCTIONED EVENTS</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-cinematic text-luxury-white">
              EVENT DIRECTORY
            </h2>
          </div>

          <div className="font-mono text-xs text-luxury-muted uppercase tracking-wider flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-luxury-amber animate-pulse" />
            SHOWING {visibleMissions.length} OF {missionEvents.length} VERIFIED ENTRIES
          </div>
        </div>

        {/* Cult UI: Gradient Button Group for Category Navigation */}
        <div className="mt-10 overflow-x-auto pb-2 flex justify-start sm:justify-center">
          <GradientButtonGroup
            items={filterButtonItems}
            activeId={selectedCategory}
            onChange={(id) => {
              setSelectedCategory(id);
              setDisplayCount(12);
            }}
          />
        </div>

        {/* Secondary Search & Department Filters */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-4">
          {/* Search Input with Acrylic Dark Finish */}
          <div className="sm:col-span-8 relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-luxury-dim" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event title, keyword, or technology..."
              className="w-full bg-[#0C0913]/90 border border-white/12 rounded-xl py-3.5 pl-11 pr-4 text-xs font-sans text-luxury-white placeholder:text-luxury-dim focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none transition-all"
            />
          </div>

          {/* Department Select */}
          <div className="sm:col-span-4 relative">
            <SlidersHorizontal className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-luxury-dim pointer-events-none" />
            <select
              value={selectedDept}
              onChange={(e) => {
                setSelectedDept(e.target.value);
                setDisplayCount(12);
              }}
              className="w-full bg-[#0C0913]/90 border border-white/12 rounded-xl py-3.5 pl-11 pr-4 text-xs font-sans text-luxury-white focus:border-luxury-amber focus:ring-1 focus:ring-luxury-amber/30 focus:outline-none appearance-none transition-all cursor-pointer"
            >
              {departmentsList.map((d) => (
                <option key={d} value={d} className="bg-luxury-obsidian text-luxury-white">
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3D Shift Card Events Grid */}
        {visibleMissions.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                onAcceptMission={onAcceptMission}
              />
            ))}
          </div>
        ) : (
          <div className="mt-20 py-16 text-center border border-white/10 rounded-2xl bg-white/[0.02]">
            <h3 className="font-display text-2xl uppercase tracking-wider text-luxury-white">
              NO MATCHING EVENTS FOUND
            </h3>
            <p className="mt-2 text-xs text-luxury-muted font-sans font-light">
              Refine your keyword search or reset department filters.
            </p>
          </div>
        )}

        {/* Load More Button: Cult UI MetalButton */}
        {filteredMissions.length > displayCount && (
          <div className="mt-16 text-center">
            <MetalButton
              variant="titanium"
              size="lg"
              onClick={() => setDisplayCount((prev) => prev + 12)}
            >
              VIEW MORE DIRECTORY ENTRIES ({filteredMissions.length - displayCount} REMAINING)
            </MetalButton>
          </div>
        )}
      </div>
    </section>
  );
}
