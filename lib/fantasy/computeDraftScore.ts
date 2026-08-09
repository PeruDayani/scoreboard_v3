import type {
  FantasyBoxscore,
  FantasyDraftConfig,
  FantasyDraftPick,
  FantasyDraftScore,
  FantasyPlayer,
  FantasyPlayerStatistics,
  FantasyTeamScore,
} from "@/lib/fantasy/fantasy.types";

export function computeDraftScore(
  draft: FantasyDraftConfig,
  boxscores: Record<string, FantasyBoxscore>,
): FantasyDraftScore {

  // TODO: clean up types to have a simple computation of sort by fantasy teams and aggregate
  return {
    id: draft.id,
    name: draft.name,
    captains: draft.captains,
    statistics: draft.statistics,
    games: []
  }
}