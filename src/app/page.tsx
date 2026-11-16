import SiteNav from "@/components/site-nav";
import Hero from "@/components/hero";
import SeasonSection from "@/components/season-section";
import EngineeringSection from "@/components/engineering-section";
import EngineeringDeepDive from "@/components/engineering-deep-dive";
import SponsorsSection from "@/components/sponsors-section";
import TeamSection from "@/components/team-section";
import SiteFooter from "@/components/site-footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-ink-950">
      <div className="bg-grid pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed -top-48 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-amber-glow/5 blur-[150px]" />
      <SiteNav />
      <Hero />
      <SeasonSection />
      <EngineeringSection />
      <EngineeringDeepDive />
      <SponsorsSection />
      <TeamSection />
      <SiteFooter />
    </main>
  );
}
