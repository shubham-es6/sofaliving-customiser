import { NAV_LINKS } from "@/data/sofas";

const STUDIOS = [
  { city: "Bangalore", address: "100ft Road, Indiranagar, 560038" },
  { city: "Mumbai", address: "Mathuradas Mill Compound, Lower Parel, 400013" },
  { city: "Delhi NCR", address: "The Gallery on MG, Sultanpur, New Delhi 110030" },
];

const LEGAL = ["Craftsmanship Standards", "Material Warranty", "Showroom Directory", "Custom Fabric Samples", "Privacy Policy", "Terms of Craft"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-4xl font-medium tracking-tight text-ink">SOFALIVING</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-stone">
              Architectural seating systems crafted with kiln-seasoned hardwoods, cold-cure ergonomics,
              and artisan European and Indian weaves. Designed for longevity and restorative residential calm.
            </p>
            <div className="mt-6 space-y-1 text-[11px] tracking-wide text-ink">
              <p><span className="font-semibold">Direct Workshop:</span> +91 98765 43210 (10:00 AM – 7:30 PM IST)</p>
              <p><span className="font-semibold">Trade Desk:</span> trade@sofaliving.in</p>
            </div>
          </div>

          {/* Studios */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.16em] text-ink">Atelier Experience Studios</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-stone">
              {STUDIOS.map((s) => (
                <li key={s.city}>
                  <span className="font-semibold text-ink">{s.city}:</span> {s.address}
                </li>
              ))}
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.16em] text-ink">Architect &amp; Trade Desk</h3>
            <p className="mt-5 text-sm leading-7 text-stone">
              Specialized 3D asset packs (Revit / Rhino / 3ds Max) and volume project rates available
              for registered architects and interior studios.
            </p>
            <a href="#enquiry" className="mt-4 inline-block text-sm text-clay hover:underline">
              Apply for Trade Account →
            </a>
          </div>
        </div>

        {/* Links */}
        <nav aria-label="Footer" className="mt-14 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-medium hover:text-clay">{l.label}</a>
              </li>
            ))}
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#home" className="text-stone hover:text-clay">{l}</a>
              </li>
            ))}
          </ul>
          <p className="text-[11px] tracking-wide text-stone">Pan-India White-Glove Logistics</p>
        </nav>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-xs text-stone md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SOFALIVING Bespoke Furniture Pvt. Ltd. All rights reserved. Handcrafted with architectural precision.</p>
          <p className="tracking-wide">EST. 1998 · Atelier Bangalore &amp; Mumbai</p>
        </div>
      </div>
    </footer>
  );
}