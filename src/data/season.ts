export type EventRecord = {
  name: string;
  location: string;
  date: string;
  placement: string | null;
};

export type MatchResult = {
  event: string;
  match: string;
  alliance: "red" | "blue";
  result: "W" | "L" | "T";
  score: string;
  teamScore: number | null;
  opponentScore: number | null;
  opponent: string;
  date: string;
};

export type SeasonSummary = {
  season: string;
  game: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  opr: number | null;
  npOpr: number | null;
  maxScore: number | null;
  rank: string | null;
  awards: string[];
  events: EventRecord[];
  matches: MatchResult[];
  /** True while the official FTC registry research is still in flight. */
  pending: boolean;
};

/**
 * Populated from the official FTC registries (The Orange Alliance, FTC Events,
 * FTCScout) during the research phase. Empty values render as "—" placeholders.
 */
export const season: SeasonSummary = {
  season: "2025–2026",
  game: "INTO THE DEEP",
  matchesPlayed: 0,
  wins: 0,
  losses: 0,
  ties: 0,
  opr: null,
  npOpr: null,
  maxScore: null,
  rank: null,
  awards: [],
  events: [],
  matches: [],
  pending: true,
};
