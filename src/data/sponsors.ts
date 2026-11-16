export type SponsorTier = {
  id: string;
  name: string;
  price: string;
  headline: string;
  benefits: string[];
  featured?: boolean;
};

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    id: "title",
    name: "Title Partner",
    price: "€2,500+",
    headline: "Put your brand on the robot, the pit and the climb.",
    benefits: [
      "Logo on robot chassis and turret shroud",
      "Named pit branding at every competition",
      "Co-branded outreach campaign",
      " Quarterly engineering impact report",
    ],
    featured: true,
  },
  {
    id: "gold",
    name: "Gold Partner",
    price: "€1,000+",
    headline: "Front-row visibility across the season.",
    benefits: [
      "Logo on team uniform and pit banner",
      "Social media feature per competition",
      "Invitation to build season kick-off",
      "Student STEM workshop co-branding",
    ],
  },
  {
    id: "silver",
    name: "Silver Partner",
    price: "€500+",
    headline: "Support the build, get the credit.",
    benefits: [
      "Logo on the team website sponsor wall",
      "Recognition in match-day livestream",
      "End-of-season impact summary",
    ],
  },
  {
    id: "community",
    name: "Community",
    price: "In-kind",
    headline: "Tools, materials and mentorship matter.",
    benefits: [
      "Parts, materials or machining credits",
      "Engineer mentorship office hours",
      "Facility tour for students",
    ],
  },
];

export const IMPACT_METRICS = [
  { label: "Students reached", value: "120+" },
  { label: "Outreach events / year", value: "8" },
  { label: "Mentored rookie teams", value: "3" },
  { label: "Build hours per season", value: "600+" },
];
