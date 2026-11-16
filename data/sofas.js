// Single source of truth. Prices are NEVER hardcoded per combination;
// lib/pricing.js derives the total from these tables.

export const COLOURS = {
  beige: { id: "beige", label: "Beige", hex: "#D6BF9F" },
  grey: { id: "grey", label: "Grey", hex: "#9A9EA5" },
  blue: { id: "blue", label: "Blue", hex: "#566F94" },
  green: { id: "green", label: "Green", hex: "#6A8A6E" },
  charcoal: { id: "charcoal", label: "Charcoal", hex: "#3C4046" },
  terracotta: { id: "terracotta", label: "Terracotta", hex: "#B9644A" },
};

export const SOFAS = [
  {
    id: "luna",
    name: "Luna",
    tag: "Curved",
    eyebrow: "Curved Artistry",
    image: "/images/luna.jpg",
    previewImages: {
      beige: "/images/preview-luna-beige.jpg",
      grey: "/images/preview-luna-grey.jpg",
    },
    basePrice: 42999,
    colours: ["beige", "grey", "blue", "green"],
    description:
      "Organic curved silhouette enveloped in soft, tactile boucle. Ideal for fluid, conversational open-plan spaces.",
    features: ["Curved Silhouette", "High-Traffic Boucle", "Soft Density"],
  },
  {
    id: "urban",
    name: "Urban",
    tag: "Mid-Century",
    eyebrow: "Modern Classic",
    image: "/images/urban.jpg",
    previewImages: {
      beige: "/images/preview-urban-beige.jpg",
      charcoal: "/images/preview-urban-charcoal.jpg",
    },
    basePrice: 54999,
    colours: ["beige", "grey", "charcoal", "terracotta"],
    description:
      "Clean geometric profiles, button-tufted backrests, and tapered walnut legs. Tailored for urban architectural spaces.",
    features: ["Mid-Century Clean Lines", "Solid Walnut Trim", "Firm Ergonomic Support"],
  },
  {
    id: "cloud",
    name: "Cloud",
    tag: "Sectional",
    eyebrow: "Deep Sanctuary",
    image: "/images/cloud.jpg",
    previewImages: {
      beige: "/images/preview-cloud-beige.jpg",
      blue: "/images/preview-cloud-blue.jpg",
    },
    basePrice: 64999,
    colours: ["beige", "blue", "green", "charcoal"],
    description:
      "Generous deep-seated sectional lounge featuring modular ottoman configuration and dual-layer microfibre down.",
    features: ["L-Shape Modular", "Deep Lounge 42\"", "Stain-Resistant Linen"],
  },
];

export const FABRICS = [
  { id: "linen", label: "Natural Linen", note: "Breathable, organic weave", adjustment: 0 },
  { id: "velvet", label: "Royal Velvet", note: "Plush depth, stain-guarded", adjustment: 5000 },
  { id: "leatherette", label: "Vegan Leatherette", note: "Scratch-resistant, wipeable", adjustment: 8000 },
];

export const SEATINGS = [
  { id: "2-seater", label: "2 Seater", note: "Compact", adjustment: -7000 },
  { id: "3-seater", label: "3 Seater", note: "Signature", adjustment: 0 },
  { id: "l-shape", label: "L Shape", note: "With chaise", adjustment: 18000 },
];

export const DEFAULT_CONFIG = {
  modelId: "luna",
  colourId: "beige",
  fabricId: "linen",
  seatingId: "3-seater",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#products" },
  { label: "Customiser", href: "#customiser" },
  { label: "About", href: "#about" },
  { label: "Enquiry", href: "#enquiry" },
];

export const BENEFITS = [
  {
    title: "Kiln-Dried Hardwood",
    text: "0% moisture seasoned Teak and Sal wood with reinforced mortise-and-tenon corner joints. Termite-proofed for lasting structural peace of mind.",
    footer: "Grade A Solid Timber",
  },
  {
    title: "38-Density Cold Foam",
    text: "Multi-layer cold-cure memory foam cores supported by S-spring suspension bands. Maintains rebound resilience and anatomical contour for 15+ years.",
    footer: "High Rebound Rating",
  },
  {
    title: "50k Martindale Rubs",
    text: "Pet-friendly weaves tested against heavy abrasion and accidental spills. Oleophobic treatments resist coffee, wine, and daily family wear.",
    footer: "Hydrophobic Nanocoat",
  },
  {
    title: "Direct from Factory",
    text: "Direct atelier-to-residence model skips middlemen markups. You invest purely in authentic timber, foam grade, and generational craft.",
    footer: "Zero Distributor Margin",
  },
];

export const STATS = [
  { value: "26", label: "Years of Precision Craft" },
  { value: "42k+", label: "Homes Furnished Across India" },
  { value: "10-Yr", label: "Frame Warranty Guarantee" },
  { value: "4.9★", label: "Architect & Client Satisfaction" },
];