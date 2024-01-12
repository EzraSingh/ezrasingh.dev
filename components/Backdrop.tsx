"use client";
import { Suspense, createRef, useRef } from "react";
import { Point, Points, useTexture } from "@react-three/drei";
import { Canvas, ThreeElements } from "@react-three/fiber";

const Scene = () => {
  const starTexture = useTexture("/star.png");
  const radius = 0.5;

  return (
    <Points
      limit={1000}
      range={1000}
      positions={new Float32Array([0, 0, 0, 1, 0, 0])}
    >
      <pointsMaterial
        attach="material"
        map={starTexture}
        color={0x00aaff}
        size={radius}
        sizeAttenuation
        transparent={true}
        alphaTest={0.5}
        opacity={1.0}
      />
    </Points>
  );
};

export const Backdrop = () => (
  <Canvas
    className="z-50 inset-0 overflow-hidden"
    style={{ position: "fixed", height: "auto", width: "auto" }}
    frameloop="demand"
    camera={{ position: [0, 0, 10], fov: 75 }}
  >
    <ambientLight intensity={0.1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  </Canvas>
);
