import Image from "next/image";
import { formatPrice } from "@/lib/pricing";

export default function SofaCard({ sofa, onCustomise }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={sofa.image}
          alt={`${sofa.name} sofa, ${sofa.tag}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs tracking-wide text-ink">
          {sofa.eyebrow}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl font-medium leading-tight text-ink sm:text-[26px]">
            The {sofa.name} {sofa.tag}
          </h3>
          <p className="shrink-0 pt-1 text-sm font-semibold tracking-wide text-clay">
            {formatPrice(sofa.basePrice)}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-stone">{sofa.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {sofa.features.map((f) => (
            <li key={f} className="rounded-md bg-sand px-2.5 py-1 text-[11px] tracking-wide text-stone">
              {f}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onCustomise(sofa.id)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full border border-clay py-3 text-sm text-clay transition-colors hover:bg-clay hover:text-cream"
        >
          Customise {sofa.name}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0M14 4v4M8 10v4M16 16v4" />
          </svg>
        </button>
      </div>
    </article>
  );
}