import type { FantasyDraftPick } from "@/lib/fantasy/fantasy.types";
import { FaArrowRotateLeft } from "react-icons/fa6";

type TeamRosterProps = {
  label: string;
  picks: FantasyDraftPick[];
  onUndo: (playerId: number) => void;
};

export default function TeamRoster({ label, picks, onUndo }: TeamRosterProps) {
  const sorted = [...picks].sort((a, b) => a.draftPick - b.draftPick);

  return (
    <div className="flex w-64 flex-col gap-3">
      <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
        {label}
      </p>
      {sorted.length === 0 ? (
        <p className="text-center text-sm text-muted">No players drafted.</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {sorted.map((pick) => (
            <li
              key={pick.playerId}
              className="flex items-center justify-between gap-2 rounded-md border border-border bg-rose px-3 py-2 text-sm"
            >
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-foreground overflow-hidden text-ellipsis whitespace-nowrap">{pick.playerName}</span>
                <span className="text-xs text-muted">{pick.teamName}</span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="text-xs text-muted">#{pick.draftPick}</span>
                <button
                  type="button"
                  onClick={() => onUndo(pick.playerId)}
                  aria-label={`Undo draft of ${pick.playerName}`}
                  className="rounded-full p-1.5 text-muted transition-colors hover:bg-border hover:text-terracotta"
                >
                  <FaArrowRotateLeft className="size-3.5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
