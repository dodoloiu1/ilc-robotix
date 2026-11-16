import { season } from "@/data/season";

/**
 * Team-score-per-match bar chart. Renders an explicit placeholder until the
 * official FTC registry research populates `season.matches`.
 */
export default function SeasonChart() {
  const matches = season.matches.filter((match) => match.teamScore !== null);

  if (matches.length === 0) {
    return (
      <div className="grid place-items-center gap-3 px-6 py-14 text-center">
        <div className="font-mono text-2xl text-zinc-700">▁ ▃ ▂ ▅ ▁ ▇</div>
        <p className="max-w-md text-sm text-zinc-500">
          Match performance chart — populated automatically from the official
          FTC event results once the research sync completes.
        </p>
      </div>
    );
  }

  const max = Math.max(...matches.map((match) => match.teamScore ?? 0), 1);
  const width = matches.length * 44;
  const height = 170;

  return (
    <div className="px-6 py-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white">
          Team score per match
        </h4>
        <span className="font-mono text-xs text-zinc-500">
          max {max} pts
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="Team score per match"
      >
        {matches.map((match, index) => {
          const score = match.teamScore ?? 0;
          const barHeight = (score / max) * (height - 30);
          const win = match.result === "W";
          return (
            <g key={`${match.event}-${match.match}-${index}`}>
              <rect
                x={index * 44 + 10}
                y={height - 12 - barHeight}
                width={24}
                height={barHeight}
                rx={4}
                fill={win ? "#22d3ee" : "#3f4756"}
                opacity={win ? 0.9 : 0.7}
              />
              <text
                x={index * 44 + 22}
                y={height - 18 - barHeight}
                textAnchor="middle"
                className="fill-zinc-300"
                fontSize="10"
                fontFamily="ui-monospace, monospace"
              >
                {score}
              </text>
              <text
                x={index * 44 + 22}
                y={height - 2}
                textAnchor="middle"
                className="fill-zinc-500"
                fontSize="9"
                fontFamily="ui-monospace, monospace"
              >
                {match.match}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
