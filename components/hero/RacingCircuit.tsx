"use client";

import { useMemo } from "react";
import * as THREE from "three";

export default function RacingCircuit() {
  // Generate asphalt and track line textures
  const { asphaltTexture, curbTexture } = useMemo(() => {
    // 1. Asphalt Road Texture with lane markings
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d")!;

    // Dark asphalt base
    ctx.fillStyle = "#0c0a10";
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle asphalt grain noise
    for (let i = 0; i < 40000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      const c = Math.random() > 0.5 ? 20 : 8;
      ctx.fillStyle = `rgb(${c}, ${c}, ${c + 4})`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }

    // White track border lines
    ctx.fillStyle = "rgba(245, 243, 247, 0.85)";
    ctx.fillRect(80, 0, 16, 1024);
    ctx.fillRect(928, 0, 16, 1024);

    // White dashed center guide line
    ctx.fillStyle = "rgba(245, 243, 247, 0.6)";
    for (let y = 0; y < 1024; y += 128) {
      ctx.fillRect(506, y, 12, 64);
    }

    const asphaltTex = new THREE.CanvasTexture(canvas);
    asphaltTex.wrapS = THREE.RepeatWrapping;
    asphaltTex.wrapT = THREE.RepeatWrapping;
    asphaltTex.repeat.set(1, 16);

    // 2. Red & White Racing Curbs / Kerbs
    const curbCanvas = document.createElement("canvas");
    curbCanvas.width = 128;
    curbCanvas.height = 512;
    const curbCtx = curbCanvas.getContext("2d")!;

    for (let y = 0; y < 512; y += 64) {
      curbCtx.fillStyle = "#d92231"; // Track Red
      curbCtx.fillRect(0, y, 128, 32);
      curbCtx.fillStyle = "#f5f3f7"; // Track White
      curbCtx.fillRect(0, y + 32, 128, 32);
    }

    const curbTex = new THREE.CanvasTexture(curbCanvas);
    curbTex.wrapS = THREE.RepeatWrapping;
    curbTex.wrapT = THREE.RepeatWrapping;
    curbTex.repeat.set(1, 16);

    return { asphaltTexture: asphaltTex, curbTexture: curbTex };
  }, []);

  // Distant City Skyline Silhouettes
  const skylineBuildings = useMemo(() => {
    const list = [];
    const count = 40;
    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * 2.2;
      const height = Math.random() * 6 + 3;
      const width = Math.random() * 1.2 + 0.8;
      const depth = Math.random() * 1.5 + 0.8;
      list.push({ x, height, width, depth });
    }
    return list;
  }, []);

  return (
    <group position={[0, 0, 0]}>
      {/* Main Asphalt Race Track */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -15]} receiveShadow>
        <planeGeometry args={[16, 70]} />
        <meshStandardMaterial
          map={asphaltTexture}
          roughness={0.45}
          metalness={0.3}
          color="#121016"
        />
      </mesh>

      {/* Left Red/White Curb */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-8.3, 0.02, -15]}>
        <planeGeometry args={[0.6, 70]} />
        <meshStandardMaterial map={curbTexture} roughness={0.5} />
      </mesh>

      {/* Right Red/White Curb */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8.3, 0.02, -15]}>
        <planeGeometry args={[0.6, 70]} />
        <meshStandardMaterial map={curbTexture} roughness={0.5} />
      </mesh>

      {/* Extended Track Runoff Turf / Gravel */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, -15]}>
        <planeGeometry args={[80, 70]} />
        <meshStandardMaterial roughness={0.9} color="#060508" />
      </mesh>

      {/* Distant Skyline on Horizon */}
      <group position={[0, 0, -48]}>
        {skylineBuildings.map((b, i) => (
          <mesh key={i} position={[b.x, b.height / 2 - 0.5, 0]}>
            <boxGeometry args={[b.width, b.height, b.depth]} />
            <meshBasicMaterial color="#08050e" />
          </mesh>
        ))}

        {/* Soft Sunset Glow Strip behind skyline */}
        <mesh position={[0, 2.5, -2]}>
          <planeGeometry args={[90, 8]} />
          <meshBasicMaterial
            color="#FF7A45"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Distant Palm Silhouettes along circuit boundaries */}
      {[-12, -16, 12, 16].map((xPos, idx) => (
        <group key={idx} position={[xPos, 0, -28 - (idx % 2) * 8]}>
          <mesh position={[0, 2, 0]}>
            <cylinderGeometry args={[0.08, 0.14, 4, 8]} />
            <meshBasicMaterial color="#07040b" />
          </mesh>
          <mesh position={[0, 3.8, 0]}>
            <sphereGeometry args={[1.1, 8, 8]} />
            <meshBasicMaterial color="#07040b" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
