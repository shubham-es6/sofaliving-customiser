import { BENEFITS, STATS } from "@/data/sofas";

const ICONS = [
  // Kiln-dried hardwood: tree/timber
  <svg key="a" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l-5 8h3l-4 6h4l-2 4h10l-2-4h4l-4-6h3z" />
  </svg>,
  // Foam: armchair
  <svg key="b" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 11a2 2 0 0 1 4 0v2h8v-2a2 2 0 0 1 4 0v5H4z" />
  </svg>,
  // Fabric: droplet
  <svg key="c" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />
  </svg>,
  // Factory: tag
  <svg key="d" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12l9-9h8v8l-9 9-8-8z" /><circle cx="16" cy="8" r="1.5" />
  </svg>,
];

export default function About() {
  return (
    <section id="about" className="bg-sand px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-clay">Uncompromising quality</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
            Built by Indian artisans, engineered to last generations.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-stone">
            Unlike mass-manufactured flatpack imports, SOFALIVING constructs seating with architectural joinery,
            seasoned timber, and tailored upholstery executed by third-generation woodworkers and upholsterers
            in Bangalore and Mumbai.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand text-clay">
                {ICONS[i]}
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium leading-snug text-ink">{b.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-stone">{b.text}</p>
            </div>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-8 rounded-3xl bg-white p-8 text-center shadow-sm lg:grid-cols-4 lg:p-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-serif text-5xl font-medium text-clay">{s.value}</dd>
              <dt className="mt-2 text-xs tracking-wide text-stone">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}