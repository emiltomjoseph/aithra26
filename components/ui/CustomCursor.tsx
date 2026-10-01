"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("[role='button']") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer crosshair ring */}
      <div
        className="fixed top-0 left-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.8 : isHovered ? 1.6 : 1
          })`,
        }}
      >
        <div
          className={`relative h-9 w-9 rounded-full border transition-all duration-200 ${
            isHovered
              ? "border-gta-yellow shadow-neonYellow bg-gta-yellow/10"
              : "border-gta-magenta/80 shadow-neonPink"
          }`}
        >
          {/* Tactical crosshair notches */}
          <div className="absolute -top-1 left-1/2 h-1.5 w-0.5 -translate-x-1/2 bg-gta-yellow" />
          <div className="absolute -bottom-1 left-1/2 h-1.5 w-0.5 -translate-x-1/2 bg-gta-yellow" />
          <div className="absolute -left-1 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-gta-yellow" />
          <div className="absolute -right-1 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-gta-yellow" />
        </div>
      </div>

      {/* Center dot */}
      <div
        className="fixed top-0 left-0"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-150 ${
            isHovered ? "bg-gta-yellow" : "bg-gta-pink"
          }`}
        />
      </div>
    </div>
  );
}
