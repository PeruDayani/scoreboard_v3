import type {
  FantasyBoxscore,
  FantasyDraftConfig,
  FantasyDraftGame,
  FantasyDraftPick,
  FantasyDraftResult,
  FantasyDraftWinner,
  FantasyGameResult,
  FantasyGameScore,
  FantasyPlayer,
  FantasyPlayerStatistics,
  FantasyTeamScore
} from '@/lib/fantasy/fantasy.types'

export function computeDraftScore (
  draft: FantasyDraftConfig,
  boxscores: Record<string, FantasyBoxscore>
): FantasyDraftResult {
  const scores = draft.games.map(game =>
    computeGameScore(draft.statistics, game, boxscores[game.gameId])
  )
  const result = computeDraftResult(draft.statistics, scores)

  return {
    id: draft.id,
    name: draft.name,
    captains: draft.captains,
    result,
    scores
  }
}

export function computeGameScore (
  statistics: FantasyDraftConfig['statistics'],
  game: FantasyDraftGame,
  boxscore: FantasyBoxscore | undefined
): FantasyGameScore {
  if (!boxscore) {
    throw new Error(`Boxscore not found for game ${game.gameId}`)
  }

  const teamAPlayers = toScoredPlayers(game.teams.teamA, boxscore, statistics)
  const teamBPlayers = toScoredPlayers(game.teams.teamB, boxscore, statistics)

  const teamAStatistics = sumTeamStatistics(teamAPlayers)
  const teamBStatistics = sumTeamStatistics(teamBPlayers)

  const resultStatistics = computeResultStatistics(
    statistics,
    teamAStatistics,
    teamBStatistics
  )
  const resultWinner = computeGameResultWinner(resultStatistics)

  return {
    gameId: game.gameId,
    teams: {
      teamA: {
        players: teamAPlayers,
        statistics: teamAStatistics
      },
      teamB: {
        players: teamBPlayers,
        statistics: teamBStatistics
      }
    },
    result: {
      winner: resultWinner,
      statisticsTotals: resultStatistics
    }
  }
}

function comparePlayersByStatistics (
  a: FantasyPlayer & { draftPick: number },
  b: FantasyPlayer & { draftPick: number },
  statistics: FantasyDraftConfig['statistics']
) {
  for (const statistic of statistics) {
    const diff = b.statistics[statistic.key] - a.statistics[statistic.key]
    if (diff !== 0) return diff
  }
  return a.draftPick - b.draftPick
}

function toScoredPlayers (
  picks: FantasyDraftPick[],
  boxscore: FantasyBoxscore,
  statistics: FantasyDraftConfig['statistics']
): FantasyTeamScore['players'] {
  return picks
    .map(pick => toScoredPlayer(pick, boxscore))
    .sort((a, b) => comparePlayersByStatistics(a, b, statistics))
}

function toScoredPlayer (
  pick: FantasyDraftPick,
  boxscore: FantasyBoxscore
): FantasyPlayer & { draftPick: number } {
  const player = boxscore.players[pick.playerId]
  if (!player) {
    throw new Error(
      `Player ${pick.playerId} not found in boxscore ${boxscore.gameId}`
    )
  }

  return { ...player, draftPick: pick.draftPick }
}

const EMPTY_STATISTICS: FantasyPlayerStatistics = {
  secondsPlayed: 0,
  assists: 0,
  reboundsTotal: 0,
  reboundsOffensive: 0,
  reboundsDefensive: 0,
  pointsTotal: 0,
  pointsInsideTheArc: 0,
  pointsOutsideTheArc: 0,
  freeThrowsMade: 0,
  threePointersMade: 0,
  hustle: 0,
  blocks: 0,
  steals: 0,
  turnovers: 0
}

function sumTeamStatistics (
  players: FantasyTeamScore['players']
): FantasyPlayerStatistics {
  return players.reduce(
    (total, player) => addStatistics(total, player.statistics),
    { ...EMPTY_STATISTICS }
  )
}

function addStatistics (
  total: FantasyPlayerStatistics,
  stats: FantasyPlayerStatistics
): FantasyPlayerStatistics {
  return {
    secondsPlayed: total.secondsPlayed + stats.secondsPlayed,
    assists: total.assists + stats.assists,
    reboundsTotal: total.reboundsTotal + stats.reboundsTotal,
    reboundsOffensive: total.reboundsOffensive + stats.reboundsOffensive,
    reboundsDefensive: total.reboundsDefensive + stats.reboundsDefensive,
    pointsTotal: total.pointsTotal + stats.pointsTotal,
    pointsInsideTheArc: total.pointsInsideTheArc + stats.pointsInsideTheArc,
    pointsOutsideTheArc: total.pointsOutsideTheArc + stats.pointsOutsideTheArc,
    freeThrowsMade: total.freeThrowsMade + stats.freeThrowsMade,
    threePointersMade: total.threePointersMade + stats.threePointersMade,
    hustle: total.hustle + stats.hustle,
    blocks: total.blocks + stats.blocks,
    steals: total.steals + stats.steals,
    turnovers: total.turnovers + stats.turnovers
  }
}

function compareScores (
  teamAScore: number,
  teamBScore: number
): FantasyDraftWinner {
  if (teamAScore > teamBScore) return 'teamA'
  if (teamBScore > teamAScore) return 'teamB'
  return 'draw'
}

function computeResultStatistics (
  statistics: FantasyDraftConfig['statistics'],
  teamAStatistics: FantasyPlayerStatistics,
  teamBStatistics: FantasyPlayerStatistics
): FantasyGameResult['statisticsTotals'] {
  return statistics.map(statistic => {
    const teamAScore = teamAStatistics[statistic.key]
    const teamBScore = teamBStatistics[statistic.key]

    return {
      ...statistic,
      teamAScore,
      teamBScore,
      winner: compareScores(teamAScore, teamBScore)
    }
  })
}

function computeGameResultWinner (
  statisticsTotals: FantasyGameResult['statisticsTotals']
): FantasyDraftWinner {
  const teamACategoryWins = statisticsTotals.filter(
    statistic => statistic.winner === 'teamA'
  ).length
  const teamBCategoryWins = statisticsTotals.filter(
    statistic => statistic.winner === 'teamB'
  ).length

  return compareScores(teamACategoryWins, teamBCategoryWins)
}

function computeDraftResult (
  statistics: FantasyDraftConfig['statistics'],
  scores: FantasyGameScore[]
): FantasyGameResult {
  if (scores.length === 0) { throw new Error('No scores provided') }
  if (scores.length === 1) { return scores[0].result }

  const statisticsTotals: FantasyGameResult['statisticsTotals'] = statistics.map(statistic => {
    const teamAScorePerGame = scores.map(score => score.teams.teamA.statistics[statistic.key])
    const teamAScore = teamAScorePerGame.reduce((a, b) => a + b, 0)

    const teamBScorePerGame = scores.map(score => score.teams.teamB.statistics[statistic.key])
    const teamBScore = teamBScorePerGame.reduce((a, b) => a + b, 0)

    return {
      ...statistic,
      teamAScore,
      teamAScorePerGame,
      teamBScore,
      teamBScorePerGame,
      winner: compareScores(teamAScore, teamBScore)
    }
  })

  return {
    winner: computeGameResultWinner(statisticsTotals),
    statisticsTotals
  }
}
