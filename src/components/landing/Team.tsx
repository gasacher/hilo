const axes = [
  {
    title: "Datos",
    tone: "axis-lime",
    chips: ["Análisis de procesos", "Dashboards", "Automatización"],
  },
  {
    title: "Producto",
    tone: "axis-violet",
    chips: ["Desarrollo web", "Apps"],
  },
  {
    title: "Marca",
    tone: "axis-mix",
    chips: ["Identidad visual", "Diseño para redes"],
  },
];

export function Team() {
  return (
    <section id="nosotros">
      <div className="reveal">
        <p className="section-marker">04 Quiénes somos</p>
        <h2>
          Somos dos, <span className="ink-violet">pero somos un montón.</span>
        </h2>
        <p className="section-desc">
          Un estudio chico en Buenos Aires que cubre lo que normalmente necesita un equipo entero.
        </p>
      </div>
      <div className="axes">
        {axes.map((axis) => (
          <div key={axis.title} className={`axis reveal ${axis.tone}`}>
            <h3 className="axis-title">{axis.title}</h3>
            <ul className="chip-list">
              {axis.chips.map((chip) => (
                <li key={chip} className="chip">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="section-desc section-close">
        Hablás directo con quien hace el trabajo.
      </p>
    </section>
  );
}
