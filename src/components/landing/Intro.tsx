export function Intro() {
  return (
    <section id="intro">
      <div className="intro-grid">
        <div className="intro-text reveal">
          <div className="section-tag">Quiénes somos</div>
          <p>
            Somos un estudio que construye{" "}
            <strong>herramientas inteligentes para equipos</strong> con menos fricción operativa
            — diseño, operaciones e IA aplicada al problema concreto, no al buzzword del momento.
          </p>
          <p>
            Conocemos los procesos desde adentro. Construimos lo que la gente elige usar, validamos
            con el equipo antes de escalar, y no buscamos reemplazar personas sino potenciarlas.
          </p>
        </div>
        <div className="intro-aside reveal">
          <div className="intro-aside-card">
            <div className="intro-aside-label">Desde adentro</div>
            <p>
              Hemos estado del lado de quien ejecuta el proceso — operaciones, equipos y
              fricción real. No llegamos a observar desde afuera ni a vender un framework.
            </p>
          </div>
          <div className="intro-aside-card">
            <div className="intro-aside-label">Resultado</div>
            <p>
              Herramientas que la gente elige usar — no que se ven obligada a usar porque
              &quot;así lo pidió dirección&quot;.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
