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
    <section id="proceso">
      <div className="process-header reveal">
        <div className="section-tag">Cómo trabajamos</div>
        <h2>De problema a herramienta en 4 pasos</h2>
        <p className="section-desc">
          No hacemos proyectos largos y difíciles de implementar. Construimos MVPs funcionales que
          permiten validar rápidamente el valor real.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.num} className="process-step reveal">
            <span className="process-num">{step.num}</span>
            <div className="process-title">{step.title}</div>
            <p className="process-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
