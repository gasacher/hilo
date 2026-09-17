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
  social: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="6" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="10" r="1.2" fill="currentColor" />
    </svg>
  ),
  apps: (
    <svg className="service-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="5" y="18" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="18" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
    </svg>
  ),
};

const services = [
  {
    tag: "01",
    title: "Desarrollo web",
    punch: "Landings y sitios para explicar, vender o que te encuentren.",
    includes: [
      "Landing para un lanzamiento o un servicio",
      "Sitio institucional o e-commerce (Tiendanube, Shopify u otra)",
      "SEO técnico y on-page",
      "Que se adapte a cualquier pantalla",
    ],
    icon: icons.web,
  },
  {
    tag: "02",
    title: "Dashboards",
    punch: "Tableros y reportes a partir de los datos que ya tenés.",
    includes: [
      "Un tablero para ver números en un solo lugar",
      "Reportes que no tengas que armar a mano cada vez",
      "Que se pueda actualizar después",
    ],
    icon: icons.data,
  },
  {
    tag: "03",
    title: "Automatización",
    punch: "Bots y flujos para lo que hoy se responde o se copia a mano.",
    includes: [
      "Bot de WhatsApp u otro canal",
      "Pasar datos entre herramientas",
      "Un flujo chico, no un proyecto que no termina nunca",
    ],
    icon: icons.auto,
  },
  {
    tag: "04",
    title: "Identidad visual",
    punch: "Logo, piezas y sistema visual. Lo que hace falta.",
    includes: [
      "Logo y marca aplicada",
      "Sistema visual para web y piezas",
      "Que se reconozca igual en cualquier pantalla",
    ],
    icon: icons.identity,
  },
  {
    tag: "05",
    title: "Social media",
    punch: "Contenido para redes sociales. Que se vea y se publique.",
    includes: [
      "Dirección de contenido y piezas para el feed",
      "Stories y formatos cortos",
      "Una línea visual, no un post suelto cada tanto",
    ],
    icon: icons.social,
  },
  {
    tag: "06",
    title: "Apps",
    punch: "Productos digitales para usar: web apps, herramientas, lo que hace falta.",
    includes: [
      "Web apps y herramientas internas",
      "Backend, login y base de datos",
      "Integración de pagos (Stripe, Mercado Pago)",
      "Algo que se abra y se use, no un sistema infinito",
    ],
    icon: icons.apps,
  },
];

export function Services() {
  return (
    <section id="trabajo">
      <div className="services-header reveal">
        <h2>Qué hacemos</h2>
        <p className="section-desc">
          Seis áreas. Abrí cada una. Si es otra cosa, lo evaluamos.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <details key={service.tag} className="service-card reveal">
            <summary>
              <div className="card-head">
                {service.icon}
                <div className="card-tag">{service.tag}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.punch}</p>
            </summary>
            <ul className="service-list">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
