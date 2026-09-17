import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <h2>¿Hablamos?</h2>
          <p className="contact-info-text">
            Web, dashboards, identidad, social media, automatización o apps — o
            algo que no entra en esa lista. Contanos: si lo podemos hacer, qué
            haríamos y cuánto, o te decimos que no es para Hilo.
          </p>
          <div className="contact-channels">
            <p>
              <a
                href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
                className="contact-email"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M5 8l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                hola@hilo.studio
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/hilo.studio/"
                className="contact-instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
                @hilo.studio
              </a>
            </p>
          </div>
        </div>
        <div className="contact-form-wrap reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
