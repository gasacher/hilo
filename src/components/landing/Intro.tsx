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
            No vendemos tecnología por la tecnología. Construimos lo que resuelve un dolor
            concreto de tu equipo — combinando diseño, operaciones y desarrollo acelerado con
            inteligencia artificial.
          </p>
          <p>
            Tenemos experiencia desde adentro: conocemos cómo se viven los procesos, no solo
            cómo se diagraman. Sabemos dónde se traba un equipo antes de proponer una
            solución.
          </p>
          <div className="intro-statement">
            No buscamos reemplazar personas.
            <br />
            Buscamos potenciar equipos.
          </div>
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
