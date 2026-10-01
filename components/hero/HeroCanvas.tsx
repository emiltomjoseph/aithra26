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
    camY: 0.8,
    camZ: 4.8,
  });

  useFrame(({ camera }, delta) => {
    const c = cameraRef.current;

    // Subtle 5-10% camera parallax based on mouse
    const targetCamX = mouse.x * 0.45;
    const targetCamY = 0.75 + mouse.y * 0.18;

    // As user scrolls past 0.8, camera lifts slightly and tilts down
    let targetCamZ = 4.8;
    if (scrollProgress > 0.8) {
      targetCamZ = 4.8 - (scrollProgress - 0.8) * 4.0;
    }

    c.camX = THREE.MathUtils.lerp(c.camX, targetCamX, delta * 3.5);
    c.camY = THREE.MathUtils.lerp(c.camY, targetCamY, delta * 3.5);
    c.camZ = THREE.MathUtils.lerp(c.camZ, targetCamZ, delta * 3.5);

    camera.position.set(c.camX, c.camY, c.camZ);

    // Look slightly ahead at the road
    camera.lookAt(c.camX * 0.3, 0.45, -6);
  });

  return null;
}

export default function HeroCanvas({ mouse, scrollProgress }: HeroCanvasProps) {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.8, 4.8], fov: 32 }}
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
