import { getFantasyDraftScore } from "@/lib/fantasy/get-fantasy-draft-score";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const draftId = new URL(request.url).searchParams.get("id");
  if (!draftId) {
    return NextResponse.json(
      { error: "Missing id query param (fantasy draft id)" },
      { status: 400 },
    );
  }

  try {
    const data = await getFantasyDraftScore(draftId);
    return NextResponse.json(data);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch draft score";
    const status = message.startsWith("Fantasy draft not found") ? 404 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
