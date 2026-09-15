const icons = {
  web: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="9" r="1" fill="currentColor" />
      <circle cx="12" cy="9" r="1" fill="currentColor" opacity="0.5" />
      <path d="M9 17h8M9 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  data: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M8 22V14M16 22V8M24 22v-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M6 24h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </svg>
  ),
  auto: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="23" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 16h10M21.5 11.2l-8.8 3.6M21.5 20.8l-8.8-3.6" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
    </svg>
  ),
  identity: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="13" cy="13" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 18l7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 13h4M13 11v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
};

const services = [
  {
    tag: "Web",
    title: "Landing y sitios",
    description:
      "Una página para que te encuentren, o un sitio para vender y explicar. Identidad, celular, un contacto claro.",
    icon: icons.web,
  },
  {
    tag: "Datos",
    title: "Dashboards y reportería",
    description:
      "Ver los números sin armar el Excel cada viernes. Un tablero o un reporte que el equipo abra de verdad.",
    icon: icons.data,
  },
  {
    tag: "Automatización",
    title: "Bots y flujos",
    description:
      "Lo que hoy se responde a mano, se copia entre planillas o vive en un solo WhatsApp. Un bot o un flujo que lo resuelva.",
    icon: icons.auto,
  },
  {
    tag: "Identidad",
    title: "Identidad visual",
    description:
      "Logos, piezas y sistema visual. Que se vea y se entienda, en la marca y en el celular. Lo que hace falta, nada más.",
    icon: icons.identity,
  },
];

export function Services() {
  return (
    <section id="trabajo">
      <div className="services-header reveal">
        <h2>Qué hacemos</h2>
        <p className="section-desc">
          Si es otra cosa, lo evaluamos. Si no es para nosotros, lo decimos.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.tag} className="service-card reveal">
            <div className="card-head">
              {service.icon}
              <div className="card-tag">{service.tag}</div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
