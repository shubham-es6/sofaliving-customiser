import SofaCard from "./SofaCard";
import { SOFAS } from "@/data/sofas";

export default function FeaturedSofas({ onCustomise }) {
  return (
    <section id="products" className="bg-cream px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-clay">Foundational designs</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              Signature Collections
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-stone md:text-right">
            Explore our foundational silhouettes, engineered for ergonomic posture and architectural presence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOFAS.map((s) => (
            <SofaCard key={s.id} sofa={s} onCustomise={onCustomise} />
          ))}
        </div>
      </div>
    </section>
  );
}