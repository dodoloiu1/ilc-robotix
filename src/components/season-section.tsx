import { Activity, Award, Gauge, Trophy } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { season } from "@/data/season";

const winRate =
  season.matchesPlayed > 0
    ? Math.round((season.wins / season.matchesPlayed) * 100)
    : null;

const METRICS = [
  {
    icon: Activity,
    label: "Matches played",
    value: season.matchesPlayed ? String(season.matchesPlayed) : "—",
  },
  {
    icon: Trophy,
    label: "Win rate",
    value: winRate !== null ? `${winRate}%` : "—",
    hint: season.matchesPlayed
      ? `${season.wins}W · ${season.losses}L · ${season.ties}T`
      : undefined,
  },
  {
    icon: Gauge,
    label: "Season OPR",
    value: season.opr !== null ? season.opr.toFixed(1) : "—",
    hint: season.npOpr !== null ? `NP-OPR ${season.npOpr.toFixed(1)}` : undefined,
  },
  {
    icon: Award,
    label: "Ranking",
    value: season.rank ?? "—",
  },
];

export default function SeasonSection() {
  return (
    <section id="season" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Match intelligence"
          title="Season & match analytics"
          description="Every qualification and playoff match, ranked against the official FTC event data — OPR, NP-OPR, rankings and awards for team #25145."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.06}>
              <div className="glass group relative overflow-hidden rounded-2xl p-6">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
                <metric.icon className="h-5 w-5 text-accent" />
                <div className="mt-4 font-mono text-3xl font-semibold text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{metric.label}</div>
                {metric.hint ? (
                  <div className="mt-1 font-mono text-xs text-zinc-600">
                    {metric.hint}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="glass mt-8 overflow-hidden rounded-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-6 py-4">
              <div>
                <h3 className="text-base font-semibold text-white">Match log</h3>
                <p className="text-xs text-zinc-500">
                  {season.season} · {season.game}
                </p>
              </div>
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-glow animate-pulse-slow" />
                {season.pending
                  ? "Syncing official FTC registry data…"
                  : "Verified against FTC Events"}
              </span>
            </div>

            {season.matches.length === 0 ? (
              <div className="grid place-items-center gap-3 px-6 py-16 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Activity className="h-5 w-5 text-zinc-500" />
                </div>
                <p className="max-w-md text-sm text-zinc-500">
                  The match history for #{`25145`} is being pulled from The Orange
                  Alliance, FTC Events and FTCScout. This dashboard populates
                  automatically once the research sync completes.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="text-xs uppercase tracking-wider text-zinc-500">
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-3">Event</th>
                      <th className="px-6 py-3">Match</th>
                      <th className="px-6 py-3">Alliance</th>
                      <th className="px-6 py-3">Result</th>
                      <th className="px-6 py-3">Score</th>
                      <th className="px-6 py-3">Opponent</th>
                    </tr>
                  </thead>
                  <tbody>
                    {season.matches.map((match) => (
                      <tr
                        key={`${match.event}-${match.match}`}
                        className="border-b border-white/5 text-zinc-300"
                      >
                        <td className="px-6 py-3 text-white">{match.event}</td>
                        <td className="px-6 py-3 font-mono text-xs">{match.match}</td>
                        <td className="px-6 py-3 capitalize">{match.alliance}</td>
                        <td className="px-6 py-3">
                          <span
                            className={
                              match.result === "W"
                                ? "text-emerald-400"
                                : match.result === "L"
                                  ? "text-rose-400"
                                  : "text-zinc-400"
                            }
                          >
                            {match.result}
                          </span>
                        </td>
                        <td className="px-6 py-3 font-mono text-xs">{match.score}</td>
                        <td className="px-6 py-3">{match.opponent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {season.awards.length > 0 ? (
              <div className="flex flex-wrap gap-2 border-t border-white/10 px-6 py-4">
                {season.awards.map((award) => (
                  <span
                    key={award}
                    className="chip !border-amber-glow/30 !bg-amber-glow/10 !text-amber-glow"
                  >
                    <Trophy className="h-3 w-3" />
                    {award}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
