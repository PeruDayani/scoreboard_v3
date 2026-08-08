import Loading from "@/components/shared/Loading";
import Content from "@/components/scoreboard/Content";
import Nav from "@/components/scoreboard/Nav";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Hidden Scoreboard",
  description: "Hidden scoreboard for NBA games.",
};

export default async function ScoreboardPage({
  searchParams,
}: PageProps<"/scoreboard">) {
  const { gameDate } = await searchParams;
  const date =
    typeof gameDate === "string"
      ? gameDate
      : new Date().toISOString().slice(0, 10);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 text-center">
      <Nav gameDate={date} />
      <Suspense key={date} fallback={<Loading />}>
        <Content gameDate={date} />
      </Suspense>
    </div>
  );
}
