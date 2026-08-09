import { z } from "zod";

export const boxscoreArenaSchema = z.object({
  arenaId: z.number(),
  arenaName: z.string(),
});

export type BoxscoreArena = z.infer<typeof boxscoreArenaSchema>;

export const boxscorePlayerStatisticsSchema = z.object({
  minutes: z.string(),
  points: z.number(),
  assists: z.number(),
  blocks: z.number(),
  steals: z.number(),
  turnovers: z.number(),
  reboundsTotal: z.number(),
  reboundsOffensive: z.number(),
  reboundsDefensive: z.number(),
  freeThrowsMade: z.number(),
  threePointersMade: z.number(),
});

export type BoxscorePlayerStatistics = z.infer<typeof boxscorePlayerStatisticsSchema>;

export const boxscorePlayerSchema = z.object({
  personId: z.number(),
  status: z.string(),
  oncourt: z.string().transform((value) => value === "1"),
  name: z.string(),
  firstName: z.string(),
  familyName: z.string(),
  statistics: boxscorePlayerStatisticsSchema,
});

export type BoxscorePlayer = z.infer<typeof boxscorePlayerSchema>;

export const boxscoreTeamSchema = z.object({
  teamName: z.string().nullable().transform((value) => value ?? ""),
  teamId: z.number(),
  players: z.array(boxscorePlayerSchema),
});

export type BoxscoreTeam = z.infer<typeof boxscoreTeamSchema>;

export const boxscoreResponseSchema = z.object({
  gameId: z.string(),
  arena: boxscoreArenaSchema,
  gameTimeUTC: z.string(),
  homeTeam: boxscoreTeamSchema,
  awayTeam: boxscoreTeamSchema,
});

export type BoxscoreResponse = z.infer<typeof boxscoreResponseSchema>;
