"use client";

import { useState, useMemo } from "react";
import { missionEvents, categoriesList, departmentsList, MissionEvent } from "@/data/events";
import MissionCard from "@/components/events/MissionCard";
import { sound } from "@/lib/audio";
import { Search, Filter, Crosshair, Sparkles } from "lucide-react";

interface MissionBrowserProps {
  onAcceptMission: (mission: MissionEvent) => void;
}

export default function MissionBrowser({ onAcceptMission }: MissionBrowserProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDept, setSelectedDept] = useState<string>("All Departments");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"default" | "prize" | "name">("default");
  const [displayCount, setDisplayCount] = useState<number>(12);

  // Filtered & Sorted events
  const filteredMissions = useMemo(() => {
    return missionEvents
      .filter((m) => {
        // Category filter
        if (selectedCategory !== "all" && m.category !== selectedCategory) {
          return false;
        }
        // Department filter
        if (selectedDept !== "All Departments" && m.department !== selectedDept) {
          return false;
        }
        // Search query
        if (searchQuery.trim() !== "") {
          const query = searchQuery.toLowerCase();
          const matchesTitle = m.title.toLowerCase().includes(query);
          const matchesDept = m.department.toLowerCase().includes(query);
          const matchesDesc = m.description.toLowerCase().includes(query);
          const matchesCode = m.registrationCode.toLowerCase().includes(query);
          if (!matchesTitle && !matchesDept && !matchesDesc && !matchesCode) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === "prize") {
          const numA = parseInt(a.prizePool.replace(/[^\d]/g, "")) || 0;
          const numB = parseInt(b.prizePool.replace(/[^\d]/g, "")) || 0;
          return numB - numA;
        }
        return 0;
      });
  }, [selectedCategory, selectedDept, searchQuery, sortBy]);

  const visibleMissions = filteredMissions.slice(0, displayCount);

  const handleCategorySelect = (catId: string) => {
    sound.playClick();
    setSelectedCategory(catId);
    setDisplayCount(12);
  };

  const handleDeptSelect = (dept: string) => {
    sound.playClick();
    setSelectedDept(dept);
    setDisplayCount(12);
  };

  return (
    <section id="missions" className="relative w-full overflow-hidden bg-gta-night py-24 sm:py-32">
      {/* Background Lighting Blobs */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-gta-magenta/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-gta-yellow/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between border-b border-gta-magenta/25 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded bg-gta-magenta/20 px-3 py-1 font-display text-xs uppercase tracking-widest text-gta-yellow">
              <Crosshair className="h-3.5 w-3.5" />
              <span>TACTICAL MISSION SELECTOR</span>
            </div>

            <h2 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-gta-white">
              CHOOSE YOUR <span className="text-gta-yellow text-glow-yellow">MISSION</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-gta-white/70 font-sans max-w-xl">
              Select your battleground. From internal departmental showdowns to state-level flagship hackathons and esports arenas.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-mono text-xs text-gta-white/60">
            TOTAL ACTIVE BRIEFINGS: <span className="text-gta-yellow font-bold text-sm">{filteredMissions.length}</span> / {missionEvents.length}
          </div>
        </div>

        {/* Filter Controls: Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categoriesList.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`interactive flex items-center gap-2 rounded-lg px-4 py-2 font-display text-sm uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-gta-yellow text-gta-night font-bold shadow-neonYellow"
                    : "border border-gta-white/15 bg-gta-surface/70 text-gta-white hover:border-gta-yellow/50 hover:bg-gta-surface"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isActive ? "bg-gta-night text-gta-yellow" : "bg-white/10 text-gta-white/60"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Secondary Bar: Search & Department Dropdown & Sort */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-12 gap-3">
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gta-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search missions by name, code, or keyword..."
              className="w-full rounded-lg border border-gta-white/15 bg-gta-surface/80 py-2.5 pl-10 pr-4 text-sm text-gta-white placeholder:text-gta-white/40 focus:border-gta-yellow focus:outline-none focus:ring-1 focus:ring-gta-yellow"
            />
          </div>

          {/* Department Select */}
          <div className="sm:col-span-3">
            <select
              value={selectedDept}
              onChange={(e) => handleDeptSelect(e.target.value)}
              className="w-full rounded-lg border border-gta-white/15 bg-gta-surface/80 py-2.5 px-3 text-sm text-gta-white focus:border-gta-yellow focus:outline-none"
            >
              {departmentsList.map((d) => (
                <option key={d} value={d} className="bg-gta-night text-gta-white">
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Select */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "default" | "prize" | "name")}
              className="w-full rounded-lg border border-gta-white/15 bg-gta-surface/80 py-2.5 px-3 text-sm text-gta-white focus:border-gta-yellow focus:outline-none"
            >
              <option value="default" className="bg-gta-night text-gta-white">Sort: Mission Order</option>
              <option value="prize" className="bg-gta-night text-gta-white">Sort: Highest Bounty</option>
              <option value="name" className="bg-gta-night text-gta-white">Sort: Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Mission Cards Grid */}
        {visibleMissions.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleMissions.map((mission) => (
              <MissionCard
                key={mission.id}
                mission={mission}
                onAcceptMission={onAcceptMission}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-xl border border-dashed border-gta-white/20 p-12 text-center">
            <Crosshair className="mx-auto h-12 w-12 text-gta-yellow/50" />
            <h3 className="mt-3 font-display text-2xl uppercase text-gta-white">
              NO MISSIONS FOUND MATCHING TELEMETRY
            </h3>
            <p className="mt-1 text-sm text-gta-white/60">
              Try adjusting your search terms, department filters, or clear all filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDept("All Departments");
                setSearchQuery("");
              }}
              className="interactive mt-4 rounded-md border border-gta-yellow px-4 py-2 font-display text-xs uppercase tracking-wider text-gta-yellow hover:bg-gta-yellow/10"
            >
              RESET TELEMETRY FILTERS
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredMissions.length > displayCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                sound.playClick();
                setDisplayCount((prev) => prev + 12);
              }}
              className="interactive group rounded-md border border-gta-magenta/40 bg-gta-surface/80 px-8 py-3.5 font-display text-base uppercase tracking-wider text-gta-white transition-all hover:border-gta-yellow hover:text-gta-yellow hover:shadow-neonYellow"
            >
              LOAD MORE MISSIONS ({filteredMissions.length - displayCount} REMAINING)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
