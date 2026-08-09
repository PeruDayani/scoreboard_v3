export type FantasyDraftConfig = {
  id: string;
  name: string;
  captains: {
    teamA: string;
    teamB: string;
  }
  games: {
    gameId: string;
    teams: {
      teamA: FantasyDraftPick[];
      teamB: FantasyDraftPick[];
    };
  }[],
  statistics: {
    key: keyof FantasyPlayerStatistics;
    label: string;
  }[]
}

export type FantasyDraftPick = {
  playerId: number;
  playerName: string;
  teamId: number;
  teamName: string;
  draftPick: number;
}

export type DraftTeamKey = "teamA" | "teamB";

export type FantasyBoxscore = {
  gameId: string;
  gameTimeUTC: string;
  homeTeam: {
    teamId: number;
    teamName: string;
  };
  awayTeam: {
    teamId: number;
    teamName: string;
  };
  arena: {
    arenaId: number;
    arenaName: string;
  };
  players: Record<number, FantasyPlayer>;
};

export type FantasyPlayer = {
  id: number;
  status: string;
  oncourt: boolean;
  name: string;
  firstName: string;
  familyName: string;
  teamId: number;
  teamName: string;
  position: string;
  starter: boolean;
  order: number;
  statistics: FantasyPlayerStatistics;
};

export type FantasyPlayerStatistics = {
  secondsPlayed: number;
  assists: number;
  reboundsTotal: number;
  reboundsOffensive: number;
  reboundsDefensive: number;
  pointsTotal: number;
  pointsInsideTheArc: number;
  pointsOutsideTheArc: number;
  freeThrowsMade: number;
  threePointersMade: number;
  hustle: number;
  blocks: number;
  steals: number;
  turnovers: number;
};

export type FantasyStatisticOption = {
  key: keyof FantasyPlayerStatistics;
  label: string;
};

export type FantasyTeamScore = {
  players: (FantasyPlayer & FantasyDraftPick)[];
  statistics: FantasyPlayerStatistics;
};

export type FantasyDraftScore = {
  id: string;
  name: string;
  captains: FantasyDraftConfig["captains"];
  statistics: FantasyDraftConfig["statistics"];
  games: {
    gameId: string;
    teams: {
      teamA: FantasyTeamScore;
      teamB: FantasyTeamScore;
    };
  }[];
};