"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  Html,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { SUBSYSTEMS, type Subsystem } from "@/data/hardware";

type V3 = [number, number, number];

const ACCENT = "#A8A7D8";
const AMBER = "#D4A24A";
const METAL = "#2a161a";
const METAL_LIGHT = "#3b2429";

const HOTSPOTS: { id: string; position: V3 }[] = [
  { id: "vision", position: [0, 2.6, 0.4] },
  { id: "localization", position: [2.2, 0.9, 0] },
  { id: "intake", position: [0, 1.4, 2.2] },
];

function Part({
  base,
  explodedPos,
  exploded,
  children,
}: {
  base: V3;
  explodedPos: V3;
  exploded: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  const tmp = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    if (!ref.current) return;
    const target = exploded ? explodedPos : base;
    tmp.current.set(target[0], target[1], target[2]);
    ref.current.position.lerp(tmp.current, 1 - Math.exp(-delta * 5));
  });

  return (
    <group ref={ref} position={base}>
      {children}
    </group>
  );
}

function Hotspot({
  position,
  label,
  active,
  onClick,
}: {
  position: V3;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Html position={position} center distanceFactor={9} zIndexRange={[20, 0]}>
      <button
        type="button"
        onClick={onClick}
        className={`group flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-medium backdrop-blur transition ${
          active
            ? "border-accent bg-accent/20 text-white"
            : "border-white/15 bg-ink-950/70 text-zinc-300 hover:border-accent/60"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            active ? "bg-accent" : "bg-zinc-500 group-hover:bg-accent"
          }`}
        />
        {label}
      </button>
    </Html>
  );
}

function Wheel({
  position,
  explodedPos,
  exploded,
}: {
  position: V3;
  explodedPos: V3;
  exploded: boolean;
}) {
  return (
    <Part base={position} explodedPos={explodedPos} exploded={exploded}>
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.3, 32]} />
        <meshStandardMaterial
          color={METAL_LIGHT}
          metalness={0.7}
          roughness={0.35}
        />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 0.34, 24]} />
        <meshStandardMaterial color={ACCENT} metalness={0.4} roughness={0.3} />
      </mesh>
    </Part>
  );
}

function Robot({
  exploded,
  autoRotate,
  selected,
  onSelect,
}: {
  exploded: boolean;
  autoRotate: boolean;
  selected: Subsystem | null;
  onSelect: (subsystem: Subsystem | null) => void;
}) {
  const turret = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (turret.current && autoRotate) {
      turret.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group>
      {/* chassis */}
      <Part base={[0, 0.55, 0]} explodedPos={[0, 0.55, 0]} exploded={exploded}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.0, 0.35, 2.2]} />
          <meshStandardMaterial color={METAL} metalness={0.85} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.19, 0]}>
          <boxGeometry args={[2.6, 0.1, 1.8]} />
          <meshStandardMaterial
            color={METAL_LIGHT}
            metalness={0.8}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0, -0.19, 0]}>
          <boxGeometry args={[2.2, 0.06, 1.6]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.35}
            metalness={0.2}
            roughness={0.4}
          />
        </mesh>
      </Part>

      {/* wheels */}
      <Wheel position={[1.55, 0.42, 1.05]} explodedPos={[2.3, 0.42, 1.6]} exploded={exploded} />
      <Wheel position={[-1.55, 0.42, 1.05]} explodedPos={[-2.3, 0.42, 1.6]} exploded={exploded} />
      <Wheel position={[1.55, 0.42, -1.05]} explodedPos={[2.3, 0.42, -1.6]} exploded={exploded} />
      <Wheel position={[-1.55, 0.42, -1.05]} explodedPos={[-2.3, 0.42, -1.6]} exploded={exploded} />

      {/* turret */}
      <Part base={[0, 0.95, 0]} explodedPos={[0, 1.7, 0]} exploded={exploded}>
        <mesh castShadow>
          <cylinderGeometry args={[0.55, 0.62, 0.28, 40]} />
          <meshStandardMaterial
            color={METAL_LIGHT}
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
        <group ref={turret}>
          <mesh position={[0, 0.28, 0.15]} castShadow>
            <boxGeometry args={[0.55, 0.34, 1.3]} />
            <meshStandardMaterial color={METAL} metalness={0.85} roughness={0.3} />
          </mesh>
          <mesh position={[0, 0.28, 1.05]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <cylinderGeometry args={[0.1, 0.12, 1.5, 24]} />
            <meshStandardMaterial
              color={METAL_LIGHT}
              metalness={0.9}
              roughness={0.25}
            />
          </mesh>
          <mesh position={[0, 0.28, 1.75]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.12, 24]} />
            <meshStandardMaterial
              color={AMBER}
              emissive={AMBER}
              emissiveIntensity={0.5}
              metalness={0.3}
              roughness={0.3}
            />
          </mesh>
        </group>
      </Part>

      {/* intake */}
      <Part base={[0, 0.5, 1.35]} explodedPos={[0, 0.5, 2.5]} exploded={exploded}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 1.6, 24]} />
          <meshStandardMaterial color={ACCENT} metalness={0.5} roughness={0.35} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 1.6, 24]} />
          <meshStandardMaterial color={ACCENT} metalness={0.5} roughness={0.35} />
        </mesh>
        <mesh position={[0, 0.16, -0.1]}>
          <boxGeometry args={[1.7, 0.1, 0.5]} />
          <meshStandardMaterial
            color={METAL_LIGHT}
            metalness={0.8}
            roughness={0.35}
          />
        </mesh>
      </Part>

      {/* control hub */}
      <Part base={[-0.95, 0.95, -0.35]} explodedPos={[-1.7, 1.5, -0.8]} exploded={exploded}>
        <mesh castShadow>
          <boxGeometry args={[0.55, 0.3, 0.45]} />
          <meshStandardMaterial
            color={METAL_LIGHT}
            metalness={0.8}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0, 0.16, 0]}>
          <boxGeometry args={[0.4, 0.02, 0.3]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.8}
            metalness={0.1}
            roughness={0.4}
          />
        </mesh>
      </Part>

      {/* odometry pods */}
      <Part base={[1.35, 0.2, 0]} explodedPos={[2.1, 0.2, 0]} exploded={exploded}>
        <mesh>
          <cylinderGeometry args={[0.14, 0.14, 0.16, 20]} />
          <meshStandardMaterial color={AMBER} metalness={0.5} roughness={0.35} />
        </mesh>
      </Part>
      <Part base={[0, 0.2, 1.35]} explodedPos={[0, 0.2, 2.1]} exploded={exploded}>
        <mesh>
          <cylinderGeometry args={[0.14, 0.14, 0.16, 20]} />
          <meshStandardMaterial color={AMBER} metalness={0.5} roughness={0.35} />
        </mesh>
      </Part>

      {/* hotspots */}
      {HOTSPOTS.map((hotspot) => {
        const subsystem = SUBSYSTEMS.find((s) => s.id === hotspot.id);
        if (!subsystem) return null;
        return (
          <Hotspot
            key={hotspot.id}
            position={hotspot.position}
            label={subsystem.name.split(" ")[0]}
            active={selected?.id === hotspot.id}
            onClick={() =>
              onSelect(selected?.id === hotspot.id ? null : subsystem)
            }
          />
        );
      })}
    </group>
  );
}

export default function RobotScene({
  exploded,
  autoRotate,
  selected,
  onSelect,
}: {
  exploded: boolean;
  autoRotate: boolean;
  selected: Subsystem | null;
  onSelect: (subsystem: Subsystem | null) => void;
}) {
  return (
    <Canvas
      shadows
      camera={{ position: [5.2, 3.6, 6.2], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 8, 4]} intensity={1.5} castShadow />
      <pointLight position={[-6, 3, -4]} intensity={30} color={ACCENT} />
      <pointLight position={[0, -3, 3]} intensity={15} color={AMBER} />

      <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.5}>
        <Robot
          exploded={exploded}
          autoRotate={autoRotate}
          selected={selected}
          onSelect={onSelect}
        />
      </Float>

      <Sparkles count={70} scale={[12, 6, 12]} size={2} speed={0.35} color={ACCENT} />
      <ContactShadows
        position={[0, -0.4, 0]}
        opacity={0.55}
        scale={14}
        blur={2.6}
        far={5}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  );
}
