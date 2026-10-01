"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import PorscheModel, { PorschePlaceholder } from "./PorscheModel";
import RacingCircuit from "./RacingCircuit";
import CircuitLighting from "./CircuitLighting";

interface HeroCanvasProps {
  mouse: { x: number; y: number };
  scrollProgress: number;
}

// Camera controller with subtle road-level perspective and mouse parallax
function RoadCamera({ mouse, scrollProgress }: { mouse: { x: number; y: number }; scrollProgress: number }) {
  const cameraRef = useRef<{ camX: number; camY: number; camZ: number }>({
    camX: 0,
    camY: 0.92,
    camZ: 4.6,
  });

  useFrame(({ camera }, delta) => {
    const c = cameraRef.current;

    // Subtle parallax tracking cursor
    const targetCamX = mouse.x * 0.45;
    const targetCamY = 0.9 + mouse.y * 0.16;

    let targetCamZ = 4.6;
    if (scrollProgress > 0.6) {
      targetCamZ = 4.6 - (scrollProgress - 0.6) * 3.2;
    }

    c.camX = THREE.MathUtils.lerp(c.camX, targetCamX, delta * 3.5);
    c.camY = THREE.MathUtils.lerp(c.camY, targetCamY, delta * 3.5);
    c.camZ = THREE.MathUtils.lerp(c.camZ, targetCamZ, delta * 3.5);

    camera.position.set(c.camX, c.camY, c.camZ);

    // Look directly at the car's front aerodynamic chassis
    camera.lookAt(c.camX * 0.2, 0.52, 0.2);
  });

  return null;
}

export default function HeroCanvas({ mouse, scrollProgress }: HeroCanvasProps) {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.92, 4.6], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        shadows
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 14, 46]} />

        {/* Cinematic Lighting System */}
        <CircuitLighting />

        {/* Road-Level Parallax Camera */}
        <RoadCamera mouse={mouse} scrollProgress={scrollProgress} />

        {/* Porsche 911 GT3 RS with Physics Steering */}
        <Suspense fallback={<PorschePlaceholder mouse={mouse} />}>
          <PorscheModel mouse={mouse} scrollProgress={scrollProgress} />
        </Suspense>

        {/* Realistic Racing Circuit */}
        <RacingCircuit />
      </Canvas>
    </div>
  );
}
