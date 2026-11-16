import Link from "next/link";
import { NAV_LINKS, TEAM } from "@/lib/team";

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-ink-950/60 px-4 py-3 backdrop-blur-2xl sm:px-6">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-accent/40 bg-accent/10">
            <span className="absolute inset-0 rounded-xl bg-accent/20 blur-md" />
            <span className="relative font-mono text-sm font-bold text-accent">
              {TEAM.number}
            </span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">
              {TEAM.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              FTC · Bucharest
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#sponsors" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
          Partner with us
        </a>
      </div>
    </header>
  );
}
