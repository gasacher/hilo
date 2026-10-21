export function HiloIcon({ size = 28 }: { size?: number }) {
  return (
    <svg className="hilo-mark" width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden>
      <line className="mark-accent" x1="5" y1="23" x2="14" y2="6" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
      <line className="mark-text" x1="14" y1="6" x2="23" y2="15" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <line
        className="mark-muted"
        x1="5"
        y1="23"
        x2="23"
        y2="15"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
        strokeDasharray="3 3"
      />
      <circle className="mark-accent-fill" cx="5" cy="23" r="3" opacity="0.95" />
      <circle className="mark-text-fill" cx="14" cy="6" r="4" opacity="0.9" />
      <circle className="mark-muted-fill" cx="23" cy="15" r="2.5" opacity="0.85" />
    </svg>
  );
}
