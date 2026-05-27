const steps = [
  {
    num: "01",
    title: "Diagnóstico del problema real",
    text: "Empezamos entendiendo el proceso concreto que genera fricción. No partimos desde la teoría sino desde el día a día del equipo.",
  },
  {
    num: "02",
    title: "MVP funcional en tiempo récord",
    text: "Construimos una primera versión funcional y usable. Algo real que el equipo puede probar, no una promesa en un deck.",
  },
  {
    num: "03",
    title: "Validación con el equipo",
    text: "Medimos adopción real. Una herramienta que nadie usa no resuelve nada. Iteramos hasta que funciona de verdad.",
  },
  {
    num: "04",
    title: "Evolución continua",
    text: "No pensamos productos cerrados. Las herramientas crecen con las necesidades del negocio.",
  },
];

export function HowWeWork() {
  return (
    <section id="como">
      <div className="how-grid">
        <div className="reveal">
          <div className="section-tag">Proceso</div>
          <h2>Cómo trabajamos</h2>
          <p className="how-intro">
            En lugar de proyectos largos y difíciles de implementar, construimos MVPs funcionales
            que permiten validar rápidamente el valor real de cada herramienta.
          </p>
        </div>
        <div className="how-steps reveal">
          {steps.map((step) => (
            <div key={step.num} className="step">
              <span className="step-num">{step.num}</span>
              <div>
                <div className="step-title">{step.title}</div>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
