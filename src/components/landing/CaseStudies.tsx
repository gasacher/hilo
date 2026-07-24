const cases = [
  {
    type: "Asistente Inteligente",
    title: "Startup fintech — Onboarding de clientes",
    badge: "B2B SaaS · 45 empleados",
    problem:
      "El equipo de CX pasaba 15 horas por semana respondiendo las mismas 20 preguntas sobre documentación requerida. La información existía en Notion, pero nadie la encontraba. Cada nuevo empleado tardaba 3 semanas en ser productivo.",
    solution:
      "Asistente interno conectado a su base de conocimiento. Responde en Slack, resume documentos largos y sugiere pasos siguientes. Se entrenó con su documentación existente en 48 horas.",
    metrics: [
      { value: "-82%", label: "Tiempo en consultas repetitivas" },
      { value: "2.3 semanas", label: "Desde diagnóstico hasta MVP" },
      { value: "91%", label: "Del equipo lo usa activamente" },
    ],
    cta: "¿Tu equipo tiene un problema similar?",
  },
  {
    type: "Automatización Operativa",
    title: "Empresa de logística — Reportes mensuales",
    badge: "Logística · 120 empleados",
    problem:
      "Cada fin de mes, 3 personas dedicaban 2 días completos a consolidar datos de 4 fuentes distintas en un Excel que nadie leía. Los errores eran comunes y las decisiones se tomaban con información de hace 30 días.",
    solution:
      "Pipeline automático que extrae, limpia y visualiza los datos en un dashboard actualizado en tiempo real. Alertas por anomalías incluidas. Integración con sus herramientas existentes sin cambiar procesos.",
    metrics: [
      { value: "-94%", label: "Tiempo en consolidación de datos" },
      { value: "Real-time", label: "Dashboard en vez de Excel mensual" },
    ],
    cta: "¿Tu equipo tiene un problema similar?",
  },
];

export function CaseStudies() {
  return (
    <section id="casos">
      <div className="cases-header reveal">
        <div className="section-tag">Casos de éxito</div>
        <h2>Lo que ya construimos — y los resultados</h2>
        <p className="section-desc">
          Proyectos reales. Métricas reales. Sin nombres porque respetamos la confidencialidad de
          nuestros clientes.
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
              <div className="case-badge">{item.badge}</div>
            </div>
            <div className="case-body">
              <div className="case-grid">
                <div>
                  <div className="case-label">El problema</div>
                  <p className="case-text">{item.problem}</p>
                </div>
                <div>
                  <div className="case-label">Lo que construimos</div>
                  <p className="case-text">{item.solution}</p>
                </div>
              </div>
              <div className="case-metrics">
                {item.metrics.map((metric) => (
                  <div key={metric.label} className="case-metric">
                    <div className="case-metric-value">{metric.value}</div>
                    <div className="case-metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="case-cta">
                <p className="case-cta-text">{item.cta}</p>
                <a href="#contacto" className="btn-primary case-cta-btn">
                  Hablemos →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
