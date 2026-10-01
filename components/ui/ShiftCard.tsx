"use client";

import React, { useRef, useState } from "react";
import { clsx } from "clsx";

interface ShiftCardProps {
  children: React.ReactNode;
  className?: string;
  chamfer?: boolean;
}

export default function ShiftCard({
  children,
  className,
  chamfer = false,
}: ShiftCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalised coordinates (-0.5 to 0.5)
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    // Subtle 3D tilt: max 8 degrees
    setRotateX(-normY * 10);
    setRotateY(normX * 10);
    setSpotlightPos({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlightPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)",
      }}
      className={clsx(
        "group relative overflow-hidden transition-all duration-300",
        "bg-gradient-to-b from-[#130E1C]/90 via-[#0B0812]/95 to-[#050408]",
        "border border-white/10 hover:border-white/25",
        "shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)]",
        chamfer ? "chamfer-corner" : "rounded-xl",
        className
      )}
    >
      {/* Dynamic Cursor-Following Specular Spotlight (Cult UI signature) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: spotlightPos.opacity,
          background: `radial-gradient(450px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 122, 69, 0.12), rgba(154, 75, 255, 0.06), transparent 60%)`,
        }}
      />

      {/* Subtle Top Rim Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col h-full">{children}</div>
    </div>
  );
}
