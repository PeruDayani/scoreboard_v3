import { scoreboardResponseSchema } from "@/lib/nba/scoreboard.schema";

const NBA_SCOREBOARD_URL =
  "https://api.nba.com/v0/api/scores/scoreboard/date";

type GetScoreboardOptions = {
  leagueId?: string;
  gameDate?: string;
};

export async function getScoreboard({
  leagueId = "00",
  gameDate,
}: GetScoreboardOptions = {}) {
  const apiKey = process.env.NBA_API_KEY;
  if (!apiKey) {
    throw new Error("NBA_API_KEY is not configured");
  }

  const url = new URL(NBA_SCOREBOARD_URL);
  url.searchParams.set("leagueId", leagueId);
  if (gameDate) {
    url.searchParams.set("gameDate", gameDate);
  }

  const response = await fetch(url, {
    headers: {
      "X-NBA-Api-Key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch scoreboard (${response.status})`);
  }

  const json: unknown = await response.json();
  const parsed = scoreboardResponseSchema.safeParse(json);

  if (!parsed.success) {
    throw new Error("Unexpected scoreboard response shape");
  }

  return parsed.data;
}

export type {
  Scoreboard,
  ScoreboardGame,
  ScoreboardMeta,
  ScoreboardResponse,
  ScoreboardTeam,
} from "@/lib/nba/scoreboard.schema";
