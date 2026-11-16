import { GraduationCap, Wrench } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { DIVISIONS, HERITAGE } from "@/data/teams";

export default function TeamSection() {
  return (
    <section id="team" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Team roster & heritage"
          title="A school team with a professional build culture"
          description={`${HERITAGE.school}, ${HERITAGE.city} — competing in ${HERITAGE.program} since ${HERITAGE.since}.`}
        />

        <Reveal>
          <div className="glass relative mt-12 overflow-hidden rounded-3xl p-8">
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-accent/30 bg-accent/10">
                <GraduationCap className="h-8 w-8 text-accent" />
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {HERITAGE.school}
                </h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  Based in {HERITAGE.city}, the team brings together students across
                  hardware, software and outreach. Alumni mentor current members,
                  and every season the documentation is handed down as an open
                  engineering spec.
                </p>
              </div>
              <div className="md:ml-auto">
                <Wrench className="h-6 w-6 text-zinc-600" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {DIVISIONS.map((division, i) => (
            <Reveal key={division.id} delay={i * 0.08}>
              <article className="glass h-full rounded-3xl p-7 transition hover:border-accent/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {division.name}
                  </h3>
                  <span className="font-mono text-xs text-accent">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent-soft/80">{division.focus}</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {division.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {division.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-10 text-center">
            <h3 className="text-xl font-semibold text-white">
              Want to join ILC ROBOTIX?
            </h3>
            <p className="max-w-xl text-sm text-zinc-400">
              We recruit at the start of each season across all three divisions —
              no prior experience required, just curiosity and consistency.
            </p>
            <a href="mailto:contact@ilc-robotix.ro" className="btn-primary">
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
