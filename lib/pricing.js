import { SOFAS, COLOURS, FABRICS, SEATINGS } from "@/data/sofas";

export const formatPrice = (n) => "₹" + new Intl.NumberFormat("en-IN").format(n);

export const formatAdjustment = (n) =>
  n === 0 ? "Included" : (n > 0 ? "+" : "−") + formatPrice(Math.abs(n));

export const getSofa = (id) => SOFAS.find((s) => s.id === id);

/** Returns the colour if the model offers it, otherwise the model's first colour. */
export function getValidColour(modelId, colourId) {
  const sofa = getSofa(modelId);
  return sofa.colours.includes(colourId) ? colourId : sofa.colours[0];
}

/** Derives everything the UI needs from the current config. */
export function getConfigSummary({ modelId, colourId, fabricId, seatingId }) {
  const sofa = getSofa(modelId);
  const colour = COLOURS[colourId];
  const fabric = FABRICS.find((f) => f.id === fabricId);
  const seating = SEATINGS.find((s) => s.id === seatingId);
  const total = sofa.basePrice + fabric.adjustment + seating.adjustment;
  return {
    sofa, colour, fabric, seating,
    base: sofa.basePrice,
    total,
    text: `${sofa.name} · ${colour.label} · ${fabric.label} · ${seating.label}`,
  };
}
