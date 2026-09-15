import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto">
      <div className="contact-grid">
        <div className="contact-info reveal">
          <h2>¿Hablamos?</h2>
          <p className="contact-info-text">
            Landing, web, dashboard, bot, identidad visual — o algo que no entra
            en esa lista. Contanos y te respondemos en menos de 24 horas: si lo
            podemos hacer, qué haríamos y cuánto, o te decimos que no es para
            Hilo.
          </p>
          <p>
            <a
              href="mailto:hola@hilo.studio?subject=Pedido%20desde%20hilo.studio"
              className="contact-email"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M5 8l7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              hola@hilo.studio
            </a>
          </p>
        </div>
        <div className="contact-form-wrap reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
