export function Intro() {
  return (
    <section id="intro">
      <div className="intro-grid">
        <div className="intro-text reveal">
          <div className="section-tag">Quiénes somos</div>
          <p>
            Somos un estudio enfocado en crear{" "}
            <strong>herramientas inteligentes para empresas</strong> que buscan trabajar de
            forma más ágil, organizada y eficiente.
          </p>
          <p>
            Combinamos experiencia en diseño, operaciones y desarrollo acelerado con
            inteligencia artificial para transformar tareas manuales y procesos complejos en
            soluciones simples, funcionales y rápidas de implementar.
          </p>
          <div className="intro-statement">
            No buscamos reemplazar personas.
            <br />
            Buscamos potenciar equipos.
          </div>
        </div>
        <div className="intro-stats reveal">
          <div className="stat">
            <div className="stat-num">
              3<span>x</span>
            </div>
            <div className="stat-label">
              Velocidad de implementación vs. proyectos tradicionales
            </div>
          </div>
          <div className="stat">
            <div className="stat-num">
              MVP<span>.</span>
            </div>
            <div className="stat-label">Empezamos con soluciones funcionales, no promesas</div>
          </div>
          <div className="stat">
            <div className="stat-num">
              0<span>↗</span>
            </div>
            <div className="stat-label">
              Fricción de adopción — herramientas que los equipos eligen usar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
