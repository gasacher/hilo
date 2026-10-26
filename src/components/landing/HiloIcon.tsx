import { useId } from "react";

const LIME = "#C6FF34";
const VIOLET = "#8B5CF6";
const WHITE = "#F4F3EF";

const TOP = { cx: 55, cy: 20, r: 9 };
const LEFT = { cx: 20, cy: 76, r: 10.5 };
const RIGHT = { cx: 80, cy: 64, r: 8.5 };

const STROKE = 4.5;
const CHROMA = "#C6FF34;#8B5CF6;#F4F3EF;#C6FF34";
const PHASE = { a: "0s", b: "-2.6667s", c: "-5.3333s" } as const;

type Phase = keyof typeof PHASE;
type HiloGlyphProps = {
  glow?: boolean;
  flow?: boolean;
};

function Chroma({ attribute, phase }: { attribute: "fill" | "stop-color"; phase: Phase }) {
  return (
    <animate
      attributeName={attribute}
      values={CHROMA}
      keyTimes="0;0.3333;0.6666;1"
      dur="8s"
      begin={PHASE[phase]}
      repeatCount="indefinite"
      calcMode="linear"
    />
  );
}

export function HiloGlyph({ glow = false, flow = false }: HiloGlyphProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <>
      <defs>
        <linearGradient id={`${uid}-lv`} x1={TOP.cx} y1={TOP.cy} x2={LEFT.cx} y2={LEFT.cy} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={LIME}>{flow ? <Chroma attribute="stop-color" phase="a" /> : null}</stop>
          <stop offset="1" stopColor={VIOLET}>{flow ? <Chroma attribute="stop-color" phase="b" /> : null}</stop>
        </linearGradient>
        <linearGradient id={`${uid}-vw`} x1={LEFT.cx} y1={LEFT.cy} x2={RIGHT.cx} y2={RIGHT.cy} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={VIOLET}>{flow ? <Chroma attribute="stop-color" phase="b" /> : null}</stop>
          <stop offset="1" stopColor={WHITE}>{flow ? <Chroma attribute="stop-color" phase="c" /> : null}</stop>
        </linearGradient>
        <linearGradient id={`${uid}-wl`} x1={RIGHT.cx} y1={RIGHT.cy} x2={TOP.cx} y2={TOP.cy} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={WHITE}>{flow ? <Chroma attribute="stop-color" phase="c" /> : null}</stop>
          <stop offset="1" stopColor={LIME}>{flow ? <Chroma attribute="stop-color" phase="a" /> : null}</stop>
        </linearGradient>
        {glow ? (
          <>
            <radialGradient id={`${uid}-g-a`} cx={TOP.cx} cy={TOP.cy} r="17" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={LIME} stopOpacity="0.55">{flow ? <Chroma attribute="stop-color" phase="a" /> : null}</stop>
              <stop offset="0.42" stopColor={LIME} stopOpacity="0.16">{flow ? <Chroma attribute="stop-color" phase="a" /> : null}</stop>
              <stop offset="1" stopColor={LIME} stopOpacity="0">{flow ? <Chroma attribute="stop-color" phase="a" /> : null}</stop>
            </radialGradient>
            <radialGradient id={`${uid}-g-b`} cx={LEFT.cx} cy={LEFT.cy} r="18" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={VIOLET} stopOpacity="0.6">{flow ? <Chroma attribute="stop-color" phase="b" /> : null}</stop>
              <stop offset="0.45" stopColor={VIOLET} stopOpacity="0.18">{flow ? <Chroma attribute="stop-color" phase="b" /> : null}</stop>
              <stop offset="1" stopColor={VIOLET} stopOpacity="0">{flow ? <Chroma attribute="stop-color" phase="b" /> : null}</stop>
            </radialGradient>
            <radialGradient id={`${uid}-g-c`} cx={RIGHT.cx} cy={RIGHT.cy} r="16" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={WHITE} stopOpacity="0.42">{flow ? <Chroma attribute="stop-color" phase="c" /> : null}</stop>
              <stop offset="0.45" stopColor={WHITE} stopOpacity="0.12">{flow ? <Chroma attribute="stop-color" phase="c" /> : null}</stop>
              <stop offset="1" stopColor={WHITE} stopOpacity="0">{flow ? <Chroma attribute="stop-color" phase="c" /> : null}</stop>
            </radialGradient>
          </>
        ) : null}
      </defs>
      {glow ? (
        <>
          <circle cx={TOP.cx} cy={TOP.cy} r="17" fill={`url(#${uid}-g-a)`} />
          <circle cx={LEFT.cx} cy={LEFT.cy} r="18" fill={`url(#${uid}-g-b)`} />
          <circle cx={RIGHT.cx} cy={RIGHT.cy} r="16" fill={`url(#${uid}-g-c)`} />
        </>
      ) : null}
      <g fill="none" strokeWidth={STROKE} strokeLinecap="round">
        <line x1={TOP.cx} y1={TOP.cy} x2={LEFT.cx} y2={LEFT.cy} stroke={`url(#${uid}-lv)`} />
        <line x1={LEFT.cx} y1={LEFT.cy} x2={RIGHT.cx} y2={RIGHT.cy} stroke={`url(#${uid}-vw)`} />
        <line x1={RIGHT.cx} y1={RIGHT.cy} x2={TOP.cx} y2={TOP.cy} stroke={`url(#${uid}-wl)`} />
      </g>
      {flow ? (
        <path
          className="hilo-flow-pulse"
          d={`M${TOP.cx} ${TOP.cy} L${RIGHT.cx} ${RIGHT.cy} L${LEFT.cx} ${LEFT.cy} Z`}
          pathLength={100}
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-28.46;-62.86;-100"
            keyTimes="0;0.3333;0.6666;1"
            dur="8s"
            repeatCount="indefinite"
            calcMode="linear"
          />
        </path>
      ) : null}
      <circle cx={TOP.cx} cy={TOP.cy} r={TOP.r} fill={LIME}>{flow ? <Chroma attribute="fill" phase="a" /> : null}</circle>
      <circle cx={LEFT.cx} cy={LEFT.cy} r={LEFT.r} fill={VIOLET}>{flow ? <Chroma attribute="fill" phase="b" /> : null}</circle>
      <circle cx={RIGHT.cx} cy={RIGHT.cy} r={RIGHT.r} fill={WHITE}>{flow ? <Chroma attribute="fill" phase="c" /> : null}</circle>
    </>
  );
}

export function HiloIcon({ size = 28 }: { size?: number }) {
  return (
    <svg className="hilo-mark" width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden>
      <HiloGlyph />
    </svg>
  );
}
