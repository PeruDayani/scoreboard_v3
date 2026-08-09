const MAX_GAMES = 9;

type GamesStepProps = {
  gameIds: string[];
  onGameIdChange: (index: number, value: string) => void;
  onAddGame: () => void;
  onRemoveGame: (index: number) => void;
};

const inputClassName =
  "rounded-md border border-border bg-rose px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-terracotta";

export default function GamesStep({
  gameIds,
  onGameIdChange,
  onAddGame,
  onRemoveGame,
}: GamesStepProps) {
  const canAdd = gameIds.length < MAX_GAMES;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
          Games
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {gameIds.map((gameId, index) => (
          <li key={index} className="flex items-center gap-2">
            <label className="flex min-w-0 flex-1 flex-col gap-2">
              <span className="text-sm text-foreground">Game {index + 1}</span>
              <input
                type="text"
                value={gameId}
                onChange={(event) => onGameIdChange(index, event.target.value)}
                placeholder="0022500001"
                className={inputClassName}
              />
            </label>
            {gameIds.length > 1 ? (
              <button
                type="button"
                onClick={() => onRemoveGame(index)}
                className="mt-7 text-xs font-medium tracking-[0.15em] text-muted uppercase transition-colors hover:text-terracotta"
              >
                Remove
              </button>
            ) : null}
          </li>
        ))}
      </ul>

      {canAdd ? (
        <button
          type="button"
          onClick={onAddGame}
          className="self-start text-xs font-medium tracking-[0.2em] text-muted uppercase transition-colors hover:text-terracotta"
        >
          Add game
        </button>
      ) : null}
    </div>
  );
}

export { MAX_GAMES };
