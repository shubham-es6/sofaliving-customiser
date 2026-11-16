import Image from "next/image";

function Icon({ children }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      className="shrink-0 text-clay">
      {children}
    </svg>
  );
}

const TRUST = [
  {
    text: "10-Year Frame & Suspension Warranty",
    icon: (
      <Icon>
        <path d="M12 2l2.4 2.1 3.2-.3 1 3 2.8 1.6-.9 3.1.9 3.1-2.8 1.6-1 3-3.2-.3L12 22l-2.4-2.1-3.2.3-1-3-2.8-1.6.9-3.1-.9-3.1 2.8-1.6 1-3 3.2.3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </Icon>
    ),
  },
  {
    text: "100+ Premium Swatches to your Doorstep",
    icon: (
      <Icon>
        <path d="M4 20L20 4M4 14L14 4M10 20L20 10M4 8l4-4M16 20l4-4" />
      </Icon>
    ),
  },
  {
    text: "Zero-Cost Pan-India Delivery & Assembly",
    icon: (
      <Icon>
        <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" />
        <circle cx="6.5" cy="17.5" r="1.8" />
        <circle cx="16.5" cy="17.5" r="1.8" />
      </Icon>
    ),
  },
];

export default function Hero() {
  return (
    <section id="home" className="bg-cream px-5 pb-10 pt-8 sm:px-8 md:pt-12 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Badge */}
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-sand px-4 py-1.5 text-xs tracking-wide text-stone">
          <span className="h-2 w-2 rounded-full bg-clay" aria-hidden="true" />
          Architectural Living · Handcrafted in Bangalore &amp; Mumbai
        </p>

        {/* Heading */}
        <h1 className="mt-8 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:mt-14 lg:text-7xl">
          Bespoke Sofas, Sculpted for Modern Indian Homes.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone sm:text-lg">
          Explore precision-tailored seating crafted with kiln-dried teak frames,
          high-density feather core foams, and over 120 artisan fabrics. Customise
          dimensions, fabrics, and contours in real-time.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#customiser" className="btn-primary gap-2 shadow-md shadow-clay/25 sm:px-8 sm:py-3.5">
            Start Customising
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#products"
            className="btn rounded-full border border-line bg-white text-ink hover:border-clay hover:text-clay sm:px-8 sm:py-3.5"
          >
            Explore Signature Models
          </a>
        </div>

        {/* Hero image */}
        <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-[28px] bg-sand shadow-sm sm:aspect-[16/10] lg:aspect-[1150/620]">
          <Image
            src="/images/hero-living-room.jpg"
            alt="Beige three-seater sofa in a bright living room with an arched window"
            fill
            priority
            sizes="(min-width: 1280px) 1150px, 100vw"
            className="object-cover"
          />
          {/* Caption pill */}
          <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-full bg-cream/95 px-4 py-2.5 shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:px-5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              className="hidden shrink-0 text-clay sm:block">
              <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM6 18v2M18 18v2" />
            </svg>
            <div className="leading-tight">
              <p className="text-[10px] uppercase tracking-wider text-stone">Living room showcase</p>
              <p className="text-xs text-ink sm:text-sm">The Nordic Minimalist 3-Seater in Oat Linen</p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <ul className="mt-10 grid gap-4 border-t border-line pt-6 sm:grid-cols-3">
          {TRUST.map((t) => (
            <li key={t.text} className="flex items-center gap-3 text-xs tracking-wide text-stone sm:text-[13px]">
              {t.icon}
              {t.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}