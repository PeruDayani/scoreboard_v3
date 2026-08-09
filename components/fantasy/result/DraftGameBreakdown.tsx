"use client";

import DraftPlayerComparison from "@/components/fantasy/result/DraftPlayerComparison";
import DraftResult from "@/components/fantasy/result/DraftResult";
import DraftResultGamesNav from "@/components/fantasy/result/DraftResultGamesNav";
import type { FantasyDraftResult } from "@/lib/fantasy/fantasy.types";
import { useState } from "react";

type DraftGameBreakdownProps = {
  captains: FantasyDraftResult["captains"];
  scores: FantasyDraftResult["scores"];
};

export default function DraftGameBreakdown({
  captains,
  scores,
}: DraftGameBreakdownProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (scores.length === 0) return null;

  const activeScore = scores[activeIndex] ?? scores[0];
  const hasMultipleGames = scores.length > 1;

  return (
    <section className="mx-auto my-8 flex w-full flex-col gap-3">
      {hasMultipleGames ? (
        <>
          <DraftResultGamesNav
            activeIndex={activeIndex}
            gameIds={scores.map((score) => score.gameId)}
            onSelect={setActiveIndex}
          />
          <DraftResult captains={captains} result={activeScore.result} />
        </>
      ) : null}

      <DraftPlayerComparison
        key={activeScore.gameId}
        teamA={activeScore.teams.teamA}
        teamB={activeScore.teams.teamB}
        statistics={activeScore.result.statisticsTotals}
      />
    </section>
  );
}
