const items = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Cotizamos según alcance. Vemos el pedido, definimos qué entra y te pasamos un precio cerrado por escrito antes de empezar. Sin extras a mitad de camino.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del alcance. Una landing o un flujo simple: [A CONFIRMAR: 1–3 semanas]. Un sitio o e-commerce: [A CONFIRMAR: 4–8 semanas]. Un tablero o una app: [A CONFIRMAR: 6–12 semanas]. La fecha concreta va en la propuesta.",
  },
  {
    q: "¿Trabajan con marcas que ya tienen web o logo?",
    a: "Sí. Si lo que tenés sirve, lo usamos. Si no, te lo decimos antes de arrancar.",
  },
  {
    q: "¿Puedo contratar un solo servicio?",
    a: "Sí. Si necesitás solo un tablero, te proponemos solo un tablero. Si después querés sumar algo, lo vemos.",
  },
  {
    q: "¿De dónde son?",
    a: "Buenos Aires. Trabajamos remoto con todo el país y con proyectos de afuera.",
  },
  {
    q: "¿Y si no me convence el primer entregable?",
    a: "La propuesta incluye [A CONFIRMAR: dos] rondas de ajustes. Si hace falta más, lo hablamos antes de seguir.",
  },
];

export function Faq() {
  return (
    <section id="faq">
      <div className="reveal">
        <p className="section-marker">05 Preguntas</p>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="faq-list">
        {items.map((item) => (
          <details key={item.q} className="faq-item reveal">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
