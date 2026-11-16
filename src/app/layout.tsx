import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  metadataBase: new URL("https://dodoloiu1.github.io/ilc-robotix/"),
  title: {
    default: "ILC ROBOTIX — FTC Team #25145",
    template: "%s · ILC ROBOTIX",
  },
  description:
    "Official platform of ILC ROBOTIX, FIRST Tech Challenge team #25145 from Colegiul Național „Ion Luca Caragiale”, Bucharest. Robotics engineering, match analytics and outreach.",
  keywords: [
    "ILC ROBOTIX",
    "FTC",
    "FIRST Tech Challenge",
    "25145",
    "Ion Luca Caragiale",
    "robotics",
    "Bucharest",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ILC ROBOTIX",
    title: "ILC ROBOTIX — FTC Team #25145",
    description:
      "Engineering, match analytics and outreach of FTC team #25145 from Bucharest, Romania.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-ink-950 text-zinc-300">
        {children}
      </body>
    </html>
  );
}
