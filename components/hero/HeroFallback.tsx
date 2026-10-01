"use client";

import { useEffect, useRef } from "react";

export default function HeroFallback() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Particle embers
    const particles: Array<{ x: number; y: number; s: number; vy: number; c: string }> = [];
    const colors = ["#E8FF4F", "#FF4FA3", "#D92BFF", "#FF7448"];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        s: Math.random() * 2.5 + 1,
        vy: Math.random() * 0.8 + 0.3,
        c: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Deep sunset gradient
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#10051C");
      grad.addColorStop(0.45, "#1C0A2E");
      grad.addColorStop(0.7, "#7A20C8");
      grad.addColorStop(0.85, "#FF4FA3");
      grad.addColorStop(1, "#FF7448");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Distant Skyline Silhouette
      ctx.fillStyle = "#0c0316";
      const bCount = 20;
      const bWidth = w / bCount;
      for (let i = 0; i < bCount; i++) {
        const bHeight = 120 + ((i * 37) % 180);
        ctx.fillRect(i * bWidth, h * 0.72 - bHeight, bWidth + 2, bHeight);
      }

      // Moving road lines
      offset = (offset + 3) % 40;
      ctx.fillStyle = "#07020b";
      ctx.fillRect(0, h * 0.72, w, h * 0.28);

      // Road glow borders
      ctx.strokeStyle = "rgba(217, 43, 255, 0.4)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.72);
      ctx.lineTo(w, h * 0.72);
      ctx.stroke();

      // Yellow dashed center divider
      ctx.strokeStyle = "#E8FF4F";
      ctx.lineWidth = 4;
      ctx.setLineDash([25, 20]);
      ctx.lineDashOffset = -offset;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.72);
      ctx.lineTo(w * 0.5, h);
      ctx.stroke();
      ctx.setLineDash([]);

      // Floating Embers
      particles.forEach((p) => {
        p.y -= p.vy;
        if (p.y < 0) {
          p.y = h;
          p.x = Math.random() * w;
        }
        ctx.fillStyle = p.c;
        ctx.shadowColor = p.c;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full object-cover" />
      {/* Palm silhouettes on corners */}
      <div className="absolute -left-12 bottom-12 h-64 w-64 opacity-40 pointer-events-none filter drop-shadow-[0_0_15px_rgba(217,43,255,0.4)]">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-[#050109]">
          <path d="M50 100 Q48 60 52 40 Q40 45 25 35 Q45 35 52 38 Q50 20 54 5 Q56 25 55 38 Q68 25 80 32 Q65 38 56 40 Q62 60 50 100 Z" />
        </svg>
      </div>
      <div className="absolute -right-12 bottom-12 h-80 w-80 opacity-40 pointer-events-none filter drop-shadow-[0_0_15px_rgba(255,79,163,0.4)] scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-[#050109]">
          <path d="M50 100 Q48 60 52 40 Q40 45 25 35 Q45 35 52 38 Q50 20 54 5 Q56 25 55 38 Q68 25 80 32 Q65 38 56 40 Q62 60 50 100 Z" />
        </svg>
      </div>
    </div>
  );
}
