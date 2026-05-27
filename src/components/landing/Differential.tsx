const items = [
  {
    title: "Entendemos operaciones reales",
    text: "Trabajamos sobre problemas concretos que viven los equipos todos los días. No partimos desde la teoría ni desde el buzzword del momento.",
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
    <section id="diferencial">
      <div className="reveal">
        <div className="section-tag">Por qué Hilo</div>
        <h2>Nuestro diferencial</h2>
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
