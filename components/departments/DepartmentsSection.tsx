"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";

interface DepartmentsSectionProps {
  onSelectDepartment: (dept: string) => void;
}

export default function DepartmentsSection({ onSelectDepartment }: DepartmentsSectionProps) {
  const departments = [
    {
      name: "Computer Science & IT",
      code: "CS",
      events: "9 EVENTS",
      filterValue: "Computer Science & IT",
    },
    {
      name: "Mechanical Engineering",
      code: "ME",
      events: "7 EVENTS",
      filterValue: "Mechanical Engineering",
    },
    {
      name: "Gaming & Esports",
      code: "GAME",
      events: "6 EVENTS",
      filterValue: "Gaming & Esports",
    },
    {
      name: "Civil Engineering",
      code: "CE",
      events: "4 EVENTS",
      filterValue: "Civil Engineering",
    },
    {
      name: "Chemical & Biotech",
      code: "CH",
      events: "4 EVENTS",
      filterValue: "Chemical & Biotech",
    },
    {
      name: "Electrical & Electronics Engineering",
      code: "EE",
      events: "3 EVENTS",
      filterValue: "Electrical & Electronics (EEE)",
    },
    {
      name: "Electronics & Communication Engineering",
      code: "EC",
      events: "2 EVENTS",
      filterValue: "Electronics & Comm (ECE)",
    },
    {
      name: "General & Inter-Departmental",
      code: "GENERAL",
      events: "39 EVENTS",
      filterValue: "General & Inter-Departmental",
    },
    {
      name: "Informal & Cultural Arena",
      code: "INFORMAL",
      events: "ALL EVENTS",
      filterValue: "All Departments",
    },
  ];

  const handleCardClick = (deptFilter: string) => {
    onSelectDepartment(deptFilter);
    const elem = document.querySelector("#events");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="departments" className="relative w-full bg-[#050408] py-32 border-t border-white/10 overflow-hidden">
      {/* Reference Image 2: Atmospheric Center Mist Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-12">
        {/* Reference Image 2: Spaced DEPARTMENTS Header */}
        <div className="text-center mb-8">
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-[0.35em] text-white">
            D E P A R T M E N T S
          </h2>

          <div className="mt-3 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            <span>9 DEPTS</span>
            <span className="opacity-40">•</span>
            <span>74+ EVENTS</span>
          </div>
        </div>

        {/* Reference Image 2: Centerpiece Visual Character in Glowing Smoke */}
        <div className="relative mx-auto max-w-sm aspect-[4/3] flex items-center justify-center mb-12">
          {/* Glowing Aura Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl" />

          {/* Masked Icon / Automotive Centerpiece */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80"
              alt="Departments Apex Guardian"
              fill
              className="object-contain filter drop-shadow-[0_10px_30px_rgba(16,185,129,0.35)] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050408] via-transparent to-transparent opacity-90" />
          </div>
        </div>

        {/* Reference Image 2: 3-Column Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((dept, index) => (
            <div
              key={dept.name}
              onClick={() => handleCardClick(dept.filterValue)}
              className={clsx(
                "group relative cursor-pointer rounded-2xl p-6 transition-all duration-300",
                "bg-[#090710]/90 backdrop-blur-xl border border-white/10",
                "hover:border-emerald-500/40 hover:bg-[#0E0C18] hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]",
                "flex flex-col justify-between min-h-[140px]"
              )}
            >
              {/* Top Row: Department Name & Arrow ↗ */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg sm:text-xl uppercase tracking-wide text-white transition-colors duration-200 group-hover:text-emerald-400">
                  {dept.name}
                </h3>
                <div className="rounded-full p-1.5 text-emerald-400/80 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-all">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Row: Code and Event Count Badge (Matching Image 2) */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-emerald-400 font-medium">
                <span>{dept.code} — {dept.events}</span>
                <span className="text-[10px] text-luxury-dim group-hover:text-white transition-colors">
                  ENTER →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
