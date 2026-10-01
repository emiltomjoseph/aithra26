"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import BorderBeam from "./BorderBeam";

interface BorderBeamButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "amber" | "violet" | "white";
  size?: "sm" | "md" | "lg";
}

export default function BorderBeamButton({
  children,
  className,
  glowColor = "amber",
  size = "md",
  ...props
}: BorderBeamButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors = {
    amber: { from: "#FF7A45", to: "#E65C38" },
    violet: { from: "#9A4BFF", to: "#6D28D9" },
    white: { from: "#FFFFFF", to: "#A3A3A3" },
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs sm:text-sm",
    lg: "px-8 py-4 text-sm sm:text-base",
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-display uppercase tracking-widest font-bold transition-all duration-300",
        "bg-gradient-to-b from-[#18141F] to-[#0A0710] text-luxury-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.8)]",
        "border border-white/10 hover:border-white/25 active:scale-[0.98]",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Laser Border Beam flowing on button border */}
      <BorderBeam
        size={90}
        duration={5}
        colorFrom={colors[glowColor].from}
        colorTo={colors[glowColor].to}
      />

      {/* Specular Light Sheen Sweeping Across on Hover */}
      <span
        className={clsx(
          "pointer-events-none absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-700 ease-out",
          isHovered && "left-[150%]"
        )}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-[1.02]">
        {children}
      </span>
    </button>
  );
}
