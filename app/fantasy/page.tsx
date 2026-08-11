import Nav from "@/components/fantasy/Nav";
import { FANTASY_DRAFTS } from "@/lib/fantasy/fantasy.constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fantasy Drafts",
  description: "Making the All-Star game matter.",
};

export default function FantasyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 text-center">
      <Nav />
      <ul className="mt-4 flex flex-col gap-0 text-center">
        {FANTASY_DRAFTS.map((draft) => (
          <li key={draft.id}>
            <Link
              href={`/fantasy/${draft.id}`}
              className="group relative block py-8"
            >
              <p className="font-display text-lg tracking-tight text-foreground">
                {draft.name}
              </p>
              <p className="mt-1 text-sm text-muted">
                {draft.captains.teamA} · {draft.captains.teamB}
              </p>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 mx-auto h-px w-24 bg-border transition-colors group-hover:bg-terracotta"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
