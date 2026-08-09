import { boxscoreResponseSchema } from "@/lib/nba/boxscore.schema";

const NBA_BOXSCORE_URL = "https://api.nba.com/v0/api/stats/boxscore";

type GetBoxscoreOptions = {
  gameId: string;
};

export async function getBoxscore({ gameId }: GetBoxscoreOptions) {
  const apiKey = process.env.NBA_API_KEY;
  if (!apiKey) {
    throw new Error("NBA_API_KEY is not configured");
  }

  const url = new URL(NBA_BOXSCORE_URL);
  url.searchParams.set("gameId", gameId);

  const response = await fetch(url, {
    headers: {
      "X-NBA-Api-Key": apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch boxscore (${response.status})`);
  }

  const json: unknown = await response.json();
  const parsed = boxscoreResponseSchema.safeParse(json);

  if (!parsed.success) {
    throw new Error("Unexpected boxscore response shape", {
      cause: parsed.error.flatten(),
    });
  }

  return parsed.data;
}

export type { BoxscoreResponse } from "@/lib/nba/boxscore.schema";
