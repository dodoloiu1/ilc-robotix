import { TEAM } from "@/lib/team";
import { allMatches, seasons } from "@/data/season";
import Reveal from "@/components/reveal";
import RobotShowcase from "@/components/robot-showcase";

const totalAwards = seasons.reduce((total, season) => total + season.awards.length, 0);
const bestOpr = seasons
  .flatMap((season) => season.events)
  .reduce(
    (best, event) => (event.opr !== null && event.opr > best ? event.opr : best),
    -Infinity,
  );

const HERO_STATS = [
  { label: "Matches analysed", value: String(allMatches.length) },
  {
    label: "Best event OPR",
    value: bestOpr === -Infinity ? "—" : bestOpr.toFixed(1),
  },
  { label: "Awards earned", value: String(totalAwards) },
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
              {TEAM.country}. We design, machine, wire and code competition robots
              for {TEAM.program} — and we document every subsystem in the open.
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
              Verified against FTC Events, FTCStats and The Orange Alliance.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <RobotShowcase />
        </Reveal>
      </div>
    </section>
  );
}
