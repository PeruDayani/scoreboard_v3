import type { FantasyBoxscore } from "@/lib/fantasy/fantasy.types";
import { formatReadableDateTime } from "@/lib/utils/dates";

type GameMetaProps = {
  boxscore: FantasyBoxscore;
};

export default function GameMeta({ boxscore }: GameMetaProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-lg font-medium tracking-wide text-foreground">
        <span>{boxscore.awayTeam.teamName}</span>
        <span className="mx-4 text-xs"> @ </span>
        <span>{boxscore.homeTeam.teamName}</span>
      </p>
      <p className="text-xs font-medium tracking-[0.2em] text-muted">
        {boxscore.arena.arenaName}
      </p>
      <p className="text-xs font-medium tracking-[0.2em] text-muted">
        {formatReadableDateTime(boxscore.gameTimeUTC)}
      </p>
    </div>
  );
}
