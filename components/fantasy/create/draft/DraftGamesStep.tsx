"use client";

import AvailablePlayers from "@/components/fantasy/create/draft/AvailablePlayers";
import DraftGamesNav from "@/components/fantasy/create/draft/DraftGamesNav";
import GameMeta from "@/components/fantasy/create/draft/GameMeta";
import TeamRoster from "@/components/fantasy/create/draft/TeamRoster";
import Loading from "@/components/shared/Loading";
import type {
  DraftTeamKey,
  FantasyBoxscore,
  FantasyDraftConfig,
  FantasyPlayer,
} from "@/lib/fantasy/fantasy.types";
import { getFantasyBoxscore } from "@/lib/fantasy/get-fantasy-boxscore";
import { useEffect, useState } from "react";

type DraftGamesStepProps = {
  captains: FantasyDraftConfig["captains"];
  games: FantasyDraftConfig["games"];
  onDraftPlayer: (
    gameIndex: number,
    team: DraftTeamKey,
    player: FantasyPlayer,
  ) => void;
  onUndraftPlayer: (
    gameIndex: number,
    team: DraftTeamKey,
    playerId: number,
  ) => void;
};

export default function DraftGamesStep({
  captains,
  games,
  onDraftPlayer,
  onUndraftPlayer,
}: DraftGamesStepProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [boxscores, setBoxscores] = useState<Record<string, FantasyBoxscore>>(
    {},
  );
  const [loading, setLoading] = useState(games.length > 0);
  const [error, setError] = useState<string | null>(null);

  const gameIdsKey = games.map((game) => game.gameId).join(",");

  useEffect(() => {
    const gameIds = gameIdsKey ? gameIdsKey.split(",") : [];

    if (gameIds.length === 0) {
      setLoading(false);
      setError(null);
      setBoxscores({});
      return;
    }

    let cancelled = false;

    async function loadAllBoxscores() {
      setLoading(true);
      setError(null);

      try {
        const results = await Promise.all(
          gameIds.map(async (gameId) => {
            const data = await getFantasyBoxscore(gameId);
            return [gameId, data] as const;
          }),
        );

        if (cancelled) return;

        setBoxscores(Object.fromEntries(results));
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Failed to fetch boxscores",
          );
          setBoxscores({});
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    void loadAllBoxscores();

    return () => {
      cancelled = true;
    };
  }, [gameIdsKey]);

  if (games.length === 0) {
    return (
      <p className="text-sm text-muted">No games available to draft.</p>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p className="text-center text-sm text-terracotta">{error}</p>
    );
  }

  const activeGame = games[activeIndex] ?? games[0];
  const activeBoxscore = boxscores[activeGame.gameId];
  const draftedIds = new Set([
    ...activeGame.teams.teamA.map((pick) => pick.playerId),
    ...activeGame.teams.teamB.map((pick) => pick.playerId),
  ]);
  const availablePlayers = activeBoxscore
    ? Object.values(activeBoxscore.players).filter(
        (player) => !draftedIds.has(player.id),
      )
    : [];

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <DraftGamesNav
          gameCount={games.length}
          activeIndex={activeIndex}
          gameIds={games.map((game) => game.gameId)}
          onSelect={setActiveIndex}
        />

        {activeBoxscore ? <GameMeta boxscore={activeBoxscore} /> : null}
      </div>

      <div className="grid grid-cols-2 gap-6 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <div className="order-2 w-64 shrink-0 lg:order-1">
          <TeamRoster
            label={captains.teamA || "Team A"}
            picks={activeGame.teams.teamA}
            onUndo={(playerId) =>
              onUndraftPlayer(activeIndex, "teamA", playerId)
            }
          />
        </div>

        <div className="order-1 col-span-2 min-w-0 w-full lg:order-2 lg:col-span-1">
          <AvailablePlayers
            players={availablePlayers}
            captainA={captains.teamA}
            captainB={captains.teamB}
            onDraft={(player, team) =>
              onDraftPlayer(activeIndex, team, player)
            }
          />
        </div>

        <div className="order-3 w-64 shrink-0">
          <TeamRoster
            label={captains.teamB || "Team B"}
            picks={activeGame.teams.teamB}
            onUndo={(playerId) =>
              onUndraftPlayer(activeIndex, "teamB", playerId)
            }
          />
        </div>
      </div>
    </div>
  );
}
