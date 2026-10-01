"use client";

import React, { useRef, useState, useEffect } from "react";
import { clsx } from "clsx";

export interface ButtonGroupItem {
  id: string;
  label: string;
  count?: number;
}

interface GradientButtonGroupProps {
  items: ButtonGroupItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export default function GradientButtonGroup({
  items,
  activeId,
  onChange,
  className,
  size = "md",
}: GradientButtonGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  // Calculate indicator position when activeId or items change
  useEffect(() => {
    if (!containerRef.current) return;
    const activeIndex = items.findIndex((item) => item.id === activeId);
    if (activeIndex === -1) return;

    const buttons = containerRef.current.querySelectorAll("button");
    const targetBtn = buttons[activeIndex];
    if (targetBtn) {
      setIndicatorStyle({
        left: targetBtn.offsetLeft,
        width: targetBtn.offsetWidth,
      });
    }
  }, [activeId, items]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "relative flex items-center gap-1 rounded-full p-1.5 overflow-x-auto no-scrollbar",
        "bg-[#0A0710]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* Dynamic Animated Active Underlay Pill */}
      <div
        className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
        }}
      >
        {/* Subtle Radial Gradient Sheen */}
        <div className="h-full w-full rounded-full bg-gradient-to-r from-luxury-amber/25 via-white/10 to-luxury-violet/25 border border-white/20 shadow-[0_0_20px_rgba(255,122,69,0.18)]" />
      </div>

      {/* Button Group Items */}
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={clsx(
              "relative z-10 flex items-center gap-2 rounded-full font-display uppercase tracking-widest transition-colors duration-200 select-none whitespace-nowrap",
              size === "sm" ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-xs",
              isActive
                ? "text-luxury-white font-bold"
                : "text-luxury-muted hover:text-luxury-white"
            )}
          >
            <span>{item.label}</span>
            {item.count !== undefined && (
              <span
                className={clsx(
                  "font-mono text-[10px] rounded-full px-1.5 py-0.2",
                  isActive
                    ? "bg-luxury-amber text-luxury-obsidian font-bold"
                    : "bg-white/5 text-luxury-dim"
                )}
              >
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
