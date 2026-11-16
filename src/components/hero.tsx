import { TEAM } from "@/lib/team";
import Reveal from "@/components/reveal";

const HUD_ITEMS = [
  { label: "REV Control Hub", value: "robot controller", className: "left-0 top-8" },
  { label: "Limelight 3A", value: "vision pipeline", className: "right-0 top-24" },
  { label: "goBILDA drivetrain", value: "4 × 3190 rpm", className: "left-0 bottom-24" },
  { label: "Odometry pods", value: "3 × IMU fusion", className: "right-0 bottom-8" },
];

const HERO_STATS = [
  { label: "Matches analysed", value: "—" },
  { label: "Season OPR", value: "—" },
  { label: "Awards earned", value: "—" },
  { label: "Team members", value: "12+" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-36 sm:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16">
        <div>
          <Reveal>
            <span className="chip !border-accent/30 !bg-accent/10 !text-accent-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              FTC Team #{TEAM.number} · {TEAM.season} season
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Engineering the
              <span className="block text-gradient">robots of tomorrow.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              {TEAM.name} is a student robotics team from{" "}
              <span className="text-zinc-200">{TEAM.school}</span>, {TEAM.city},{" "}
              {TEAM.country}. We design, machine, wire and code competition robots for{" "}
              {TEAM.program} — and we document every subsystem in the open.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#engineering" className="btn-primary">
                Explore the robot
                <span aria-hidden>→</span>
              </a>
              <a href="#season" className="btn-ghost">
                Match analytics
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-mono text-2xl font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-zinc-600">
              Live FTC registry data is being ingested — metrics populate after the
              research sync.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-[110px]" />
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-dashed border-accent/25 animate-spin-slow" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="absolute inset-24 rounded-full border border-accent/20 animate-spin-slow [animation-direction:reverse]" />

            <div className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-accent/40 bg-ink-900/80 shadow-glow backdrop-blur">
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-white">
                  #{TEAM.number}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-accent">
                  {TEAM.name}
                </div>
              </div>
            </div>

            {[
              "left-1/2 top-0",
              "right-4 top-1/2",
              "left-1/2 bottom-0",
              "left-4 top-1/3",
            ].map((pos, i) => (
              <span
                key={pos}
                className={`absolute ${pos} h-2.5 w-2.5 rounded-full bg-accent shadow-glow animate-pulse-slow`}
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            ))}

            {HUD_ITEMS.map((item) => (
              <div
                key={item.label}
                className={`absolute ${item.className} hidden rounded-xl border border-white/10 bg-ink-900/70 px-3 py-2 backdrop-blur sm:block`}
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  {item.label}
                </div>
                <div className="font-mono text-xs text-accent-soft">{item.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
