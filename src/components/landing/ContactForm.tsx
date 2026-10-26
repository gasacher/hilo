"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "[A DEFINIR]";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("_gotcha") ?? "").trim()) {
      setStatus("ok");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      if (!FORM_ENDPOINT.startsWith("http")) {
        throw new Error("endpoint-undefined");
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: String(data.get("Nombre") ?? "").trim(),
          Email: String(data.get("Email") ?? "").trim(),
          Empresa: String(data.get("Empresa") ?? "").trim(),
          proceso: String(data.get("proceso") ?? "").trim(),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-label="Formulario de contacto">
      <p className="form-badge">Diagnóstico</p>
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
        <label htmlFor="contact-process">¿Qué proceso te gustaría automatizar o qué necesitás?</label>
        <textarea
          id="contact-process"
          name="proceso"
          required
          rows={5}
          placeholder="El reporte, el pedido o el mensaje que hoy se hace a mano"
        />
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-gotcha">No completar</label>
        <input
          id="contact-gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={status === "sending"}>
          {status === "sending" ? (
            "Enviando…"
          ) : (
            <>
              Pedir diagnóstico <span className="btn-arrow">↗</span>
            </>
          )}
        </button>
      </div>

      {status === "sending" ? (
        <p className="contact-alt" role="status">
          Enviando…
        </p>
      ) : null}
      {status === "ok" ? (
        <p className="contact-fallback" role="status">
          Listo. Te respondemos en unos días.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="contact-fallback" role="status">
          No se pudo enviar. Probá de nuevo o escribinos por Instagram.
        </p>
      ) : null}

      <p className="contact-alt">
        o{" "}
        <a
          // TODO: verificar que la cuenta sea nuestra
          href="https://www.instagram.com/hilo.studio/"
          className="contact-mail-inline"
          target="_blank"
          rel="noopener noreferrer"
        >
          escribinos por Instagram
        </a>
      </p>
    </form>
  );
}
