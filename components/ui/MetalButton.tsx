"use client";

import React, { useState } from "react";
import { clsx } from "clsx";

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "obsidian" | "titanium" | "amber";
  size?: "sm" | "md" | "lg";
  hasIndicator?: boolean;
}

export default function MetalButton({
  children,
  variant = "obsidian",
  size = "md",
  hasIndicator = false,
  className,
  ...props
}: MetalButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const variantStyles = {
    obsidian:
      "bg-gradient-to-b from-[#1C1824] via-[#120D1A] to-[#08050C] border-t border-white/20 border-b border-black/80 text-luxury-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)]",
    titanium:
      "bg-gradient-to-b from-[#2A2433] via-[#1E1926] to-[#120F18] border-t border-white/25 border-b border-black text-luxury-white shadow-[0_8px_20px_-4px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]",
    amber:
      "bg-gradient-to-b from-[#FF8855] via-[#E65C38] to-[#C44322] border-t border-white/30 border-b border-[#7A240E] text-luxury-obsidian font-bold shadow-[0_8px_25px_-4px_rgba(255,122,69,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)]",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px]",
    md: "px-5 py-2.5 text-xs sm:text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base",
  };

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={clsx(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-widest font-semibold transition-all duration-200 select-none",
        variantStyles[variant],
        sizeStyles[size],
        isPressed ? "scale-[0.97] translate-y-0.5 shadow-none" : "hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {/* Precision Brushed Metallic Surface Lines */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-80" />

      {/* Optional Glowing LED Telemetry Indicator */}
      {hasIndicator && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxury-amber opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-luxury-amber" />
        </span>
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
        {children}
      </span>
    </button>
  );
}
