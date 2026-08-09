import DraftGameBreakdown from "@/components/fantasy/result/DraftGameBreakdown";
import DraftResult from "@/components/fantasy/result/DraftResult";
import Nav from "@/components/fantasy/Nav";
import { FANTASY_DRAFTS } from "@/lib/fantasy/fantasy.constants";
import { getFantasyDraftScore } from "@/lib/fantasy/get-fantasy-draft-score";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return FANTASY_DRAFTS.map((draft) => ({ id: draft.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/fantasy/[id]">): Promise<Metadata> {
  const { id } = await params;
  const draft = FANTASY_DRAFTS.find((d) => d.id === id);

  return {
    title: draft ? draft.name : "Draft",
    description: draft
      ? `${draft.captains.teamA} vs ${draft.captains.teamB}`
      : "Fantasy draft",
  };
}

export default async function FantasyDraftPage({
  params,
}: PageProps<"/fantasy/[id]">) {
  const { id } = await params;
  const draft = FANTASY_DRAFTS.find((d) => d.id === id);
  if (!draft) notFound();

  const draftScore = await getFantasyDraftScore(id);

  return (
    <div className="mx-auto w-full max-w-lg px-6 pb-16 text-center">
      <Nav />
      <h2 className="font-display text-2xl tracking-tight text-foreground">
        {draftScore.name}
      </h2>
      {/* TODO(live test): replace hardcoded "Final" with live status from scoreboard */}
      {/* TODO(live test): autorefresh ~every 3s while games are live; stop when final */}
      <h3 className="mt-2 text-center font-mono text-sm tracking-[0.25em] text-foreground">
        Final
      </h3>
      <DraftResult
        captains={draftScore.captains}
        result={draftScore.result}
      />
      <DraftGameBreakdown
        captains={draftScore.captains}
        scores={draftScore.scores}
      />
    </div>
  );
}
