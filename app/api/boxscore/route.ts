import { NextResponse } from "next/server";

const NBA_BOXSCORE_URL = "https://api.nba.com/v0/api/stats/boxscore";

export async function GET(request: Request) {
  const gameId = new URL(request.url).searchParams.get("gameId");
  if (!gameId) {
    return NextResponse.json(
      { error: "Missing gameId query param" },
      { status: 400 },
    );
  }

  const apiKey = process.env.NBA_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "NBA_API_KEY is not configured" },
      { status: 500 },
    );
  }

  const url = new URL(NBA_BOXSCORE_URL);
  url.searchParams.set("gameId", gameId);

  const response = await fetch(url, {
    headers: {
      "X-NBA-Api-Key": apiKey,
    },
  });

  const body = await response.text();

  return new NextResponse(body, {
    status: response.status,
    headers: {
      "Content-Type":
        response.headers.get("Content-Type") ?? "application/json",
    },
  });
}
