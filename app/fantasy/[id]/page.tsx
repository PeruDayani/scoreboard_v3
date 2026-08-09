import Nav from "@/components/fantasy/Nav";
import { FANTASY_DRAFTS } from "@/lib/fantasy/fantasy.constants";
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

  return (
    <div className="mx-auto w-full max-w-3xl px-6 text-center">
      <Nav />
      <div className="mt-4 text-left">
        <h2 className="font-display text-2xl tracking-tight text-foreground">
          {draft.name}
        </h2>
        <p className="mt-2 text-sm text-muted">
          {draft.captains.teamA} vs {draft.captains.teamB}
        </p>
      </div>
    </div>
  );
}
