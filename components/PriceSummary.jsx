import { formatPrice, formatAdjustment } from "@/lib/pricing";

export default function PriceSummary({ summary, onEnquire }) {
  const { sofa, fabric, seating, base, total, text } = summary;
  const rows = [
    [`Base (${sofa.name})`, formatPrice(base)],
    [`Fabric (${fabric.label})`, formatAdjustment(fabric.adjustment)],
    [`Seating (${seating.label})`, formatAdjustment(seating.adjustment)],
  ];
  return (
    <div className="rounded-2xl border border-line bg-sand p-5" aria-live="polite">
      <p className="text-sm text-stone">{text}</p>
      <dl className="mt-3 space-y-2 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-stone">{k}</dt><dd>{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-baseline justify-between border-t border-line pt-4">
        <span className="font-semibold">Total</span>
        <span className="font-serif text-3xl font-bold text-clay">{formatPrice(total)}</span>
      </div>
      <p className="mt-1 text-xs text-stone">All taxes included. Free delivery.</p>
      {onEnquire && (
        <a href="#enquiry" onClick={onEnquire} className="btn-primary mt-4 w-full">Send this to enquiry form</a>
      )}
    </div>
  );
}
