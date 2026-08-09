type DraftGamesNavProps = {
  gameCount: number;
  activeIndex: number;
  gameIds: string[];
  onSelect: (index: number) => void;
};

export default function DraftGamesNav({
  gameCount,
  activeIndex,
  gameIds,
  onSelect,
}: DraftGamesNavProps) {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
        Draft {gameCount} games
      </p>
      <nav className="flex flex-wrap items-center justify-between gap-3">
        {gameIds.map((gameId, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${gameId}-${index}`}
              type="button"
              onClick={() => onSelect(index)}
              className={`text-xs font-medium tracking-[0.15em] uppercase transition-colors hover:text-terracotta ${
                isActive
                  ? "text-terracotta underline underline-offset-4"
                  : "text-muted"
              }`}
            >
              Game {index + 1}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
