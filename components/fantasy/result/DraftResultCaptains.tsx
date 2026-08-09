import type {
  DraftTeamKey,
  FantasyDraftResult,
  FantasyDraftWinner,
} from "@/lib/fantasy/fantasy.types";
import { FaCrown } from "react-icons/fa6";

type DraftResultCaptainsProps = {
  captains: FantasyDraftResult["captains"];
  winner: FantasyDraftWinner;
};

function captainClass(side: DraftTeamKey, winner: FantasyDraftWinner) {
  return winner === side ? "font-semibold text-foreground" : "text-muted";
}

export default function DraftResultCaptains({
  captains,
  winner,
}: DraftResultCaptainsProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
      <p
        className={`text-center font-mono text-sm italic ${captainClass(
          "teamA",
          winner,
        )}`}
      >
        {captains.teamA}
      </p>

      <div
        className={`flex w-16 justify-center`}
        aria-label={
          winner === "draw"
            ? "Draw"
            : `Winner: ${
                winner === "teamA" ? captains.teamA : captains.teamB
              }`
        }
      >
        <FaCrown
          className={`size-6 transition-transform duration-500 ${
            winner === "draw" ? "text-muted" : "text-terracotta"
          } ${
            winner === "teamA"
              ? "-rotate-12"
              : winner === "teamB"
                ? "rotate-12"
                : "rotate-0"
          }`}
        />
      </div>

      <p
        className={`text-center font-mono text-sm italic ${captainClass(
          "teamB",
          winner,
        )}`}
      >
        {captains.teamB}
      </p>
    </div>
  );
}
