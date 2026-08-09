import { BoxscorePlayer, BoxscorePlayerStatistics, BoxscoreResponse, BoxscoreTeam } from "../nba/boxscore.schema";
import { FantasyBoxscore, FantasyPlayer, FantasyPlayerStatistics } from "./fantasy.types";

export function processBoxscore(boxscore: BoxscoreResponse): FantasyBoxscore {
  return {
    gameId: boxscore.gameId,
    gameTimeUTC: boxscore.gameTimeUTC,
    homeTeam: {
      teamId: boxscore.homeTeam.teamId,
      teamName: boxscore.homeTeam.teamName,
    },
    awayTeam: {
      teamId: boxscore.awayTeam.teamId,
      teamName: boxscore.awayTeam.teamName,
    },
    arena: boxscore.arena,
    players: getAllPlayers(boxscore),
  };
}

function getAllPlayers(boxscore: BoxscoreResponse): Record<number, FantasyPlayer> {
  const players = [
    ...boxscore.homeTeam.players.map((player) => toFantasyPlayer(boxscore.homeTeam, player)),
    ...boxscore.awayTeam.players.map((player) => toFantasyPlayer(boxscore.awayTeam, player)),
  ];

  return Object.fromEntries(
    players.map((player) => [player.id, player]),
  );
}

function toFantasyPlayer(team: BoxscoreTeam, player: BoxscorePlayer): FantasyPlayer {
  return {
    id: player.personId,
    status: player.status,
    oncourt: player.oncourt,
    name: player.name,
    firstName: player.firstName,
    familyName: player.familyName,
    teamId: team.teamId,
    teamName: team.teamName,
    statistics: toFantasyPlayerStatistics(player.statistics),
  };
}

function toSecondsPlayed(minutes: string) {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:([\d.]+)S)?$/.exec(minutes);
  if (!match) return 0;
  const hours = Number(match[1] ?? 0);
  const mins = Number(match[2] ?? 0);
  const secs = Number(match[3] ?? 0);
  return hours * 3600 + mins * 60 + Math.floor(secs);
}

function toFantasyPlayerStatistics(statistics: BoxscorePlayerStatistics): FantasyPlayerStatistics {
  return {
    secondsPlayed: toSecondsPlayed(statistics.minutes),
    assists: statistics.assists,
    reboundsTotal: statistics.reboundsTotal,
    reboundsOffensive: statistics.reboundsOffensive,
    reboundsDefensive: statistics.reboundsDefensive,
    pointsTotal: statistics.points,
    pointsInsideTheArc: statistics.points - 3*statistics.threePointersMade,
    pointsOutsideTheArc: 3*statistics.threePointersMade,
    freeThrowsMade: statistics.freeThrowsMade,
    threePointersMade: statistics.threePointersMade,
    hustle: statistics.blocks + statistics.steals - statistics.turnovers,
    blocks: statistics.blocks,
    steals: statistics.steals,
    turnovers: statistics.turnovers,
  };
}