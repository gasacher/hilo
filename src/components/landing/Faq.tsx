const items = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Después de evaluar tu pedido, te pasamos un precio cerrado — sabés cuánto vas a pagar antes de empezar.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Depende del servicio y de qué tan definidos estén tus materiales (logo, textos, contenido). Un proyecto simple puede estar en 1 a 2 semanas; uno más complejo, un poco más. Te damos un tiempo estimado concreto en la propuesta.",
  },
  {
    q: "¿Trabajan con marcas que ya tienen web o logo?",
    a: "Sí. Hacemos reingeniería y rebranding — actualizamos lo que ya existe, o lo repensamos de cero si hace falta.",
  },
  {
    q: "¿Puedo contratar un solo servicio?",
    a: "Sí, cada servicio funciona por separado. Aunque si combinás — por ejemplo, identidad de marca junto con la web — el resultado es más coherente porque lo hace el mismo equipo de punta a punta, y el presupuesto se arma acorde al paquete.",
  },
  {
    q: "¿De dónde son?",
    a: "Buenos Aires, y trabajamos remoto con todo el país. Si hace falta, nos juntamos a tomar una birra.",
  },
  {
    q: "¿Y si no me convence el primer entregable?",
    a: "El precio incluye 2 rondas de cambios — la mayoría de las veces alcanza con la primera. Si después de eso seguimos lejos, lo charlamos y vemos cómo seguir, sin drama.",
  },
];

export function Faq() {
  return (
    <section id="faq">
      <div className="reveal">
        <h2>Preguntas</h2>
        <p className="section-desc">Antes de escribir.</p>
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
