const services = [
  {
    num: "01",
    title: "Asistentes inteligentes internos",
    description:
      "Herramientas que interpretan documentación, responden consultas y ayudan a los equipos a acceder al conocimiento interno de la empresa.",
    tags: ["Búsqueda documental", "Resúmenes automáticos", "Consultas internas"],
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="12" r="6" stroke="#4a9eff" strokeWidth="1.5" opacity="0.7" />
        <circle cx="8" cy="32" r="4" stroke="#4a9eff" strokeWidth="1.5" opacity="0.4" />
        <circle cx="32" cy="32" r="4" stroke="#4a9eff" strokeWidth="1.5" opacity="0.4" />
        <line x1="20" y1="18" x2="8" y2="28" stroke="#4a9eff" strokeWidth="1" opacity="0.3" />
        <line x1="20" y1="18" x2="32" y2="28" stroke="#4a9eff" strokeWidth="1" opacity="0.3" />
        <circle cx="20" cy="12" r="2" fill="#4a9eff" opacity="0.8" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Automatización operativa",
    description:
      "Automatizamos tareas repetitivas y procesos administrativos que consumen tiempo y generan fricción dentro de las organizaciones.",
    tags: ["Workflows", "Reportes", "Consolidación de datos"],
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="4" y="16" width="12" height="8" rx="2" stroke="#4a9eff" strokeWidth="1.5" opacity="0.6" />
        <rect x="24" y="16" width="12" height="8" rx="2" stroke="#4a9eff" strokeWidth="1.5" opacity="0.6" />
        <line x1="16" y1="20" x2="24" y2="20" stroke="#4a9eff" strokeWidth="1.5" opacity="0.4" />
        <path d="M20 8 L20 14" stroke="#4a9eff" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <path d="M20 26 L20 32" stroke="#4a9eff" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <circle cx="20" cy="6" r="2.5" fill="#4a9eff" opacity="0.5" />
        <circle cx="20" cy="34" r="2.5" fill="#4a9eff" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Herramientas internas a medida",
    description:
      "Plataformas simples, modernas y funcionales diseñadas para resolver necesidades específicas de operación y gestión.",
    tags: ["Dashboards", "Portales internos", "Copilotos operativos"],
    icon: (
      <svg className="service-icon" viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="4" y="4" width="32" height="24" rx="3" stroke="#4a9eff" strokeWidth="1.5" opacity="0.6" />
        <line x1="4" y1="12" x2="36" y2="12" stroke="#4a9eff" strokeWidth="1" opacity="0.3" />
        <rect x="8" y="16" width="10" height="8" rx="1" fill="#4a9eff" opacity="0.15" />
        <rect x="22" y="16" width="10" height="3" rx="1" fill="#4a9eff" opacity="0.2" />
        <rect x="22" y="21" width="6" height="3" rx="1" fill="#4a9eff" opacity="0.15" />
        <line x1="16" y1="32" x2="24" y2="32" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="20" y1="28" x2="20" y2="32" stroke="#4a9eff" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicios">
      <div className="services-header reveal">
        <div className="section-tag">Servicios</div>
        <h2>Qué construimos</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.num} className="service-card reveal">
            <div className="service-num">{service.num}</div>
            {service.icon}
            <div className="service-title">{service.title}</div>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
