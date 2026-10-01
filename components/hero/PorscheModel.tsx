"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface PorscheModelProps {
  mouse: { x: number; y: number };
  scrollProgress: number; // 0 to 1
}

export default function PorscheModel({ mouse, scrollProgress }: PorscheModelProps) {
  const { scene } = useGLTF("/models/porsche.glb");
  const carGroupRef = useRef<THREE.Group>(null);
  const frontWheelsRef = useRef<THREE.Group[]>([]);

  // Physics state for realistic inertia & weight damping
  const physics = useRef({
    currentSteer: 0,
    currentYaw: 0,
    currentRoll: 0,
    currentPitch: 0,
    currentZ: 0.2,
    currentX: 0,
    wheelSpin: 0,
  });

  // Clone scene & configure high-end PBR materials
  const clonedScene = useMemo(() => {
    const s = scene.clone(true);
    frontWheelsRef.current = [];

    s.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        const matName = Array.isArray(mesh.material)
          ? mesh.material[0]?.name
          : mesh.material?.name;

        // Apply luxury PBR automotive shaders based on material names
        if (matName === "paint") {
          // Midnight metallic dusk paint
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#18141e"),
            metalness: 0.85,
            roughness: 0.18,
            clearcoat: 1.0,
            clearcoatRoughness: 0.05,
            reflectivity: 0.9,
          });
        } else if (matName === "window" || matName === "glass") {
          // Dark tinted automotive glass
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color("#050308"),
            metalness: 0.1,
            roughness: 0.05,
            transmission: 0.7,
            transparent: true,
            opacity: 0.85,
          });
        } else if (matName === "lights") {
          // Crisp xenon headlight glass
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#ffffff"),
            emissive: new THREE.Color("#fff5ea"),
            emissiveIntensity: 3.5,
            roughness: 0.1,
          });
        } else if (matName === "rubber") {
          // Matte performance tires
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#111111"),
            roughness: 0.9,
            metalness: 0.1,
          });
        } else if (matName === "silver") {
          // Brushed silver brake discs & trims
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#cccccc"),
            roughness: 0.25,
            metalness: 0.9,
          });
        }
      }

      // Identify front wheel nodes (Cylinder.000 / Cylinder.001)
      if (obj.name && obj.name.includes("Cylinder")) {
        frontWheelsRef.current.push(obj as THREE.Group);
      }
    });

    return s;
  }, [scene]);

  useFrame((_, delta) => {
    if (!carGroupRef.current) return;

    const p = physics.current;

    // 1. Calculate Target Physics parameters from Normalized Mouse (-1 to +1)
    // Front wheel max steering: ~15 degrees (0.26 rad)
    const targetSteer = -mouse.x * 0.26;

    // Vehicle body max yaw: ~8 degrees (0.14 rad)
    const targetYaw = -mouse.x * 0.14;

    // Centrifugal body roll: subtle tilt on Z-axis opposite to steering
    const targetRoll = mouse.x * 0.035;

    // Subtle pitch response to mouse Y
    const targetPitch = mouse.y * 0.025;

    // 2. Multi-stage Inertia Damping:
    // Front wheels react first (stiff steering rack, lerp 0.14)
    p.currentSteer = THREE.MathUtils.lerp(p.currentSteer, targetSteer, delta * 8);

    // Chassis body follows with inertia & weight (heavy vehicle chassis, lerp 0.04)
    p.currentYaw = THREE.MathUtils.lerp(p.currentYaw, targetYaw, delta * 3.5);
    p.currentRoll = THREE.MathUtils.lerp(p.currentRoll, targetRoll, delta * 3.5);
    p.currentPitch = THREE.MathUtils.lerp(p.currentPitch, targetPitch, delta * 4);

    // 3. Forward Translation driven by Scroll Progress
    // Start foreground at Z = 0.2 (prominent, heroic, close-up)
    let targetZ = 0.2 + scrollProgress * 12.0;
    let targetX = mouse.x * 0.35;

    if (scrollProgress > 0.6) {
      const exitProgress = (scrollProgress - 0.6) / 0.4;
      targetX += exitProgress * 3.8; // Bank to side as it exits
      targetZ += exitProgress * 6.0;
    }

    p.currentZ = THREE.MathUtils.lerp(p.currentZ, targetZ, delta * 4);
    p.currentX = THREE.MathUtils.lerp(p.currentX, targetX, delta * 3.5);

    // 4. Tire rotation based on forward movement
    p.wheelSpin += delta * 12;

    // Apply wheel rotation and steering angle
    frontWheelsRef.current.forEach((wheel) => {
      wheel.rotation.y = p.currentSteer;
      wheel.rotation.x = p.wheelSpin;
    });

    // 5. Apply transformations to main vehicle group
    carGroupRef.current.position.set(p.currentX, 0, p.currentZ);
    carGroupRef.current.rotation.set(p.currentPitch, p.currentYaw, p.currentRoll);
  });

  return (
    <group ref={carGroupRef} position={[0, 0, 0.2]} scale={[1.35, 1.35, 1.35]}>
      {/* Ground Contact Shadow Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[2.8, 5.2]} />
        <meshBasicMaterial
          color="#000000"
          transparent
          opacity={0.75}
          depthWrite={false}
        />
      </mesh>

      {/* Headlight Cones (Left & Right) */}
      <group position={[0, 0.55, 1.8]}>
        {/* Left Beam */}
        <spotLight
          position={[-0.65, 0, 0]}
          target-position={[-0.65, -0.5, 12]}
          angle={0.4}
          penumbra={0.7}
          intensity={8}
          color="#fff8eb"
          distance={28}
          castShadow
        />
        {/* Right Beam */}
        <spotLight
          position={[0.65, 0, 0]}
          target-position={[0.65, -0.5, 12]}
          angle={0.4}
          penumbra={0.7}
          intensity={8}
          color="#fff8eb"
          distance={28}
          castShadow
        />
      </group>

      {/* Taillight Red Ambient Spill */}
      <pointLight position={[0, 0.6, -2.1]} color="#ff1133" intensity={2.2} distance={4} />

      {/* The Porsche 3D Geometry */}
      <primitive object={clonedScene} />
    </group>
  );
}

export function PorschePlaceholder({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, -mouse.x * 0.14, 0.05);
    }
  });
  return (
    <group ref={ref} position={[0, 0, 0.2]} scale={[1.35, 1.35, 1.35]}>
      {/* Shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[2.8, 5.2]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.7} depthWrite={false} />
      </mesh>
      {/* Low GT Chassis */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[1.9, 0.45, 4.4]} />
        <meshStandardMaterial color="#14111a" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Cabin */}
      <mesh position={[0, 0.72, -0.3]}>
        <boxGeometry args={[1.35, 0.4, 2.0]} />
        <meshStandardMaterial color="#08050e" roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Headlights */}
      <mesh position={[-0.7, 0.4, 2.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.7, 0.4, 2.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/porsche.glb");
