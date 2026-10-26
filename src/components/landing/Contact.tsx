import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <p className="section-marker">06 Contacto</p>
          <h2 className="ink-lime">¿Hablamos?</h2>
          <p className="contact-info-text">
            Contanos tu proceso y te decimos qué se puede automatizar. Es un
            diagnóstico corto y sin costo. Si no es para Hilo, también te lo
            decimos.
          </p>
          <div className="contact-channels">
            <p className="contact-email">Email: [A DEFINIR]</p>
            <p>
              {/* TODO: verificar que la cuenta sea nuestra */}
              <a
                href="https://www.instagram.com/hilo.studio/"
                className="contact-instagram"
                target="_blank"
                rel="noopener noreferrer"
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
