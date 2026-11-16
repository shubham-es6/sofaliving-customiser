import { COLOURS } from "@/data/sofas";

export default function ColourSelector({ available, value, onChange }) {
  return (
    <div role="radiogroup" aria-label="Fabric colour" className="flex flex-wrap gap-4">
      {available.map((id) => {
        const c = COLOURS[id];
        const active = id === value;
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={c.label}
            onClick={() => onChange(id)}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className={`h-11 w-11 rounded-full border-2 transition ${active ? "border-clay ring-2 ring-clay/30" : "border-line"}`}
              style={{ backgroundColor: c.hex }}
            />
            <span className={`text-xs ${active ? "font-medium text-clay" : "text-stone"}`}>{c.label}</span>
          </button>
        );
      })}
    </div>
  );
}
