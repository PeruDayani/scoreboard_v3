"use server";

import { computeDraftScore } from "@/lib/fantasy/computeDraftScore";
import { FANTASY_DRAFTS } from "@/lib/fantasy/fantasy.constants";
import { processBoxscore } from "@/lib/fantasy/processBoxscore";
import { getBoxscore } from "@/lib/nba/boxscore";

export async function getFantasyDraftScore(draftId: string) {
  const draft = FANTASY_DRAFTS.find((entry) => entry.id === draftId);

  if (!draft) {
    throw new Error(`Fantasy draft not found: ${draftId}`);
  }

  const gameIds = [
    ...new Set(draft.games.map((game) => game.gameId).filter(Boolean)),
  ];

  if (gameIds.length === 0) {
    throw new Error(`Fantasy draft has no games: ${draftId}`);
  }

  const boxscoreEntries = await Promise.all(
    gameIds.map(async (gameId) => {
      const boxscore = await getBoxscore({ gameId });
      return [gameId, processBoxscore(boxscore)] as const;
    }),
  );

  return computeDraftScore(draft, Object.fromEntries(boxscoreEntries));
}
