import { FantasyDraftConfig, FantasyStatisticOption } from './fantasy.types'

export const FANTASY_STATISTIC_OPTIONS: FantasyStatisticOption[] = [
  { key: 'pointsInsideTheArc', label: 'Inside' },
  { key: 'threePointersMade', label: "Trey's" },
  { key: 'assists', label: 'Assists' },
  { key: 'hustle', label: 'Hustle' },
  { key: 'reboundsTotal', label: 'Rebounds' },
  { key: 'secondsPlayed', label: 'Seconds played' },
  { key: 'pointsTotal', label: 'Points' },
  { key: 'pointsOutsideTheArc', label: 'Three-pointers made' },
  { key: 'reboundsOffensive', label: 'Offensive rebounds' },
  { key: 'reboundsDefensive', label: 'Defensive rebounds' },
  { key: 'freeThrowsMade', label: 'Free throws made' },
  { key: 'blocks', label: 'Blocks' },
  { key: 'steals', label: 'Steals' },
  { key: 'turnovers', label: 'Turnovers' }
]

export const FANTASY_DRAFTS: FantasyDraftConfig[] = [
  {
    id: 'all-star-2026',
    name: 'All Star 2026',
    captains: {
      teamA: 'P. Dayani',
      teamB: 'H. Davila'
    },
    games: [
      {
        gameId: '0032500011',
        teams: {
          teamA: [
            {
              playerId: 1641705,
              playerName: 'Victor Wembanyama',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 1
            },
            {
              playerId: 1630178,
              playerName: 'Tyrese Maxey',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 3
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 5
            },
            {
              playerId: 1626164,
              playerName: 'Devin Booker',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 7
            },
            {
              playerId: 1626181,
              playerName: 'Norman Powell',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 9
            },
            {
              playerId: 1630552,
              playerName: 'Jalen Johnson',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 11
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 13
            },
            {
              playerId: 1630166,
              playerName: 'Deni Avdija',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 15
            }
          ],
          teamB: [
            {
              playerId: 1630595,
              playerName: 'Cade Cunningham',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 2
            },
            {
              playerId: 1627750,
              playerName: 'Jamal Murray',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 4
            },
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 6
            },
            {
              playerId: 1631105,
              playerName: 'Jalen Duren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 8
            },
            {
              playerId: 1629029,
              playerName: 'Luka Dončić',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 10
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokić',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 12
            },
            {
              playerId: 1630567,
              playerName: 'Scottie Barnes',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 14
            },
            {
              playerId: 1631096,
              playerName: 'Chet Holmgren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 16
            }
          ]
        }
      },
      {
        gameId: '0032500021',
        teams: {
          teamA: [
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 1
            },
            {
              playerId: 1631105,
              playerName: 'Jalen Duren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 3
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 5
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 7
            },
            {
              playerId: 202695,
              playerName: 'Kawhi Leonard',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 9
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 11
            },
            {
              playerId: 1630552,
              playerName: 'Jalen Johnson',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 13
            },
            {
              playerId: 1631096,
              playerName: 'Chet Holmgren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 15
            }
          ],
          teamB: [
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 2
            },
            {
              playerId: 1630178,
              playerName: 'Tyrese Maxey',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 4
            },
            {
              playerId: 1628973,
              playerName: 'Jalen Brunson',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 6
            },
            {
              playerId: 1626164,
              playerName: 'Devin Booker',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 8
            },
            {
              playerId: 1630567,
              playerName: 'Scottie Barnes',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 10
            },
            {
              playerId: 1630595,
              playerName: 'Cade Cunningham',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 12
            },
            {
              playerId: 1628368,
              playerName: "De'Aaron Fox",
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 14
            },
            {
              playerId: 1627742,
              playerName: 'Brandon Ingram',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 16
            }
          ]
        }
      },
      {
        gameId: '0032500031',
        teams: {
          teamA: [
            {
              playerId: 1641705,
              playerName: 'Victor Wembanyama',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 1
            },
            {
              playerId: 202695,
              playerName: 'Kawhi Leonard',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 3
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 5
            },
            {
              playerId: 1627750,
              playerName: 'Jamal Murray',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 7
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 9
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 11
            },
            {
              playerId: 1630166,
              playerName: 'Deni Avdija',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 13
            },
            {
              playerId: 1628368,
              playerName: "De'Aaron Fox",
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 15
            },
            {
              playerId: 1627742,
              playerName: 'Brandon Ingram',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 17
            },
            {
              playerId: 203507,
              playerName: 'Giannis Antetokounmpo',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 19
            }
          ],
          teamB: [
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 2
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 4
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 6
            },
            {
              playerId: 1628973,
              playerName: 'Jalen Brunson',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 8
            },
            {
              playerId: 1630578,
              playerName: 'Alperen Sengun',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 10
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokić',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 12
            },
            {
              playerId: 1626181,
              playerName: 'Norman Powell',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 14
            },
            {
              playerId: 1629029,
              playerName: 'Luka Dončić',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 16
            },
            {
              playerId: 201939,
              playerName: 'Stephen Curry',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 18
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616861,
              teamName: 'World',
              draftPick: 20
            }
          ]
        }
      },
      {
        gameId: '0032500041',
        teams: {
          teamA: [
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 2
            },
            {
              playerId: 1631105,
              playerName: 'Jalen Duren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 4
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 6
            },
            {
              playerId: 1630567,
              playerName: 'Scottie Barnes',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 8
            },
            {
              playerId: 1626164,
              playerName: 'Devin Booker',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 10
            },
            {
              playerId: 1628368,
              playerName: "De'Aaron Fox",
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 12
            },
            {
              playerId: 1630552,
              playerName: 'Jalen Johnson',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 14
            },
            {
              playerId: 1631096,
              playerName: 'Chet Holmgren',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 16
            }
          ],
          teamB: [
            {
              playerId: 202695,
              playerName: 'Kawhi Leonard',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 1
            },
            {
              playerId: 1630178,
              playerName: 'Tyrese Maxey',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 3
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 5
            },
            {
              playerId: 1630595,
              playerName: 'Cade Cunningham',
              teamId: 1610616859,
              teamName: 'Stars',
              draftPick: 7
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 9
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 11
            },
            {
              playerId: 1628973,
              playerName: 'Jalen Brunson',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 13
            },
            {
              playerId: 1627742,
              playerName: 'Brandon Ingram',
              teamId: 1610616860,
              teamName: 'Stripes',
              draftPick: 15
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsInsideTheArc',
        label: 'Inside'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      }
    ]
  },
  {
    id: 'all-star-2025',
    name: 'All-Star 2025',
    captains: {
      teamA: 'P. Dayani',
      teamB: 'H. Davila'
    },
    games: [
      {
        gameId: '0032400011',
        teams: {
          teamA: [
            {
              playerId: 1641705,
              playerName: 'Victor Wembanyama',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 1
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 3
            },
            {
              playerId: 1629636,
              playerName: 'Darius Garland',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 5
            },
            {
              playerId: 1628991,
              playerName: 'Jaren Jackson Jr.',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 7
            },
            {
              playerId: 1631114,
              playerName: 'Jalen Williams',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 9
            },
            {
              playerId: 1628973,
              playerName: 'Jalen Brunson',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 11
            },
            {
              playerId: 1629027,
              playerName: 'Trae Young',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 13
            },
            {
              playerId: 1630578,
              playerName: 'Alperen Sengun',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 15
            }
          ],
          teamB: [
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 2
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 4
            },
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 6
            },
            {
              playerId: 1630595,
              playerName: 'Cade Cunningham',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 8
            },
            {
              playerId: 1630596,
              playerName: 'Evan Mobley',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 10
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 12
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokić',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 14
            },
            {
              playerId: 1629639,
              playerName: 'Tyler Herro',
              teamId: 1610616853,
              teamName: 'Young Stars',
              draftPick: 16
            }
          ]
        }
      },
      {
        gameId: '0032400021',
        teams: {
          teamA: [
            {
              playerId: 201939,
              playerName: 'Stephen Curry',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 1
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 3
            },
            {
              playerId: 1642261,
              playerName: 'Dalton Knecht',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 5
            },
            {
              playerId: 202681,
              playerName: 'Kyrie Irving',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 7
            },
            {
              playerId: 1631218,
              playerName: 'Trayce Jackson-Davis',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 9
            },
            {
              playerId: 1642264,
              playerName: 'Stephon Castle',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 11
            },
            {
              playerId: 1642377,
              playerName: 'Jaylen Wells',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 13
            }
          ],
          teamB: [
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 2
            },
            {
              playerId: 203081,
              playerName: 'Damian Lillard',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 4
            },
            {
              playerId: 1641708,
              playerName: 'Amen Thompson',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 6
            },
            {
              playerId: 1641744,
              playerName: 'Zach Edey',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 8
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 10
            },
            {
              playerId: 1641718,
              playerName: 'Keyonte George',
              teamId: 1610616854,
              teamName: 'Rising Stars',
              draftPick: 12
            },
            {
              playerId: 201935,
              playerName: 'James Harden',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 14
            }
          ]
        }
      },
      {
        gameId: '0032400031',
        teams: {
          teamA: [
            {
              playerId: 201939,
              playerName: 'Stephen Curry',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 2
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 4
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 6
            },
            {
              playerId: 203081,
              playerName: 'Damian Lillard',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 8
            },
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 10
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 12
            },
            {
              playerId: 201935,
              playerName: 'James Harden',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 14
            }
          ],
          teamB: [
            {
              playerId: 1641705,
              playerName: 'Victor Wembanyama',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 1
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 3
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokić',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 5
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 7
            },
            {
              playerId: 202681,
              playerName: 'Kyrie Irving',
              teamId: 1610616852,
              teamName: 'OGs',
              draftPick: 9
            },
            {
              playerId: 1629027,
              playerName: 'Trae Young',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 11
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616851,
              teamName: 'Global Stars',
              draftPick: 13
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsInsideTheArc',
        label: 'Inside'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      }
    ]
  },
  {
    id: 'all-star-2024',
    name: 'All-Star 2024',
    captains: {
      teamA: 'P. Dayani',
      teamB: 'H. Davila'
    },
    games: [
      {
        gameId: '0032300001',
        teams: {
          teamA: [
            {
              playerId: 203507,
              playerName: 'Giannis Antetokounmpo',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 1
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 3
            },
            {
              playerId: 203081,
              playerName: 'Damian Lillard',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 5
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 7
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokic',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 9
            },
            {
              playerId: 201939,
              playerName: 'Stephen Curry',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 11
            },
            {
              playerId: 1626164,
              playerName: 'Devin Booker',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 13
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 15
            },
            {
              playerId: 202331,
              playerName: 'Paul George',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 17
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 19
            },
            {
              playerId: 1629027,
              playerName: 'Trae Young',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 21
            },
            {
              playerId: 202695,
              playerName: 'Kawhi Leonard',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 23
            }
          ],
          teamB: [
            {
              playerId: 1630169,
              playerName: 'Tyrese Haliburton',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 2
            },
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 4
            },
            {
              playerId: 1629029,
              playerName: 'Luka Doncic',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 6
            },
            {
              playerId: 1628389,
              playerName: 'Bam Adebayo',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 8
            },
            {
              playerId: 201142,
              playerName: 'Kevin Durant',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 10
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 12
            },
            {
              playerId: 1630178,
              playerName: 'Tyrese Maxey',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 14
            },
            {
              playerId: 203076,
              playerName: 'Anthony Davis',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 16
            },
            {
              playerId: 1628973,
              playerName: 'Jalen Brunson',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 18
            },
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616834,
              teamName: 'West',
              draftPick: 20
            },
            {
              playerId: 1631094,
              playerName: 'Paolo Banchero',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 22
            },
            {
              playerId: 1630567,
              playerName: 'Scottie Barnes',
              teamId: 1610616833,
              teamName: 'East',
              draftPick: 24
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsInsideTheArc',
        label: 'Inside'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      }
    ]
  },
  {
    id: 'all-star-2023',
    name: 'All-Star 2023',
    captains: {
      teamA: 'P. Dayani',
      teamB: 'H. Davila'
    },
    games: [
      {
        gameId: '0032200001',
        teams: {
          teamA: [
            {
              playerId: 203954,
              playerName: 'Joel Embiid',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 1
            },
            {
              playerId: 203507,
              playerName: 'Giannis Antetokounmpo',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 3
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 5
            },
            {
              playerId: 202681,
              playerName: 'Kyrie Irving',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 7
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 9
            },
            {
              playerId: 203081,
              playerName: 'Damian Lillard',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 11
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 13
            },
            {
              playerId: 202331,
              playerName: 'Paul George',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 15
            },
            {
              playerId: 201942,
              playerName: 'DeMar DeRozan',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 17
            },
            {
              playerId: 201950,
              playerName: 'Jrue Holiday',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 19
            },
            {
              playerId: 1628389,
              playerName: 'Bam Adebayo',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 21
            },
            {
              playerId: 1628368,
              playerName: "De'Aaron Fox",
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 23
            }
          ],
          teamB: [
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 2
            },
            {
              playerId: 1629029,
              playerName: 'Luka Doncic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 4
            },
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 6
            },
            {
              playerId: 1629630,
              playerName: 'Ja Morant',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 8
            },
            {
              playerId: 1628374,
              playerName: 'Lauri Markkanen',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 10
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 12
            },
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 14
            },
            {
              playerId: 1627734,
              playerName: 'Domantas Sabonis',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 16
            },
            {
              playerId: 1630169,
              playerName: 'Tyrese Haliburton',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 18
            },
            {
              playerId: 1628991,
              playerName: 'Jaren Jackson Jr.',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 20
            },
            {
              playerId: 203944,
              playerName: 'Julius Randle',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 22
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 24
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsInsideTheArc',
        label: 'Inside'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      }
    ]
  },
  {
    id: 'all-star-2023-the-ringer',
    name: 'All-Star 2023: The Ringer',
    captains: {
      teamA: 'S. Sohi',
      teamB: 'J. Mann'
    },
    games: [
      {
        gameId: '0032200001',
        teams: {
          teamA: [
            {
              playerId: 203507,
              playerName: 'Giannis Antetokounmpo',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 1
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 3
            },
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 5
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 7
            },
            {
              playerId: 202681,
              playerName: 'Kyrie Irving',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 9
            },
            {
              playerId: 1629630,
              playerName: 'Ja Morant',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 11
            },
            {
              playerId: 1628991,
              playerName: 'Jaren Jackson Jr.',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 13
            },
            {
              playerId: 1628983,
              playerName: 'Shai Gilgeous-Alexander',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 15
            },
            {
              playerId: 201950,
              playerName: 'Jrue Holiday',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 17
            },
            {
              playerId: 1627734,
              playerName: 'Domantas Sabonis',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 19
            },
            {
              playerId: 201942,
              playerName: 'DeMar DeRozan',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 21
            },
            {
              playerId: 1628368,
              playerName: "De'Aaron Fox",
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 23
            }
          ],
          teamB: [
            {
              playerId: 203954,
              playerName: 'Joel Embiid',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 2
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 4
            },
            {
              playerId: 1629029,
              playerName: 'Luka Doncic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 6
            },
            {
              playerId: 1627759,
              playerName: 'Jaylen Brown',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 8
            },
            {
              playerId: 1627783,
              playerName: 'Pascal Siakam',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 10
            },
            {
              playerId: 1628389,
              playerName: 'Bam Adebayo',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 12
            },
            {
              playerId: 1630169,
              playerName: 'Tyrese Haliburton',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 14
            },
            {
              playerId: 202331,
              playerName: 'Paul George',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 16
            },
            {
              playerId: 203081,
              playerName: 'Damian Lillard',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 18
            },
            {
              playerId: 1630162,
              playerName: 'Anthony Edwards',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 20
            },
            {
              playerId: 1628374,
              playerName: 'Lauri Markkanen',
              teamId: 1610616833,
              teamName: 'Giannis',
              draftPick: 22
            },
            {
              playerId: 203944,
              playerName: 'Julius Randle',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 24
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsInsideTheArc',
        label: 'Inside'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      }
    ]
  },
  {
    id: 'all-star-2022',
    name: 'All-Star 2022',
    captains: {
      teamA: 'P. Dayani',
      teamB: 'H. Davila'
    },
    games: [
      {
        gameId: '0032100001',
        teams: {
          teamA: [
            {
              playerId: 203507,
              playerName: 'Giannis Antetokounmpo',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 1
            },
            {
              playerId: 2544,
              playerName: 'LeBron James',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 3
            },
            {
              playerId: 1629630,
              playerName: 'Ja Morant',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 5
            },
            {
              playerId: 203999,
              playerName: 'Nikola Jokic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 7
            },
            {
              playerId: 203952,
              playerName: 'Andrew Wiggins',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 9
            },
            {
              playerId: 1626164,
              playerName: 'Devin Booker',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 12
            },
            {
              playerId: 1626157,
              playerName: 'Karl-Anthony Towns',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 14
            },
            {
              playerId: 203114,
              playerName: 'Khris Middleton',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 16
            },
            {
              playerId: 1629636,
              playerName: 'Darius Garland',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 18
            },
            {
              playerId: 101108,
              playerName: 'Chris Paul',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 20
            },
            {
              playerId: 1628378,
              playerName: 'Donovan Mitchell',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 22
            },
            {
              playerId: 1627749,
              playerName: 'Dejounte Murray',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 24
            }
          ],
          teamB: [
            {
              playerId: 201939,
              playerName: 'Stephen Curry',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 2
            },
            {
              playerId: 1629027,
              playerName: 'Trae Young',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 4
            },
            {
              playerId: 203954,
              playerName: 'Joel Embiid',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 6
            },
            {
              playerId: 1628369,
              playerName: 'Jayson Tatum',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 8
            },
            {
              playerId: 201942,
              playerName: 'DeMar DeRozan',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 10
            },
            {
              playerId: 1629029,
              playerName: 'Luka Doncic',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 11
            },
            {
              playerId: 203897,
              playerName: 'Zach LaVine',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 13
            },
            {
              playerId: 1628386,
              playerName: 'Jarrett Allen',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 15
            },
            {
              playerId: 203497,
              playerName: 'Rudy Gobert',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 17
            },
            {
              playerId: 1630163,
              playerName: 'LaMelo Ball',
              teamId: 1610616833,
              teamName: 'Durant',
              draftPick: 19
            },
            {
              playerId: 1627832,
              playerName: 'Fred VanVleet',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 21
            },
            {
              playerId: 202710,
              playerName: 'Jimmy Butler',
              teamId: 1610616834,
              teamName: 'LeBron',
              draftPick: 23
            }
          ]
        }
      }
    ],
    statistics: [
      {
        key: 'pointsTotal',
        label: 'Points'
      },
      {
        key: 'threePointersMade',
        label: "Trey's"
      },
      {
        key: 'assists',
        label: 'Assists'
      },
      {
        key: 'reboundsTotal',
        label: 'Rebounds'
      },
      {
        key: 'hustle',
        label: 'Hustle'
      }
    ]
  }
]
