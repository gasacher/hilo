const items = [
  {
    title: "Directo con vos",
    text: "Hablamos con quien pide el trabajo. Sin cadena de intermediarios.",
    icon: (
      <svg className="dif-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="8" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 18c.6-2.4 2.4-3.6 3.5-3.6S11 15.6 11.6 18M12.4 18c.6-2.4 2.4-3.6 3.6-3.6s2.9 1.2 3.5 3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Precio cerrado",
    text: "Alcance, plazo y monto por escrito, antes de empezar.",
    icon: (
      <svg className="dif-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3.5l7.5 4v9L12 20.5 4.5 16.5v-9L12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8.5v7M9.8 11.2h3.3a1.4 1.4 0 010 2.8H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Una entrega, no un proyecto eterno",
    text: "Definimos el alcance antes de arrancar y lo cerramos ahí. Nada de scope que crece solo.",
    icon: (
      <svg className="dif-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="6" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14.5l2.5-5.2M16 14.5l-2.5-5.2" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Si no entra, lo decimos",
    text: "No forzamos un trabajo que no vamos a hacer bien.",
    icon: (
      <svg className="dif-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Differential() {
  return (
    <section id="estudio">
      <div className="reveal">
        <h2>Por qué nosotros</h2>
        <p className="section-desc">Cómo preferimos trabajar.</p>
      </div>
      <div className="dif-grid">
        {items.map((item) => (
          <div key={item.title} className="dif-card reveal">
            {item.icon}
            <h3 className="dif-title">{item.title}</h3>
            <p className="dif-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
