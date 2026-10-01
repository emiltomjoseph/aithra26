"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Moving Grid Road Component
function CyberRoad() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => {
    // Generate procedural grid texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#0c0316";
    ctx.fillRect(0, 0, 512, 512);

    // Glowing road border
    ctx.strokeStyle = "#D92BFF";
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 0, 492, 512);

    // Yellow center divider line
    ctx.fillStyle = "#E8FF4F";
    ctx.fillRect(250, 40, 12, 160);
    ctx.fillRect(250, 310, 12, 160);

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1, 14);
    return tex;
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      texture.offset.y -= delta * 1.8;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -2.4, -2]}>
      <planeGeometry args={[14, 50]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.2}
        metalness={0.7}
        emissive="#7A20C8"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

// Low-poly City Skyline Silhouette
function Skyline() {
  const buildings = useMemo(() => {
    const list = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      const x = (i - count / 2) * 1.5;
      const height = Math.random() * 4 + 2.5;
      const width = Math.random() * 0.8 + 0.6;
      const depth = Math.random() * 1.2 + 0.8;
      const color = i % 3 === 0 ? "#FF4FA3" : i % 2 === 0 ? "#7A20C8" : "#FF7448";
      list.push({ x, height, width, depth, color });
    }
    return list;
  }, []);

  return (
    <group position={[0, 0, -22]}>
      {buildings.map((b, idx) => (
        <mesh key={idx} position={[b.x, b.height / 2 - 1, 0]}>
          <boxGeometry args={[b.width, b.height, b.depth]} />
          <meshBasicMaterial color="#0e0419" />
          {/* Subtle glowing roof edge */}
          <lineSegments>
            <edgesGeometry args={[new THREE.BoxGeometry(b.width, b.height, b.depth)]} />
            <lineBasicMaterial color={b.color} transparent opacity={0.35} />
          </lineSegments>
        </mesh>
      ))}
    </group>
  );
}

// Floating Sunset Embers & Particles
function FloatingParticles() {
  const count = 120;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#FF7448"),
      new THREE.Color("#FF4FA3"),
      new THREE.Color("#E8FF4F"),
      new THREE.Color("#D92BFF"),
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = Math.random() * 12 - 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      const c = palette[Math.floor(Math.random() * palette.length)];
      cols[i * 3] = c.r;
      cols[i * 3 + 1] = c.g;
      cols[i * 3 + 2] = c.b;
    }
    return [pos, cols];
  }, []);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += delta * 0.45;
        if (posArray[i * 3 + 1] > 10) {
          posArray[i * 3 + 1] = -2;
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Sports Car Silhouette with Glowing Taillights
function SportsCar() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Subtle chassis bounce and engine vibration
      const t = clock.getElapsedTime();
      groupRef.current.position.y = -1.65 + Math.sin(t * 14) * 0.015;
      groupRef.current.rotation.z = Math.sin(t * 7) * 0.008;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.65, -0.5]}>
      {/* Car Body Main */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[1.7, 0.4, 3.2]} />
        <meshStandardMaterial color="#08020e" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Cabin Roof */}
      <mesh position={[0, 0.58, -0.2]}>
        <boxGeometry args={[1.2, 0.35, 1.6]} />
        <meshStandardMaterial color="#050109" roughness={0.05} metalness={0.95} />
      </mesh>

      {/* Rear Wing / Spoiler */}
      <mesh position={[0, 0.6, 1.45]}>
        <boxGeometry args={[1.6, 0.05, 0.3]} />
        <meshStandardMaterial color="#0d0418" metalness={0.8} />
      </mesh>

      {/* Glowing Twin Neon Taillights */}
      <mesh position={[-0.6, 0.32, 1.6]}>
        <boxGeometry args={[0.35, 0.06, 0.05]} />
        <meshBasicMaterial color="#FF2255" />
      </mesh>
      <mesh position={[0.6, 0.32, 1.6]}>
        <boxGeometry args={[0.35, 0.06, 0.05]} />
        <meshBasicMaterial color="#FF2255" />
      </mesh>

      {/* Underglow Neon Strip */}
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[1.5, 0.02, 2.8]} />
        <meshBasicMaterial color="#D92BFF" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

// Scene Root with Canvas
export default function CityScene() {
  return (
    <div className="absolute inset-0 h-full w-full pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.8, 5.5], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#10051C"]} />
        <fog attach="fog" args={["#10051C", 6, 26]} />

        {/* Ambient & Atmospheric Lighting */}
        <ambientLight intensity={0.4} color="#7A20C8" />
        <directionalLight position={[0, 8, -10]} intensity={1.2} color="#FF7448" />
        <pointLight position={[0, 2, 2]} intensity={2} color="#D92BFF" distance={10} />
        <pointLight position={[0, 0, 0]} intensity={1.5} color="#FF4FA3" distance={6} />

        {/* 3D Elements */}
        <CyberRoad />
        <SportsCar />
        <Skyline />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
