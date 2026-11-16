import { ArrowUpRight, Download, Handshake } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { IMPACT_METRICS, SPONSOR_TIERS } from "@/data/sponsors";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Sponsorship portal"
          title="Partner with a student engineering team"
          description="Sponsorships fund parts, travel and outreach. In return, your brand reaches students, families and the wider Romanian STEM community."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {SPONSOR_TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 0.07} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-7 transition ${
                  tier.featured
                    ? "border border-accent/40 bg-gradient-to-b from-accent/15 to-transparent shadow-glow"
                    : "glass hover:border-white/20"
                }`}
              >
                {tier.featured ? (
                  <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-950">
                    Most visible
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <div className="mt-2 font-mono text-2xl font-semibold text-accent-soft">
                  {tier.price}
                </div>
                <p className="mt-3 text-sm text-zinc-400">{tier.headline}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-zinc-300">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:sponsorship@ilc-robotix.ro"
                  className={`mt-6 ${tier.featured ? "btn-primary" : "btn-ghost"} !py-2.5 text-center`}
                >
                  <Handshake className="h-4 w-4" />
                  Become a partner
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="glass mt-8 grid gap-6 rounded-3xl p-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">
                2025–2026 media kit
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Team profile, robot photography, audience demographics and
                partnership tiers — ready for sponsors, schools and media.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#sponsors" className="btn-primary !py-2.5">
                <Download className="h-4 w-4" />
                Download media kit
              </a>
              <a href="#team" className="btn-ghost !py-2.5">
                Meet the team
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_METRICS.map((metric, i) => (
            <Reveal key={metric.label} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                <div className="font-mono text-3xl font-semibold text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                  {metric.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
