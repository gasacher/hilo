export function HiloIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden>
      <line x1="5" y1="23" x2="14" y2="6" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <line x1="14" y1="6" x2="23" y2="15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line
        x1="5"
        y1="23"
        x2="23"
        y2="15"
        stroke="#4a9eff"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.2"
        strokeDasharray="3 3"
      />
      <circle cx="5" cy="23" r="3" fill="#4a9eff" opacity="0.9" />
      <circle cx="14" cy="6" r="4" fill="#fff" opacity="0.95" />
      <circle cx="23" cy="15" r="2.5" fill="#4a9eff" opacity="0.6" />
    </svg>
  );
}
