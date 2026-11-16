"use client";

import { useState } from "react";
import { Activity, Award, Gauge, MapPin, Trophy } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import SeasonChart from "@/components/season-chart";
import { seasons } from "@/data/season";

export default function SeasonSection() {
  const [selectedId, setSelectedId] = useState("2024-25");
  const current = seasons.find((s) => s.id === selectedId) ?? seasons[0];

  const winRate = current.matchesPlayed
    ? Math.round((current.wins / current.matchesPlayed) * 100)
    : null;

  const bestOpr = current.events.reduce<number>(
    (best, event) => (event.opr !== null && event.opr > best ? event.opr : best),
    -Infinity,
  );

  const bestRank = current.events.reduce<number | null>((best, event) => {
    if (event.qualRank === null) return best;
    if (best === null || event.qualRank < best) return event.qualRank;
    return best;
  }, null);

  const metrics = [
    {
      icon: Activity,
      label: "Matches played",
      value: String(current.matchesPlayed),
    },
    {
      icon: Trophy,
      label: "Win rate",
      value: winRate !== null ? `${winRate}%` : "—",
      hint: `${current.wins}W · ${current.losses}L · ${current.ties}T`,
    },
    {
      icon: Gauge,
      label: "Best event OPR",
      value: bestOpr === -Infinity ? "—" : bestOpr.toFixed(1),
    },
    {
      icon: Award,
      label: "Season rank",
      value: current.rank ?? "—",
      hint: bestRank !== null ? `best event #${bestRank}` : undefined,
    },
  ];

  return (
    <section id="season" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Match intelligence"
          title="Season & match analytics"
          description="Verified qualification results for team #25145, aggregated from the official FTC Events, FTCStats and The Orange Alliance records."
        />

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-2">
            {seasons.map((season) => (
              <button
                key={season.id}
                type="button"
                onClick={() => setSelectedId(season.id)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  season.id === current.id
                    ? "border-accent bg-accent/20 text-white"
                    : "border-white/10 bg-white/[0.02] text-zinc-400 hover:border-accent/50 hover:text-white"
                }`}
              >
                {season.label}
                <span className="ml-2 font-mono text-[10px] text-zinc-500">
                  {season.game}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
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
                <h3 className="text-base font-semibold text-white">
                  {current.label} · {current.game}
                </h3>
                <p className="text-xs text-zinc-500">
                  {current.events.length} events ·{" "}
                  {current.matchesPlayed} qualification matches
                </p>
              </div>
              <span className="chip">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Verified against FTC Events
              </span>
            </div>

            {current.matches.length === 0 ? (
              <div className="grid place-items-center gap-3 px-6 py-16 text-center">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5">
                  <Activity className="h-5 w-5 text-zinc-500" />
                </div>
                <p className="max-w-md text-sm text-zinc-500">
                  No qualification results are published for the {current.label}{" "}
                  season yet. FTCScout confirms the team has not played any events
                  in this season.
                </p>
              </div>
            ) : (
              <div className="max-h-[26rem] overflow-auto">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="sticky top-0 bg-ink-900 text-xs uppercase tracking-wider text-zinc-500">
                    <tr className="border-b border-white/10">
                      <th className="px-6 py-3">Event</th>
                      <th className="px-6 py-3">Match</th>
                      <th className="px-6 py-3">Alliance</th>
                      <th className="px-6 py-3">Result</th>
                      <th className="px-6 py-3">Score</th>
                      <th className="px-6 py-3">Opponents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {current.matches.map((match, index) => (
                      <tr
                        key={`${match.event}-${match.match}-${index}`}
                        className="border-b border-white/5 text-zinc-300"
                      >
                        <td className="px-6 py-3 text-white">{match.event}</td>
                        <td className="px-6 py-3 font-mono text-xs">
                          {match.match}
                        </td>
                        <td className="px-6 py-3 capitalize">{match.alliance}</td>
                        <td className="px-6 py-3">
                          <span
                            className={
                              match.result === "W"
                                ? "text-accent-soft"
                                : match.result === "L"
                                  ? "text-rose-300"
                                  : "text-zinc-400"
                            }
                          >
                            {match.result}
                          </span>
                        </td>
                        <td className="px-6 py-3 font-mono text-xs">
                          {match.score}
                        </td>
                        <td className="px-6 py-3 font-mono text-xs text-zinc-500">
                          {match.opponent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {current.awards.length > 0 ? (
              <div className="flex flex-wrap gap-2 border-t border-white/10 px-6 py-4">
                {current.awards.map((award) => (
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

        <Reveal delay={0.12}>
          <div className="glass mt-8 overflow-hidden rounded-3xl">
            <SeasonChart matches={current.matches} />
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {current.events.map((event) => (
              <article
                key={event.name}
                className="glass rounded-2xl p-5 transition hover:border-accent/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold text-white">
                    {event.name}
                  </h4>
                  {event.placement ? (
                    <span className="shrink-0 font-mono text-xs text-accent">
                      {event.placement}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </div>
                <div className="mt-1 text-xs text-zinc-500">{event.date}</div>
                <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-xs">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                      OPR
                    </div>
                    <div className="text-zinc-200">
                      {event.opr !== null ? event.opr.toFixed(1) : "—"}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                      Rank
                    </div>
                    <div className="text-zinc-200">
                      {event.qualRank !== null
                        ? `#${event.qualRank}/${event.qualRankTotal}`
                        : "—"}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-zinc-600">
                      Record
                    </div>
                    <div className="text-zinc-200">
                      {event.eventRecord ?? "—"}
                    </div>
                  </div>
                </div>
                {event.awards.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {event.awards.map((award) => (
                      <span
                        key={award}
                        className="rounded-md border border-amber-glow/30 bg-amber-glow/10 px-2 py-1 text-[10px] text-amber-glow"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
