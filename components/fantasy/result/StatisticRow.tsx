import type {
  DraftTeamKey,
  FantasyDraftWinner,
  FantasyGameResult,
} from "@/lib/fantasy/fantasy.types";

type StatisticRowProps = {
  statistic: FantasyGameResult["statisticsTotals"][number];
};

function winnerClass(side: DraftTeamKey, winner: FantasyDraftWinner) {
  return winner === side ? "underline underline-offset-4" : undefined;
}

function PerGameScores({
  scores,
  opponentScores,
  side,
}: {
  scores?: number[];
  opponentScores?: number[];
  side: DraftTeamKey;
}) {
  if (!scores?.length) return null;

  return (
    <p className="mt-1 font-mono text-[0.65rem] tracking-wide text-muted">
      (
      {scores.map((score, index) => {
        const opponent = opponentScores?.[index];
        const won =
          opponent !== undefined &&
          ((side === "teamA" && score > opponent) ||
            (side === "teamB" && score > opponent));

        return (
          <span key={index}>
            {index > 0 ? ", " : null}
            <span className={won ? "underline underline-offset-2" : undefined}>
              {score}
            </span>
          </span>
        );
      })}
      )
    </p>
  );
}

export default function StatisticRow({ statistic }: StatisticRowProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 py-2.5">
      <div className="text-center">
        <p
          className={`font-mono text-lg tabular-nums text-foreground ${
            winnerClass("teamA", statistic.winner) ?? ""
          }`}
        >
          {statistic.teamAScore}
        </p>
        <PerGameScores
          scores={statistic.teamAScorePerGame}
          opponentScores={statistic.teamBScorePerGame}
          side="teamA"
        />
      </div>

      <p className="min-w-16 pt-1 text-center font-mono text-xs tracking-[0.15em] text-muted uppercase">
        {statistic.label}
      </p>

      <div className="text-center">
        <p
          className={`font-mono text-lg tabular-nums text-foreground ${
            winnerClass("teamB", statistic.winner) ?? ""
          }`}
        >
          {statistic.teamBScore}
        </p>
        <PerGameScores
          scores={statistic.teamBScorePerGame}
          opponentScores={statistic.teamAScorePerGame}
          side="teamB"
        />
      </div>
    </div>
  );
}
