type DraftNameStepProps = {
  name: string;
  id: string;
  onNameChange: (name: string) => void;
};

const inputClassName =
  "rounded-md border border-border bg-rose px-3 py-2 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-terracotta";

export default function DraftNameStep({
  name,
  id,
  onNameChange,
}: DraftNameStepProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-center text-xs font-medium tracking-[0.2em] text-muted uppercase">
        Draft name
      </span>
      <input
        type="text"
        value={name}
        onChange={(event) => onNameChange(event.target.value)}
        placeholder="All-Star 2026"
        className={inputClassName}
      />
      {id ? (
        <span className="text-center text-xs text-muted">
          ID: <span className="text-foreground">{id}</span>
        </span>
      ) : null}
    </label>
  );
}
