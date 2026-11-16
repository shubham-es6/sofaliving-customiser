"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Featured", id: "products" },
  { label: "Customiser", id: "customiser" },
  { label: "Craftsmanship", id: "about" },
  { label: "Enquiry", id: "enquiry" },
];

const PHONE = "+91 98765 43210";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("products");

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream">
      <nav
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
        aria-label="Main"
      >
        {/* Logo + tagline */}
        <a href="#home" className="shrink-0 leading-none">
          <span className="block font-serif text-[26px] font-semibold tracking-wide text-ink">
            SOFALIVING
          </span>
          <span className="mt-1 hidden max-w-[130px] text-[10px] uppercase leading-tight tracking-wider text-stone sm:block">
            Est. 1998 · Bespoke Craft
          </span>
        </a>

        {/* Centre links (desktop) */}
        <ul className="hidden items-center gap-9 text-[15px] md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`border-b-2 pb-1 transition-colors ${active === l.id
                    ? "border-clay text-clay"
                    : "border-transparent text-ink hover:text-clay"
                  }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Phone + CTA (desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+919876543210"
            className="hidden items-center gap-2 text-sm text-ink hover:text-clay lg:flex"
          >
            <PhoneIcon />
            {PHONE}
          </a>
          <a href="#customiser" className="btn-primary">
            Design Yours
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`mt-1.5 block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`mt-1.5 block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-cream px-5 pb-5 md:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line py-3 ${active === l.id ? "text-clay" : "text-ink"
                    }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+919876543210" className="mt-4 flex items-center gap-2 text-sm text-ink">
            <PhoneIcon />
            {PHONE}
          </a>
          <a href="#customiser" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Design Yours
          </a>
        </div>
      )}
    </header>
  );
}