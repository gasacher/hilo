"use client";

import { FormEvent, useState } from "react";

const MAIL = "hola@hilo.studio";
const MAILTO_SUBJECT = encodeURIComponent("Pedido desde hilo.studio");

export function ContactForm() {
  const [mailtoHint, setMailtoHint] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("Nombre") ?? "").trim();
    const email = String(data.get("Email") ?? "").trim();
    const company = String(data.get("Empresa") ?? "").trim();
    const pedido = String(data.get("Pedido") ?? "").trim();

    const lines = [
      `Nombre: ${name}`,
      `Email: ${email}`,
      company ? `Empresa: ${company}` : null,
      "",
      "Pedido:",
      pedido,
    ].filter((line) => line !== null);

    const href = `mailto:${MAIL}?subject=${MAILTO_SUBJECT}&body=${encodeURIComponent(lines.join("\n"))}`;

    setMailtoHint(true);
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-label="Enviar un pedido">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            name="Nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="Email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            placeholder="tu@empresa.com"
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="contact-company">
          Empresa <span className="form-optional">(opcional)</span>
        </label>
        <input
          id="contact-company"
          name="Empresa"
          type="text"
          autoComplete="organization"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-process">¿Qué necesitás?</label>
        <textarea
          id="contact-process"
          name="Pedido"
          required
          rows={5}
          placeholder="Ej: una landing, un logo, un dashboard, un bot de WhatsApp..."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Enviar pedido <span className="btn-arrow">→</span>
        </button>
      </div>

      {mailtoHint ? (
        <p className="contact-fallback" role="status">
          Si no se abrió tu correo, escribinos directo a{" "}
          <a href={`mailto:${MAIL}?subject=${MAILTO_SUBJECT}`} className="contact-mail-inline">
            hola@hilo.studio
          </a>
        </p>
      ) : (
        <p className="contact-alt">
          o escribinos a{" "}
          <a href={`mailto:${MAIL}?subject=${MAILTO_SUBJECT}`} className="contact-mail-inline">
            hola@hilo.studio
          </a>
        </p>
      )}
    </form>
  );
}
