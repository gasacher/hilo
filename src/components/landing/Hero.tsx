import { HeroTypeword } from "./HeroTypeword";

function HeroMark() {
  return (
    <svg className="hero-nodes" viewBox="0 0 340 340" fill="none" aria-hidden>
      <circle className="mark-accent-fill" cx="170" cy="170" r="160" opacity="0.06" />
      <circle className="mark-text" cx="170" cy="170" r="140" strokeWidth="1" opacity="0.08" />
      <circle className="mark-muted" cx="170" cy="170" r="100" strokeWidth="1" opacity="0.28" />
      <line className="mark-accent" x1="80" y1="260" x2="170" y2="80" strokeWidth="1.5" opacity="0.3" />
      <line className="mark-text" x1="170" y1="80" x2="280" y2="190" strokeWidth="1" opacity="0.15" />
      <line
        className="mark-accent"
        x1="80"
        y1="260"
        x2="280"
        y2="190"
        strokeWidth="1"
        opacity="0.12"
        strokeDasharray="5 5"
      />
      <line
        className="mark-accent"
        x1="170"
        y1="80"
        x2="230"
        y2="270"
        strokeWidth="1"
        opacity="0.1"
        strokeDasharray="3 6"
      />
      <line className="mark-text" x1="80" y1="260" x2="140" y2="160" strokeWidth="1" opacity="0.08" />
      <line className="mark-accent" x1="140" y1="160" x2="280" y2="190" strokeWidth="1" opacity="0.15" />
      <circle className="mark-accent-fill" cx="80" cy="260" r="10" opacity="0.7" />
      <circle className="mark-accent-fill" cx="80" cy="260" r="18" opacity="0.08" />
      <circle className="mark-text-fill" cx="170" cy="80" r="14" opacity="0.9" />
      <circle className="mark-text-fill" cx="170" cy="80" r="24" opacity="0.05" />
      <circle className="mark-accent-fill" cx="280" cy="190" r="8" opacity="0.5" />
      <circle className="mark-accent-fill" cx="280" cy="190" r="16" opacity="0.06" />
      <circle className="mark-text-fill" cx="140" cy="160" r="5" opacity="0.4" />
      <circle className="mark-accent-fill" cx="230" cy="270" r="6" opacity="0.35" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" aria-hidden>
        <div className="hero-blob" />
      </div>
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">HILO · ESTUDIO · BUENOS AIRES</p>
          <h1>
            <span className="sr-only">
              Resolvemos lo que te frena en tus procesos, tus ventas, tu web y tu día a día.
            </span>
            <span aria-hidden="true">
              Resolvemos lo que te frena en <HeroTypeword />
            </span>
          </h1>
          <p className="hero-sub">
            Eso que hacés a mano, lo que no te deja crecer, lo que no se ve. Contanos y del resto nos encargamos nosotros.
          </p>
          <a href="#contacto" className="btn-primary">
            Hablemos <span className="btn-arrow">→</span>
          </a>
        </div>
        <HeroMark />
      </div>
    </section>
  );
}
