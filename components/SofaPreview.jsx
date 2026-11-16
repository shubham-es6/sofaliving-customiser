// Lightweight SVG sofa so colour and seating changes are visible without image assets.
// Swap for <Image src={`/sofas/${model}-${colour}.jpg`} /> when real photos are available.
export default function SofaPreview({ colour, seating = "3-seater", label }) {
  const w = seating === "2-seater" ? 190 : 270;
  const chaise = seating === "l-shape" ? 70 : 0;
  const x = (400 - w - chaise) / 2;
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label={label || "Sofa preview"} className="h-auto w-full">
      <ellipse cx="200" cy="212" rx={(w + chaise) / 2 + 20} ry="10" fill="#000" opacity=".08" />
      <rect x={x} y="60" width={w + chaise * 0} height="90" rx="28" fill={colour} />
      <rect x={x - 22} y="100" width="40" height="95" rx="18" fill={colour} />
      <rect x={x + w - 18} y="100" width="40" height="95" rx="18" fill={colour} />
      <rect x={x + 8} y="125" width={w - 16 + chaise} height="62" rx="16" fill={colour} />
      {chaise > 0 && <rect x={x + w - 10} y="125" width={chaise + 18} height="82" rx="16" fill={colour} />}
      <rect x={x + 8} y="125" width={w - 16 + chaise} height="62" rx="16" fill="#000" opacity=".07" />
      <rect x={x} y="195" width="10" height="16" rx="3" fill="#4A3A2E" />
      <rect x={x + w + chaise - 8} y="195" width="10" height="16" rx="3" fill="#4A3A2E" />
    </svg>
  );
}
