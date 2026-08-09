import type { FantasyDraftConfig } from "@/lib/fantasy/fantasy.types";

export const CREATE_DRAFT_SESSION_KEY = "fantasy-draft-create";

export type CreateDraftStep = 0 | 1 | 2 | 3 | 4;

export type CreateDraftState = FantasyDraftConfig & {
  step: CreateDraftStep;
};

export function createEmptyDraftGame(): FantasyDraftConfig["games"][number] {
  return {
    gameId: "",
    teams: {
      teamA: [],
      teamB: [],
    },
  };
}

export const INITIAL_CREATE_DRAFT_STATE: CreateDraftState = {
  step: 0,
  id: "",
  name: "",
  captains: {
    teamA: "",
    teamB: "",
  },
  games: [createEmptyDraftGame()],
  statistics: [],
};

export function loadCreateDraftState(): CreateDraftState {
  if (typeof window === "undefined") return INITIAL_CREATE_DRAFT_STATE;

  try {
    const raw = sessionStorage.getItem(CREATE_DRAFT_SESSION_KEY);
    if (!raw) return INITIAL_CREATE_DRAFT_STATE;
    const parsed = JSON.parse(raw) as Partial<CreateDraftState>;
    return {
      ...INITIAL_CREATE_DRAFT_STATE,
      ...parsed,
      captains: {
        ...INITIAL_CREATE_DRAFT_STATE.captains,
        ...parsed.captains,
      },
      games:
        parsed.games && parsed.games.length > 0
          ? parsed.games
          : [createEmptyDraftGame()],
      statistics: parsed.statistics ?? INITIAL_CREATE_DRAFT_STATE.statistics,
    };
  } catch {
    return INITIAL_CREATE_DRAFT_STATE;
  }
}

export function saveCreateDraftState(state: CreateDraftState) {
  sessionStorage.setItem(CREATE_DRAFT_SESSION_KEY, JSON.stringify(state));
}

export function clearCreateDraftState() {
  sessionStorage.removeItem(CREATE_DRAFT_SESSION_KEY);
}

/** Drop wizard-only fields for the final config shape. */
export function toFantasyDraftConfig(state: CreateDraftState): FantasyDraftConfig {
  const { step: _step, ...config } = state;
  return config;
}
