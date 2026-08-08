import { z } from "zod";

export const scoreboardMetaSchema = z.object({
  version: z.number(),
  request: z.string().nullable(),
  time: z.string(),
});

export type ScoreboardMeta = z.infer<typeof scoreboardMetaSchema>;

export const scoreboardTeamSchema = z.object({
  teamId: z.number(),
  teamName: z.string(),
  teamCity: z.string(),
  wins: z.number(),
  losses: z.number(),
  score: z.number(),
});

export type ScoreboardTeam = z.infer<typeof scoreboardTeamSchema>;

export const scoreboardGameSchema = z.object({
  gameId: z.string(),
  period: z.number(),
  gameStatus: z.number(),
  gameStatusText: z.string(),
  homeTeam: scoreboardTeamSchema,
  awayTeam: scoreboardTeamSchema,
});

export type ScoreboardGame = z.infer<typeof scoreboardGameSchema>;

export const scoreboardSchema = z.object({
  gameDate: z.string(),
  leagueId: z.string(),
  leagueName: z.string(),
  games: z.array(scoreboardGameSchema),
});

export type Scoreboard = z.infer<typeof scoreboardSchema>;

export const scoreboardResponseSchema = z.object({
  meta: scoreboardMetaSchema,
  scoreboard: scoreboardSchema,
});

export type ScoreboardResponse = z.infer<typeof scoreboardResponseSchema>;
