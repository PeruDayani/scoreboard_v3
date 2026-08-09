type DraftResultGamesNavProps = {
  activeIndex: number;
  gameIds: string[];
  onSelect: (index: number) => void;
};

export default function DraftResultGamesNav({
  activeIndex,
  gameIds,
  onSelect,
}: DraftResultGamesNavProps) {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-8">
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
  );
}
