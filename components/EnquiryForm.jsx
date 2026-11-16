"use client";
import { useState } from "react";
import { validateEnquiry } from "@/lib/validation";
import { formatPrice } from "@/lib/pricing";

const EMPTY = { name: "", phone: "", email: "", city: "", requirements: "", swatch: true };

function Field({ label, name, error, children, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-xs tracking-wide text-ink">{label}</label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-xs text-red-700">{error}</p>}
    </div>
  );
}

const inputClass = (hasError) =>
  `w-full rounded-full border bg-cream px-5 py-3 text-sm text-ink placeholder:text-stone/60 focus:border-clay focus:outline-none ${hasError ? "border-red-600" : "border-line"
  }`;

export default function EnquiryForm({ summary }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null);

  const { sofa, fabric, colour, seating, total } = summary;

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent({ ...values, config: summary.text, total });
      setValues(EMPTY);
    }
  };

  return (
    <section id="enquiry" className="bg-cream px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto w-full max-w-3xl text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-clay">Personalized consultation</p>
        <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Request a Consultation &amp; Swatch Kit
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-stone">
          Our design consultants will prepare a complimentary fabric sample box (up to 4 swatches)
          and connect within 4 business hours.
        </p>
      </div>

      {sent ? (
        <div role="status" className="mx-auto mt-12 max-w-3xl rounded-3xl border border-line bg-white p-8 text-left shadow-sm">
          <h3 className="font-serif text-3xl font-medium text-clay">Thank you, {sent.name}.</h3>
          <p className="mt-3 text-stone">We received your enquiry and will call you on {sent.phone}.</p>
          <p className="mt-4 text-sm"><strong>Your configuration:</strong> {sent.config} at {formatPrice(sent.total)}</p>
          <button type="button" className="btn-outline mt-6" onClick={() => setSent(null)}>
            Send another enquiry
          </button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          noValidate
          className="mx-auto mt-12 max-w-3xl rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full Name *" name="name" error={errors.name}>
              <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={change}
                placeholder="e.g. Ananya Sen" aria-invalid={!!errors.name} className={inputClass(errors.name)} />
            </Field>
            <Field label="Phone Number (+91) *" name="phone" error={errors.phone}>
              <input id="phone" name="phone" type="tel" inputMode="numeric" maxLength={10} autoComplete="tel-national"
                value={values.phone} onChange={change} placeholder="9876543210 (10 digits)"
                aria-invalid={!!errors.phone} className={inputClass(errors.phone)} />
            </Field>
          </div>

          <Field label="Email Address *" name="email" error={errors.email} className="mt-6">
            <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={change}
              placeholder="ananya@architecturestudio.in" aria-invalid={!!errors.email} className={inputClass(errors.email)} />
          </Field>

          {/* Auto-populated from the customiser */}
          <div className="mt-6 rounded-2xl border border-line bg-sand p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.16em] text-clay">Synchronized customiser data</p>
              <p className="text-xs text-stone">Auto-populated from Step 1-4</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="mb-2 text-xs text-stone">Model Selection</p>
                <div className="rounded-full border border-line bg-cream px-4 py-2.5 text-sm">The {sofa.name} {sofa.tag}</div>
              </div>
              <div>
                <p className="mb-2 text-xs text-stone">Fabric &amp; Colour</p>
                <div className="rounded-full border border-line bg-cream px-4 py-2.5 text-sm">
                  {fabric.label} · {colour.label}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs text-stone">Seating Size</p>
                <div className="rounded-full border border-line bg-cream px-4 py-2.5 text-sm">
                  {seating.label} (Standard)
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Delivery City & Pincode *" name="city" error={errors.city}>
              <input id="city" name="city" type="text" value={values.city} onChange={change}
                placeholder="e.g. Bangalore, 560038" aria-invalid={!!errors.city} className={inputClass(errors.city)} />
            </Field>
            <Field label="Special Dimensions or Room Requirements (Optional)" name="requirements">
              <input id="requirements" name="requirements" type="text" value={values.requirements} onChange={change}
                placeholder="e.g. Max length 96 inches, left-facing chaise" className={inputClass(false)} />
            </Field>
          </div>

          <label htmlFor="swatch" className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-ink">
            <input id="swatch" name="swatch" type="checkbox" checked={values.swatch} onChange={change}
              className="mt-1 h-4 w-4 accent-clay" />
            Send a complimentary physical fabric swatch box (including the chosen fabric and 3 curated alternatives)
            to my delivery address at zero cost.
          </label>

          <button type="submit" className="btn-primary mt-8 w-full py-4 text-sm">
            Submit Bespoke Enquiry
          </button>
          <p className="mt-6 text-center text-xs tracking-wide text-stone">
            Protected by end-to-end craft confidentiality. No marketing spam.
          </p>
        </form>
      )}
    </section>
  );
}