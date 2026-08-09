import { FANTASY_STATISTIC_OPTIONS } from "@/lib/fantasy/fantasy.constants";
import type { FantasyStatisticOption } from "@/lib/fantasy/fantasy.types";

type StatisticsStepProps = {
  selectedStats: FantasyStatisticOption["key"][];
  onToggleStat: (key: FantasyStatisticOption["key"]) => void;
};

export default function StatisticsStep({
  selectedStats,
  onToggleStat,
}: StatisticsStepProps) {
  const count = selectedStats.length;
  const isMinimum = count >= 3;
  const isOdd = count % 2 === 1;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
          Statistics
        </p>
        <p className="text-center text-xs text-muted">
          {count} selected
          {!isMinimum ? " · At least 3" : ""}
          {!isOdd ? " · Odd number" : ""}
        </p>
      </div>
      <ul className="flex flex-col gap-2">
        {FANTASY_STATISTIC_OPTIONS.map((option) => {
          const selected = selectedStats.includes(option.key);

          return (
            <li key={option.key}>
              <button
                type="button"
                onClick={() => onToggleStat(option.key)}
                className={`flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                  selected
                    ? "border-terracotta bg-terracotta/20 text-foreground"
                    : "border-border bg-rose text-muted hover:border-muted hover:text-foreground"
                }`}
              >
                <span>{option.label}</span>
                <span className="text-xs tracking-wide uppercase">
                  {selected ? "Selected" : "Select"}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
