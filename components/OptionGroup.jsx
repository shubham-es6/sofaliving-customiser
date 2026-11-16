import { formatAdjustment, formatPrice } from "@/lib/pricing";

// Reusable button group for model / fabric / seating choices.
export default function OptionGroup({ legend, options, value, onChange, cols = "grid-cols-1 sm:grid-cols-3", showAdjustment = true }) {
  return (
    <fieldset>
      <legend className="mb-3 font-serif text-xl font-bold">{legend}</legend>
      <div className={`grid gap-3 ${cols}`}>
        {options.map((o) => {
          const active = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(o.id)}
              className={`rounded-xl border p-3 text-left transition ${active ? "border-clay bg-clay/5" : "border-line bg-white hover:border-clay/50"}`}
            >
              <span className="block text-sm font-semibold">{o.label}</span>
              <span className="block text-xs text-stone">{o.note}</span>
              <span className="mt-1 block text-xs font-medium text-clay">
                {o.basePrice !== undefined ? formatPrice(o.basePrice) : showAdjustment ? formatAdjustment(o.adjustment) : ""}
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
