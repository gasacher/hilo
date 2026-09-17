const steps = [
  {
    num: "01",
    title: "Nos contás qué necesitás",
    text: "Web, dashboards, identidad, social media, automatización o apps — o algo que no entra en esa lista.",
  },
  {
    num: "02",
    title: "Lo evaluamos",
    text: "En unos días te decimos si lo tomamos y con qué alcance.",
  },
  {
    num: "03",
    title: "Propuesta concreta",
    text: "Alcance, plazo y precio. Por escrito, antes de empezar.",
  },
  {
    num: "04",
    title: "Se entrega",
    text: "Una web, un dashboard, una identidad, contenido, una automatización o una app. Si hace falta un ajuste, entra en esa entrega.",
  },
];

export function HowWeWork() {
  return (
    <section id="como">
      <div className="process-header reveal">
        <h2>Así entra un trabajo</h2>
        <p className="section-desc">
          Una conversación. Una propuesta. Un entregable.
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
