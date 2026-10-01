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

    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      // Deep obsidian dusk sky
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#050505");
      grad.addColorStop(0.45, "#0d0914");
      grad.addColorStop(0.7, "#1a1024");
      grad.addColorStop(0.85, "#301524");
      grad.addColorStop(1, "#FF7A45");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Distant dark skyline
      ctx.fillStyle = "#07040b";
      const bCount = 28;
      const bWidth = w / bCount;
      for (let i = 0; i < bCount; i++) {
        const bHeight = 80 + ((i * 47) % 150);
        ctx.fillRect(i * bWidth, h * 0.68 - bHeight, bWidth + 2, bHeight);
      }

      // Asphalt Track Surface
      ctx.fillStyle = "#0a080e";
      ctx.fillRect(0, h * 0.68, w, h * 0.32);

      // Red & White Track Curbs on Sides
      ctx.fillStyle = "#d92231";
      ctx.fillRect(w * 0.15, h * 0.68, 8, h * 0.32);
      ctx.fillRect(w * 0.85, h * 0.68, 8, h * 0.32);

      // White track lines
      offset = (offset + 1.5) % 40;
      ctx.strokeStyle = "rgba(245, 243, 247, 0.4)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.22, h * 0.68);
      ctx.lineTo(w * 0.22, h);
      ctx.moveTo(w * 0.78, h * 0.68);
      ctx.lineTo(w * 0.78, h);
      ctx.stroke();

      // Center dashed line
      ctx.strokeStyle = "rgba(245, 243, 247, 0.3)";
      ctx.lineWidth = 3;
      ctx.setLineDash([20, 20]);
      ctx.lineDashOffset = -offset;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.68);
      ctx.lineTo(w * 0.5, h);
      ctx.stroke();
      ctx.setLineDash([]);

      // Headlight Beams projecting forward
      const beamGrad = ctx.createRadialGradient(
        w * 0.5, h * 0.76, 10,
        w * 0.5, h * 0.9, w * 0.4
      );
      beamGrad.addColorStop(0, "rgba(255, 248, 235, 0.25)");
      beamGrad.addColorStop(0.5, "rgba(255, 248, 235, 0.08)");
      beamGrad.addColorStop(1, "transparent");
      ctx.fillStyle = beamGrad;
      ctx.fillRect(0, h * 0.7, w, h * 0.3);

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
    </div>
  );
}
