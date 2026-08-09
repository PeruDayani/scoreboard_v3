import type {
  DraftTeamKey,
  FantasyPlayer,
} from "@/lib/fantasy/fantasy.types";
import Image from "next/image";

type AvailablePlayerCardProps = {
  player: FantasyPlayer;
  captainA: string;
  captainB: string;
  onDraft: (player: FantasyPlayer, team: DraftTeamKey) => void;
};

function playerHeadshotUrl(playerId: number) {
  return `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
}

const draftLinkClassName =
  "text-foreground underline-offset-2 transition-colors capitalize cursor-pointer hover:text-terracotta hover:underline";

export default function AvailablePlayerCard({
  player,
  captainA,
  captainB,
  onDraft,
}: AvailablePlayerCardProps) {
  return (
    <li className="group flex w-64 items-center gap-3 rounded-md border border-border bg-rose px-2.5 py-2.5 text-sm">
      <Image
        src={playerHeadshotUrl(player.id)}
        alt={player.name}
        width={72}
        height={72}
        className="size-[4.5rem] shrink-0 rounded-full border border-border object-cover object-top"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="truncate text-base text-foreground">{player.name}</span>
          <span className="truncate text-sm text-muted">{player.teamName}</span>
        </div>
        <p
          className="flex items-center gap-1.5 text-xs text-muted opacity-100 transition-opacity [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
        >
          <button
            type="button"
            onClick={() => onDraft(player, "teamA")}
            className={draftLinkClassName}
          >
            {captainA || "Team A"}
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => onDraft(player, "teamB")}
            className={draftLinkClassName}
          >
            {captainB || "Team B"}
          </button>
        </p>
      </div>
    </li>
  );
}
