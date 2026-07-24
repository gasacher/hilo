import { ContactForm } from "./ContactForm";

const details = [
  { label: "Email", value: "hola@hilo.studio", href: "mailto:hola@hilo.studio" },
  { label: "Respuesta", value: "En menos de 24h" },
  { label: "Diagnóstico", value: "Gratuito, sin compromiso" },
];

export function Contact() {
  return (
    <section id="contacto">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <div className="section-tag">Contacto</div>
          <h2>Hablemos de tu proceso</h2>
          <p className="contact-info-text">
            Contanos qué tarea o proceso consume más tiempo innecesario en tu equipo. Arrancamos
            desde ahí.
          </p>
          <ul className="contact-details">
            {details.map((detail) => (
              <li key={detail.label}>
                <span className="contact-detail-label">{detail.label}</span>
                {detail.href ? (
                  <a href={detail.href} className="contact-mail-inline">
                    {detail.value}
                  </a>
                ) : (
                  <span className="contact-detail-value">{detail.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-form-wrap reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
