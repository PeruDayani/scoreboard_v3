"use client";

import PlayerComparisonStats from "@/components/fantasy/result/PlayerComparisonStats";
import type {
  FantasyGameResult,
  FantasyTeamScore,
} from "@/lib/fantasy/fantasy.types";
import { useState } from "react";

type ScoredPlayer = FantasyTeamScore["players"][number];

type DraftPlayerComparisonProps = {
  teamA: FantasyTeamScore;
  teamB: FantasyTeamScore;
  statistics: FantasyGameResult["statisticsTotals"];
};

function OnCourtDot({ oncourt }: { oncourt: boolean }) {
  return (
    <span
      aria-label={oncourt ? "On court" : "Off court"}
      className={`inline-block size-1.5 shrink-0 rounded-full ${
        oncourt ? "bg-terracotta" : "border border-muted bg-transparent"
      }`}
    />
  );
}

function PlayerList({
  players,
  selectedId,
  onSelect,
  align,
}: {
  players: ScoredPlayer[];
  selectedId: number | null;
  onSelect: (player: ScoredPlayer) => void;
  align: "left" | "right";
}) {
  return (
    <ul className="flex min-w-0 flex-col gap-8">
      {players.map((player) => {
        const isActive = player.id === selectedId;

        return (
          <li key={player.id} className="min-w-0">
            <button
              type="button"
              onClick={() => onSelect(player)}
              className={`flex w-full min-w-0 items-center gap-1.5 font-mono text-xs italic transition-colors hover:text-terracotta ${
                align === "left" ? "justify-start" : "justify-end"
              } ${isActive ? "font-bold text-terracotta" : "text-muted"}`}
            >
              {align === "left" ? <OnCourtDot oncourt={player.oncourt} /> : null}
              <span
                className={`min-w-0 truncate ${
                  isActive ? "border-b border-current pb-px" : ""
                }`}
              >
                {player.name[0].toUpperCase()}. {player.familyName}
              </span>
              {align === "right" ? <OnCourtDot oncourt={player.oncourt} /> : null}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default function DraftPlayerComparison({
  teamA,
  teamB,
  statistics,
}: DraftPlayerComparisonProps) {
  const [selectedA, setSelectedA] = useState<ScoredPlayer | null>(
    teamA.players[0] ?? null,
  );
  const [selectedB, setSelectedB] = useState<ScoredPlayer | null>(
    teamB.players[0] ?? null,
  );

  if (teamA.players.length === 0 && teamB.players.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-full rounded-md border border-border bg-rose px-5 py-6">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <PlayerList
          players={teamA.players}
          selectedId={selectedA?.id ?? null}
          onSelect={setSelectedA}
          align="left"
        />

        <PlayerComparisonStats
          statistics={statistics}
          statsA={selectedA?.statistics}
          statsB={selectedB?.statistics}
          draftPickA={selectedA?.draftPick}
          draftPickB={selectedB?.draftPick}
        />

        <PlayerList
          players={teamB.players}
          selectedId={selectedB?.id ?? null}
          onSelect={setSelectedB}
          align="right"
        />
      </div>
    </section>
  );
}
