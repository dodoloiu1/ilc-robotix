"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { SUBSYSTEMS, type Subsystem } from "@/data/hardware";

const RobotScene = dynamic(() => import("./robot-scene"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="flex items-center gap-3 text-sm text-zinc-500">
        <span className="h-2 w-2 animate-ping rounded-full bg-accent" />
        Initializing 3D hardware view…
      </div>
    </div>
  ),
});

const TELEMETRY = [
  { label: "Battery", value: "12.8 V" },
  { label: "Turret", value: "0.0°" },
  { label: "Pose", value: "x 0.00 · y 0.00" },
  { label: "Loop", value: "16 ms" },
];

export default function RobotShowcase() {
  const [exploded, setExploded] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [selected, setSelected] = useState<Subsystem | null>(null);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent" />
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        <RobotScene
          exploded={exploded}
          autoRotate={autoRotate}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* HUD: top-left */}
      <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-white/10 bg-ink-950/60 px-3 py-2 backdrop-blur">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Chassis // #25145
        </div>
        <div className="mt-1 text-xs font-semibold text-white">
          {selected ? selected.name : "Interactive hardware explorer"}
        </div>
      </div>

      {/* HUD: top-right telemetry */}
      <div className="pointer-events-none absolute right-4 top-4 hidden rounded-xl border border-white/10 bg-ink-950/60 px-3 py-2 backdrop-blur sm:block">
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {TELEMETRY.map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                {item.label}
              </div>
              <div className="font-mono text-[11px] text-accent-soft">
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-1 text-[9px] text-zinc-600">simulated telemetry</div>
      </div>

      {/* HUD: bottom controls */}
      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setExploded((value) => !value)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur transition ${
            exploded
              ? "border-accent bg-accent/20 text-white"
              : "border-white/15 bg-ink-950/60 text-zinc-300 hover:border-accent/60"
          }`}
        >
          {exploded ? "Assemble" : "Exploded view"}
        </button>
        <button
          type="button"
          onClick={() => setAutoRotate((value) => !value)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur transition ${
            autoRotate
              ? "border-accent bg-accent/20 text-white"
              : "border-white/15 bg-ink-950/60 text-zinc-300 hover:border-accent/60"
          }`}
        >
          Turret {autoRotate ? "on" : "off"}
        </button>
      </div>

      {/* HUD: subsystem detail */}
      <div className="pointer-events-none absolute bottom-4 right-4 hidden w-64 rounded-xl border border-white/10 bg-ink-950/70 p-4 backdrop-blur md:block">
        {selected ? (
          <>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              /{selected.code}
            </div>
            <div className="mt-1 text-sm font-semibold text-white">
              {selected.name}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-zinc-400">
              {selected.tagline}
            </p>
            <ul className="mt-2 space-y-1">
              {selected.bullets.slice(0, 2).map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-1.5 text-[11px] text-zinc-500"
                >
                  <span className="mt-1.5 h-0.5 w-0.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-[11px] leading-relaxed text-zinc-500">
            Drag to orbit the robot. Select a hotspot to inspect a subsystem —
            vision, localization or intake.
          </p>
        )}
      </div>

      {/* subsystem quick nav */}
      <div className="absolute left-1/2 top-4 hidden -translate-x-1/2 gap-2 md:flex">
        {SUBSYSTEMS.map((subsystem) => (
          <button
            key={subsystem.id}
            type="button"
            onClick={() =>
              setSelected(selected?.id === subsystem.id ? null : subsystem)
            }
            className={`rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur transition ${
              selected?.id === subsystem.id
                ? "border-accent bg-accent/20 text-white"
                : "border-white/10 bg-ink-950/50 text-zinc-400 hover:text-white"
            }`}
          >
            {subsystem.name}
          </button>
        ))}
      </div>
    </div>
  );
}
