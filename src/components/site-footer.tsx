import { SOCIALS, TEAM } from "@/lib/team";
import { NAV_LINKS } from "@/lib/team";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/40 bg-accent/10 font-mono text-sm font-bold text-accent">
              {TEAM.number}
            </span>
            <div>
              <div className="text-sm font-semibold text-white">{TEAM.name}</div>
              <div className="text-xs text-zinc-500">FTC Team #{TEAM.number}</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            {TEAM.school}, {TEAM.city}, {TEAM.country}. Competing in{" "}
            {TEAM.program}.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-xs uppercase tracking-widest text-zinc-600">
            Platform
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-xs uppercase tracking-widest text-zinc-600">
            Community
          </div>
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {TEAM.name}. Built by students, for STEM.
        </span>
        <span className="font-mono">
          FIRST® Tech Challenge · {TEAM.affiliation}
        </span>
      </div>
    </footer>
  );
}
