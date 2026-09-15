function HeroMark() {
  return (
    <svg className="hero-visual" viewBox="0 0 240 240" fill="none" aria-hidden>
      <circle className="hero-ring" cx="120" cy="120" r="108" />
      <circle className="hero-ring hero-ring-delay" cx="120" cy="120" r="74" />
      <line className="hero-line" x1="58" y1="172" x2="120" y2="58" />
      <line className="hero-line hero-line-soft" x1="120" y1="58" x2="182" y2="128" />
      <line className="hero-line hero-line-dash" x1="58" y1="172" x2="182" y2="128" />
      <circle className="hero-node hero-node-a" cx="58" cy="172" r="10" />
      <circle className="hero-node hero-node-b" cx="120" cy="58" r="13" />
      <circle className="hero-node hero-node-c" cx="182" cy="128" r="8" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>
          Un pedido puntual.
          <br />
          Una respuesta concreta.
        </h1>
        <p className="hero-sub">
          Llegás con un pedido — una landing, un dashboard, un bot, una
          identidad. Lo evaluamos y te decimos qué haríamos, en cuánto tiempo y
          a qué precio.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Contanos el pedido <span className="btn-arrow">→</span>
          </a>
          <a href="#trabajo" className="btn-ghost">
            Ver qué hacemos
          </a>
        </div>
      </div>
      <HeroMark />
    </section>
  );
}
