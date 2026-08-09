import AvailablePlayerCard from "@/components/fantasy/create/draft/AvailablePlayerCard";
import type {
  DraftTeamKey,
  FantasyPlayer,
} from "@/lib/fantasy/fantasy.types";

type AvailablePlayersProps = {
  players: FantasyPlayer[];
  captainA: string;
  captainB: string;
  onDraft: (player: FantasyPlayer, team: DraftTeamKey) => void;
};

export default function AvailablePlayers({
  players,
  captainA,
  captainB,
  onDraft,
}: AvailablePlayersProps) {
  if (players.length === 0) {
    return (
      <p className="text-center text-sm text-muted">No players available.</p>
    );
  }

  const sorted = [...players].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
        Available Players
      </p>
      <ul className="flex flex-wrap justify-evenly gap-4">
        {sorted.map((player) => (
          <AvailablePlayerCard
            key={player.id}
            player={player}
            captainA={captainA}
            captainB={captainB}
            onDraft={onDraft}
          />
        ))}
      </ul>
    </div>
  );
}
