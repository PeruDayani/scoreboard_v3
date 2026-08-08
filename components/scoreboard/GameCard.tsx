"use client";

import type { ScoreboardGame, ScoreboardTeam } from "@/lib/nba/scoreboard";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaYoutube } from "react-icons/fa6";

type GameCardProps = {
  game: ScoreboardGame;
  gameDate: string;
};

function teamLogoUrl(teamId: number) {
  return `https://cdn.nba.com/logos/nba/${teamId}/primary/L/logo.svg`;
}

function highlightsUrl(
  awayTeam: ScoreboardTeam,
  homeTeam: ScoreboardTeam,
  gameDate: string,
) {
  const query = `${awayTeam.teamCity} ${awayTeam.teamName} at ${homeTeam.teamCity} ${homeTeam.teamName} on ${gameDate} highlights`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}

function TeamColumn({ team }: { team: ScoreboardTeam }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
      <Image
        src={teamLogoUrl(team.teamId)}
        alt={`${team.teamCity} ${team.teamName} logo`}
        width={56}
        height={56}
        className="size-14 object-contain"
      />
      <p className="text-xs tracking-wide text-muted">
        {team.wins}-{team.losses}
      </p>
    </div>
  );
}

export default function GameCard({ game, gameDate }: GameCardProps) {
  const [showScore, setShowScore] = useState(false);
  const scoreDiff = Math.abs(game.awayTeam.score - game.homeTeam.score);
  const hiddenScoreLabel =
    scoreDiff === 0
      ? "Tied"
      : `Less than ${Math.ceil(scoreDiff / 5) * 5}`;

  return (
    <article className="flex w-80 shrink-0 flex-col gap-4 rounded-lg border border-border bg-white/50 px-4 py-5">
      <div className="flex items-center justify-center gap-2">
        <TeamColumn team={game.awayTeam} />
        <p className="text-xs tracking-wide text-muted">vs</p>
        <TeamColumn team={game.homeTeam} />
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-medium text-lg tracking-tight text-foreground">
          {game.gameStatus === 1 ? (
            <span>Scheduled</span>
          ) : showScore ? (
            <>
              {game.awayTeam.score}{" "}
              <span className="text-muted">–</span>{" "}
              {game.homeTeam.score}
            </>
          ) : (
            <span>{hiddenScoreLabel}</span>
          )}
        </p>

        <p className="text-xs font-medium tracking-[0.15em] text-muted uppercase">
          {game.gameStatusText}
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setShowScore((visible) => !visible)}
          aria-label={showScore ? "Hide score" : "Show score"}
          className="rounded-full p-2 text-muted transition-colors hover:bg-border/60 hover:text-terracotta"
        >
          {showScore ? (
            <FaEyeSlash className="size-4" />
          ) : (
            <FaEye className="size-4" />
          )}
        </button>

        <a
          href={highlightsUrl(game.awayTeam, game.homeTeam, gameDate)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch highlights on YouTube"
          className="rounded-full p-2 text-muted transition-colors hover:bg-border/60 hover:text-terracotta"
        >
          <FaYoutube className="size-4" />
        </a>
      </div>
    </article>
  );
}
