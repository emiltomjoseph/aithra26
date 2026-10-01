"use client";

export default function CircuitLighting() {
  return (
    <>
      {/* Cool Dusk Violet Ambient Base */}
      <ambientLight intensity={0.65} color="#20152e" />

      {/* Warm Sunset Directional Rim Light (from horizon / rear side) */}
      <directionalLight
        position={[6, 8, -25]}
        intensity={2.8}
        color="#FF7A45"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={60}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-1}
      />

      {/* Subtle Front-Fill Sky Light */}
      <directionalLight position={[-4, 6, 10]} intensity={0.4} color="#a684d9" />

      {/* Trackside Lamp Posts (Subtle overhead illumination) */}
      <pointLight position={[-9, 4, -8]} color="#fff0db" intensity={1.5} distance={16} />
      <pointLight position={[9, 4, -8]} color="#fff0db" intensity={1.5} distance={16} />
      <pointLight position={[-9, 4, -20]} color="#fff0db" intensity={1.2} distance={16} />
      <pointLight position={[9, 4, -20]} color="#fff0db" intensity={1.2} distance={16} />
    </>
  );
}
