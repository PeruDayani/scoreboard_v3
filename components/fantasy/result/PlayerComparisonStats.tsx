import type {
  FantasyDraftWinner,
  FantasyGameResult,
  FantasyPlayerStatistics,
} from "@/lib/fantasy/fantasy.types";
import { FaCrown } from "react-icons/fa6";

type PlayerComparisonStatsProps = {
  statistics: FantasyGameResult["statisticsTotals"];
  statsA?: FantasyPlayerStatistics;
  statsB?: FantasyPlayerStatistics;
  draftPickA?: number;
  draftPickB?: number;
};

function compareWinner(
  valueA: number,
  valueB: number,
  lowerWins = false,
): FantasyDraftWinner {
  if (valueA === valueB) return "draw";
  if (lowerWins) {
    return valueA < valueB ? "teamA" : "teamB";
  }
  return valueA > valueB ? "teamA" : "teamB";
}

function formatSecondsAsMinutes(seconds: number) {
  const mins = Math.floor(seconds / 60);
  return `${mins}`;
}

type ComparisonStatRowProps = {
  label: string;
  valueA: string | number;
  valueB: string | number;
  winner: FantasyDraftWinner;
};

function ComparisonStatRow({
  label,
  valueA,
  valueB,
  winner,
}: ComparisonStatRowProps) {
  return (
    <div className="flex justify-evenly items-center gap-3 py-2">
      <p
        className={`text-center font-mono text-sm tabular-nums text-foreground ${
          winner === "teamA" ? "underline underline-offset-4" : ""
        }`}
      >
        {valueA}
      </p>
      <p className="min-w-10 text-center font-mono text-[0.60rem] tracking-[0.12em] text-muted">
        {label}
      </p>
      <p
        className={`text-center font-mono text-sm tabular-nums text-foreground ${
          winner === "teamB" ? "underline underline-offset-4" : ""
        }`}
      >
        {valueB}
      </p>
    </div>
  );
}

export default function PlayerComparisonStats({
  statistics,
  statsA,
  statsB,
  draftPickA,
  draftPickB,
}: PlayerComparisonStatsProps) {
  const scoringRows = statistics.map((statistic) => {
    const valueA = statsA?.[statistic.key] ?? 0;
    const valueB = statsB?.[statistic.key] ?? 0;
    return {
      key: statistic.key,
      label: statistic.label,
      valueA,
      valueB,
      winner: compareWinner(valueA, valueB),
    };
  });

  const secondsA = statsA?.secondsPlayed ?? 0;
  const secondsB = statsB?.secondsPlayed ?? 0;
  const pickA = draftPickA ?? 0;
  const pickB = draftPickB ?? 0;

  const rows = [
    ...scoringRows,
    {
      key: "secondsPlayed",
      label: "Minutes",
      valueA: formatSecondsAsMinutes(secondsA),
      valueB: formatSecondsAsMinutes(secondsB),
      winner: "draw" as const,
    },
    {
      key: "draftPick",
      label: "Pick",
      valueA: pickA,
      valueB: pickB,
      winner: "draw",
    },
  ];

  const teamAWins = rows.filter((row) => row.winner === "teamA").length;
  const teamBWins = rows.filter((row) => row.winner === "teamB").length;
  const overallWinner = compareWinner(teamAWins, teamBWins);

  return (
    <div className="flex min-w-32 flex-col">
      <div
        className="mb-2 flex w-full justify-center"
        aria-label={
          overallWinner === "draw"
            ? "Head to head draw"
            : `Head to head winner: ${overallWinner}`
        }
      >
        <FaCrown
          className={`size-3.5 transition-transform duration-500 ${
            overallWinner === "draw" ? "text-muted" : "text-terracotta"
          } ${
            overallWinner === "teamA"
              ? "-rotate-16"
              : overallWinner === "teamB"
                ? "rotate-16"
                : "rotate-0"
          }`}
        />
      </div>

      <div className="flex flex-col justify-evenly divide-y divide-border/70">
        {rows.map((row) => (
          <ComparisonStatRow
            key={row.key}
            label={row.label}
            valueA={row.valueA}
            valueB={row.valueB}
            winner={row.winner as FantasyDraftWinner}
          />
        ))}
      </div>
    </div>
  );
}
