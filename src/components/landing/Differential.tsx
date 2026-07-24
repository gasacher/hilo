const items = [
  {
    title: "Conocemos los procesos desde adentro",
    text: "Tenemos experiencia real dentro de operaciones y equipos. Entendemos dónde se traba el trabajo en la práctica — no desde la teoría ni desde el buzzword del momento.",
  },
  {
    title: "Diseñamos para la adopción",
    text: "Combinamos UX, claridad y funcionalidad para lograr herramientas que las personas realmente eligen usar — no que se ven obligadas a usar.",
  },
  {
    title: "Construimos rápido",
    text: "Utilizamos herramientas modernas de desarrollo e inteligencia artificial para acelerar la construcción y validación sin sacrificar calidad.",
  },
  {
    title: "Evolucionamos con el negocio",
    text: "No entregamos y desaparecemos. Las soluciones que construimos crecen y se adaptan a medida que cambian las necesidades del equipo.",
  },
];

export function Differential() {
  return (
    <section id="por-que">
      <div className="reveal">
        <div className="section-tag">Por qué Hilo</div>
        <h2>No somos otra consultora de IA</h2>
        <p className="section-desc">
          Hay cientos de equipos que prometen automatizar. Nosotros partimos de haber estado del
          otro lado — del que vive el proceso todos los días.
        </p>
      </div>
      <div className="dif-grid">
        {items.map((item) => (
          <div key={item.title} className="dif-card reveal">
            <div className="dif-title">{item.title}</div>
            <p className="dif-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
