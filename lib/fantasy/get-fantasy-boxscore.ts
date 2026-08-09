"use server";

import { processBoxscore } from "@/lib/fantasy/processBoxscore";
import { getBoxscore } from "@/lib/nba/boxscore";

export async function getFantasyBoxscore(gameId: string) {
  const data = await getBoxscore({ gameId });
  return processBoxscore(data);
}
