import Image from "next/image";
import { SOFAS, FABRICS, SEATINGS } from "@/data/sofas";
import OptionGroup from "./OptionGroup";
import ColourSelector from "./ColourSelector";
import PriceSummary from "./PriceSummary";
import { formatPrice } from "@/lib/pricing";

function Pill({ children, className = "" }) {
  return (
    <span className={`rounded-full bg-cream/95 px-4 py-2 text-xs text-ink shadow-sm backdrop-blur ${className}`}>
      {children}
    </span>
  );
}

export default function SofaCustomiser({ config, summary, setModel, setOption }) {
  const { sofa, colour, seating, total } = summary;
  const models = SOFAS.map((s) => ({ id: s.id, label: s.name, note: s.tag, basePrice: s.basePrice }));

  // Use the photo for this colour; if none, fall back to the model's first photo.
  const previewSrc =
    sofa.previewImages[config.colourId] ?? Object.values(sofa.previewImages)[0];

  return (
    <section id="customiser" className="bg-sand px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] text-clay">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v6M8 21l4-12 4 12M6 14h12" />
            </svg>
            Live specification studio
          </span>
          <h2 className="mt-6 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Tailor Your Living Centerpiece
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone">
            Select your architecture, tone, upholstery, and seating scale. Observe instant
            recalculation and seamless synchronization with our craftsmen.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Preview card (sticky on desktop) */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-cream shadow-sm">
              <Image
                key={previewSrc}
                src={previewSrc}
                alt={`${sofa.name} sofa in ${colour.label}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />

              <div className="absolute left-4 top-4 flex flex-col items-start gap-2">
                <Pill>{sofa.name} Model</Pill>
                <Pill className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full border border-line" style={{ backgroundColor: colour.hex }} />
                  {colour.label}
                </Pill>
              </div>
              <Pill className="absolute right-4 top-4 text-clay">{seating.label} Standard</Pill>
              <Pill className="absolute bottom-4 left-4 bg-ink/85 text-cream">360° Inspection Ready</Pill>
              <Pill className="absolute bottom-4 right-4">Free Swatches Available</Pill>
            </div>
            <p className="mt-4 text-right font-serif text-3xl font-medium text-clay">{formatPrice(total)}</p>
          </div>

          {/* Controls */}
          <div className="space-y-8">
            <OptionGroup legend="Choose model" options={models} value={config.modelId} onChange={setModel} />
            <div>
              <h3 className="mb-3 font-serif text-xl font-medium">Choose colour</h3>
              <ColourSelector available={sofa.colours} value={config.colourId} onChange={(v) => setOption("colourId", v)} />
            </div>
            <OptionGroup legend="Choose fabric" options={FABRICS} value={config.fabricId} onChange={(v) => setOption("fabricId", v)} />
            <OptionGroup legend="Choose seating" options={SEATINGS} value={config.seatingId} onChange={(v) => setOption("seatingId", v)} />
            <PriceSummary summary={summary} />
          </div>
        </div>
      </div>
    </section>
  );
}