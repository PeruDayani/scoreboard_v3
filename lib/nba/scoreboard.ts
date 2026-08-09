import { scoreboardResponseSchema } from "@/lib/nba/scoreboard.schema";

const NBA_SCOREBOARD_BY_DATE_URL =
  "https://api.nba.com/v0/api/scores/scoreboard/date";
const NBA_SCOREBOARD_BY_GAMES_URL =
  "https://api.nba.com/v0/api/scores/scoreboard/games";

type GetScoreboardOptions = {
  leagueId?: string;
  gameDate?: string;
};

type GetScoreboardByGamesOptions = {
  leagueId?: string;
  gameIds: string[];
};

function getNbaApiKey() {
  const apiKey = process.env.NBA_API_KEY;
  if (!apiKey) {
    throw new Error("NBA_API_KEY is not configured");
  }
  return apiKey;
}

async function fetchScoreboard(url: URL) {
  const response = await fetch(url, {
    headers: {
      "X-NBA-Api-Key": getNbaApiKey(),
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

export async function getScoreboard({
  leagueId = "00",
  gameDate,
}: GetScoreboardOptions = {}) {
  const url = new URL(NBA_SCOREBOARD_BY_DATE_URL);
  url.searchParams.set("leagueId", leagueId);
  if (gameDate) {
    url.searchParams.set("gameDate", gameDate);
  }

  return fetchScoreboard(url);
}

export async function getScoreboardByGames({
  leagueId = "00",
  gameIds,
}: GetScoreboardByGamesOptions) {
  if (gameIds.length === 0) {
    throw new Error("At least one gameId is required");
  }

  const url = new URL(NBA_SCOREBOARD_BY_GAMES_URL);
  url.searchParams.set("leagueId", leagueId);
  url.searchParams.set("gameId", gameIds.join(","));

  return fetchScoreboard(url);
}

export type {
  Scoreboard,
  ScoreboardGame,
  ScoreboardMeta,
  ScoreboardResponse,
  ScoreboardTeam,
} from "@/lib/nba/scoreboard.schema";
