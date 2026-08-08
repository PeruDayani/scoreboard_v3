import { formatReadableDate, shiftDate } from "@/lib/utils/dates";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type NavProps = {
  gameDate: string;
};

export default function Nav({ gameDate }: NavProps) {
  const previousDate = shiftDate(gameDate, -1);
  const nextDate = shiftDate(gameDate, 1);

  return (
    <header className="py-10">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Hidden Scoreboard
        </h1>
        <Link
          href="/"
          className="text-xs font-medium tracking-[0.2em] text-muted uppercase transition-colors hover:text-terracotta"
        >
          Home
        </Link>
      </div>

      <nav className="mt-10 flex items-center justify-center gap-2">
        <Link
          href={`/scoreboard?gameDate=${previousDate}`}
          aria-label="Previous day"
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <FaArrowLeft className="size-3.5" />
        </Link>

        <div className="flex min-w-64 items-center justify-center gap-2">
          <p className="text-sm font-medium tracking-wide text-foreground">
            {formatReadableDate(gameDate)}
          </p>
        </div>

        <Link
          href={`/scoreboard?gameDate=${nextDate}`}
          aria-label="Next day"
          className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-terracotta hover:text-terracotta"
        >
          <FaArrowRight className="size-3.5" />
        </Link>
      </nav>
    </header>
  );
}
