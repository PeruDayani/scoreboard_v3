import GameCard from "@/components/scoreboard/GameCard";
import { getScoreboard, type ScoreboardGame } from "@/lib/nba/scoreboard";
import { PiCourtBasketballDuotone } from "react-icons/pi";

type ContentProps = {
  gameDate?: string;
};

/** Live (2) → Final (3) → Pregame (1) */
const STATUS_ORDER: Record<number, number> = {
  2: 0,
  3: 1,
  1: 2,
};

function scoreDiff(game: ScoreboardGame) {
  return Math.abs(game.awayTeam.score - game.homeTeam.score);
}

function compareGames(a: ScoreboardGame, b: ScoreboardGame) {
  const statusDiff =
    (STATUS_ORDER[a.gameStatus] ?? 99) - (STATUS_ORDER[b.gameStatus] ?? 99);
  if (statusDiff !== 0) return statusDiff;
  return scoreDiff(a) - scoreDiff(b);
}

export default async function Content({ gameDate }: ContentProps) {
  const data = await getScoreboard({ gameDate });
  const sortedGames = [...data.scoreboard.games].sort(compareGames);

  if (sortedGames.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-muted">
        <p className="text-sm font-medium tracking-wide">
          No games scheduled
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-wrap justify-center gap-4 pb-10">
      {sortedGames.map((game) => (
        <GameCard
          key={game.gameId}
          game={game}
          gameDate={data.scoreboard.gameDate}
        />
      ))}
    </div>
  );
}
