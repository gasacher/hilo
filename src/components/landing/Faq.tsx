const items = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "No te lo podemos decir antes de ver el pedido — y desconfiá de quien sí lo haga. Evaluamos el trabajo, definimos el alcance y te pasamos un precio cerrado por escrito. El número de la propuesta es el número que pagás. Sin extras que aparecen a mitad de camino.",
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Los extremos los conocemos: una landing o un flujo simple puede estar en 1 a 2 semanas; algo más armado, como un tablero con varias fuentes o una app, lleva más. En la propuesta va una fecha de entrega concreta, no un rango vago. Y si tu fecha es innegociable, lo evaluamos con eso sobre la mesa — a veces el alcance se ajusta para llegar.",
  },
  {
    q: "¿Trabajan con marcas que ya tienen web o logo?",
    a: "Sí. Si lo que tenés sirve, lo usamos y ahorrás plata. Si no sirve, te lo decimos antes de arrancar: no vamos a maquillar algo que por dentro está roto. Cuando la diferencia es de fondo, lo repensamos de cero.",
  },
  {
    q: "¿Puedo contratar un solo servicio?",
    a: "Sí. Cada pedido se evalúa solo: si necesitás solo un tablero, te proponemos solo un tablero. Dicho esto, cuando la web, la marca y los procesos los hace la misma gente, nada queda suelto en el medio — por eso el paquete completo suele dar mejor resultado. Y no te lo vamos a empujar si no lo necesitás.",
  },
  {
    q: "¿De dónde son?",
    a: "Buenos Aires. Trabajamos remoto con todo el país — y si el proyecto es de afuera, también lo vemos. Evaluación, propuesta y entregas quedan por escrito. Si hace falta, nos tomamos un cafecito, un vermú o una birra — lo que gustes.",
  },
  {
    q: "¿Y si no me convence el primer entregable?",
    a: "La propuesta incluye dos rondas de ajustes. Si necesitás más, lo conversamos y encontramos una solución juntos. Lo que no va a pasar es que te quedes atado a algo que no te sirve.",
  },
];

export function Faq() {
  return (
    <section id="faq">
      <div className="reveal">
        <h2>Preguntas frecuentes</h2>
        <p className="section-desc">Lo que más nos consultan.</p>
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
