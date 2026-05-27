export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg">
        <div className="hero-blob" />
      </div>

      <svg
        className="hero-nodes"
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="170" cy="170" r="160" fill="rgba(74,158,255,0.03)" />
        <circle cx="170" cy="170" r="140" stroke="rgba(74,158,255,0.06)" strokeWidth="1" />
        <circle cx="170" cy="170" r="100" stroke="rgba(74,158,255,0.08)" strokeWidth="1" />
        <line x1="80" y1="260" x2="170" y2="80" stroke="#4a9eff" strokeWidth="1.5" opacity="0.3" />
        <line x1="170" y1="80" x2="280" y2="190" stroke="#fff" strokeWidth="1" opacity="0.15" />
        <line
          x1="80"
          y1="260"
          x2="280"
          y2="190"
          stroke="#4a9eff"
          strokeWidth="1"
          opacity="0.12"
          strokeDasharray="5 5"
        />
        <line
          x1="170"
          y1="80"
          x2="230"
          y2="270"
          stroke="#4a9eff"
          strokeWidth="1"
          opacity="0.1"
          strokeDasharray="3 6"
        />
        <line x1="80" y1="260" x2="140" y2="160" stroke="#fff" strokeWidth="1" opacity="0.08" />
        <line x1="140" y1="160" x2="280" y2="190" stroke="#4a9eff" strokeWidth="1" opacity="0.15" />
        <circle cx="80" cy="260" r="10" fill="#4a9eff" opacity="0.7" />
        <circle cx="80" cy="260" r="18" fill="#4a9eff" opacity="0.08" />
        <circle cx="170" cy="80" r="14" fill="#fff" opacity="0.9" />
        <circle cx="170" cy="80" r="24" fill="#fff" opacity="0.05" />
        <circle cx="280" cy="190" r="8" fill="#4a9eff" opacity="0.5" />
        <circle cx="280" cy="190" r="16" fill="#4a9eff" opacity="0.06" />
        <circle cx="140" cy="160" r="5" fill="#fff" opacity="0.4" />
        <circle cx="230" cy="270" r="6" fill="#4a9eff" opacity="0.35" />
      </svg>

      <div className="hero-content">
        <div className="hero-label">Estudio de tecnología aplicada</div>
        <h1>
          Herramientas que los equipos <em>realmente</em> quieren usar
        </h1>
        <p className="hero-sub">
          Diseñamos y desarrollamos asistentes inteligentes, automatizaciones y herramientas
          internas para que las empresas trabajen con menos fricción y más claridad.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Hablemos →
          </a>
          <a href="#servicios" className="btn-ghost">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
