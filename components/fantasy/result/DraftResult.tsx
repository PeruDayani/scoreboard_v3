import DraftResultCaptains from "@/components/fantasy/result/DraftResultCaptains";
import StatisticRow from "@/components/fantasy/result/StatisticRow";
import type { FantasyDraftResult } from "@/lib/fantasy/fantasy.types";

type DraftResultProps = {
  captains: FantasyDraftResult["captains"];
  result: FantasyDraftResult["result"];
};

export default function DraftResult({ captains, result }: DraftResultProps) {
  return (
    <section className="mx-auto my-4 w-full rounded-md border border-border bg-rose px-5 py-6">
      <DraftResultCaptains captains={captains} winner={result.winner} />

      <div className="mt-5 divide-y divide-border/70">
        {result.statisticsTotals.map((statistic) => (
          <StatisticRow key={statistic.key} statistic={statistic} />
        ))}
      </div>
    </section>
  );
}
