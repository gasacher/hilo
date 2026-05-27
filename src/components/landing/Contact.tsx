import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contacto">
      <div className="contact-inner">
        <div className="section-tag section-tag-center">Contacto</div>
        <h2>
          ¿Tenés un problema
          <br />
          que resolver?
        </h2>
        <p className="contact-sub">
          Contanos qué proceso te genera fricción o qué tarea le roba tiempo a tu equipo.
          Arrancamos desde ahí.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
