const cases = [
  {
    type: "Llegás con esto",
    title: "“Necesito una landing”",
    problem:
      "La marca ya está, o está por salir, y no hay página. Una agencia cotiza un sitio entero. Un freelancer te entrega un template.",
    solution:
      "Vemos alcance de verdad: una página, tres idiomas, WhatsApp. Cotizamos eso. Si después hace falta web o carrito, se reutiliza.",
  },
  {
    type: "Llegás con esto",
    title: "“Necesito ver los números”",
    problem:
      "Los datos están en planillas, en un sistema que nadie abre o en la cabeza de una persona. Pedir un ERP es caro y tarda un año.",
    solution:
      "Un dashboard o una reportería que se pueda usar la semana que viene. Lo justo para decidir. No un sistema de gestión.",
  },
  {
    type: "Llegás con esto",
    title: "“Esto lo hacemos a mano”",
    problem:
      "Las mismas preguntas por WhatsApp. El mismo reporte cada viernes. Copiar y pegar entre tres lugares.",
    solution:
      "Un bot, un flujo o una automatización. Si con eso alcanza, no construimos una plataforma.",
  },
];

export function CaseStudies() {
  return (
    <section id="casos">
      <div className="cases-header reveal">
        <div className="section-tag">En la práctica</div>
        <h2>El pedido entra. Nosotros lo acomodamos.</h2>
        <p className="section-desc">
          No vendemos un paquete cerrado. Escuchamos qué pedís y proponemos lo que
          hace falta — a veces es menos de lo que pensabas.
        </p>
      </div>

      <div className="cases-list">
        {cases.map((item) => (
          <article key={item.title} className="case-card reveal">
            <div className="case-header">
              <div>
                <div className="case-type">{item.type}</div>
                <div className="case-title">{item.title}</div>
              </div>
            </div>
            <div className="case-body">
              <div className="case-grid">
                <div>
                  <div className="case-label">El problema</div>
                  <p className="case-text">{item.problem}</p>
                </div>
                <div>
                  <div className="case-label">Qué proponemos</div>
                  <p className="case-text">{item.solution}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
