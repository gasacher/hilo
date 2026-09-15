const steps = [
  {
    num: "01",
    title: "Nos contás el pedido",
    text: "Qué necesitás y para qué. Landing, web, reportería, un bot, identidad visual, o algo que no entra en esa lista.",
  },
  {
    num: "02",
    title: "Lo evaluamos",
    text: "En unos días te decimos si lo tomamos y qué hace falta de verdad.",
  },
  {
    num: "03",
    title: "Propuesta concreta",
    text: "Alcance, plazo y precio. Por escrito, antes de empezar.",
  },
  {
    num: "04",
    title: "Se entrega para usarse",
    text: "Una página, un tablero, un bot o una identidad listos para abrir. Si hace falta un ajuste, entra en esa entrega.",
  },
];

export function HowWeWork() {
  return (
    <section id="como">
      <div className="process-header reveal">
        <h2>Así entra un trabajo</h2>
        <p className="section-desc">
          Una conversación. Una propuesta. Un entregable. Sin proyecto interminable.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.num} className="process-step reveal">
            <span className="process-num">{step.num}</span>
            <h4 className="process-title">{step.title}</h4>
            <p className="process-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
