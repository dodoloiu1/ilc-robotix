import { Cpu, Eye, Move3d } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { HARDWARE, SUBSYSTEMS } from "@/data/hardware";

const ICONS: Record<string, typeof Cpu> = {
  localization: Move3d,
  vision: Eye,
  intake: Cpu,
};

export default function EngineeringSection() {
  return (
    <section id="engineering" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engineering breakdown"
          title="Subsystems, documented like an open spec"
          description="From dead-wheel odometry to a slip-ring turret — every subsystem is designed, measured and iterated in the open."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {SUBSYSTEMS.map((subsystem, i) => {
            const Icon = ICONS[subsystem.id] ?? Cpu;
            return (
              <Reveal key={subsystem.id} delay={i * 0.08}>
                <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition hover:border-accent/30">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition group-hover:bg-accent/15" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/30 bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </span>
                    <span className="font-mono text-xs text-zinc-600">
                      /{subsystem.code}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {subsystem.name}
                  </h3>
                  <p className="mt-1 text-sm text-accent-soft/80">
                    {subsystem.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {subsystem.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-400">
                    {subsystem.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                    {subsystem.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-zinc-400"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="glass mt-8 rounded-3xl p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-white">
                Hardware bill of materials
              </h3>
              <span className="font-mono text-xs text-zinc-500">
                {HARDWARE.length} core components
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {HARDWARE.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent/70" />
                  <div>
                    <div className="text-sm font-medium text-white">{item.name}</div>
                    <div className="text-xs text-zinc-500">{item.role}</div>
                    <div className="mt-1 font-mono text-[11px] text-zinc-600">
                      {item.vendor}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
