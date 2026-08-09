type CaptainsStepProps = {
  captainA: string;
  captainB: string;
  onCaptainAChange: (value: string) => void;
  onCaptainBChange: (value: string) => void;
};

const inputClassName =
  "rounded-md border border-border bg-rose px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-terracotta";

export default function CaptainsStep({
  captainA,
  captainB,
  onCaptainAChange,
  onCaptainBChange,
}: CaptainsStepProps) {
  return (
    <div className="flex flex-col gap-8">

        <label className="flex flex-col gap-2">
          <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Team A Captain 
          </p>
          <input
            type="text"
            value={captainA}
            onChange={(event) => onCaptainAChange(event.target.value)}
            placeholder="P. Dayani"
            className={inputClassName}
          />
        </label>

        <label className="flex flex-col gap-2">
          <p className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
            Team B Captain 
          </p>
          <input
            type="text"
            value={captainB}
            onChange={(event) => onCaptainBChange(event.target.value)}
            placeholder="H. Davila"
            className={inputClassName}
          />
        </label>
    </div>
  );
}
