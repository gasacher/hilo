"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  process: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  process: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const subject = encodeURIComponent(`Consulta de ${form.name}${form.company ? ` · ${form.company}` : ""}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company || "—"}\n\nProceso:\n${form.process}`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:hola@hilo.studio?subject=${subject}&body=${body}`;
      setSent(true);
      setSubmitting(false);
      setForm(initialState);
    }, 400);
  }

  if (sent) {
    return (
      <div className="contact-success reveal visible">
        <p className="contact-success-title">Mensaje listo para enviar</p>
        <p className="contact-success-text">
          Se abrió tu cliente de correo con el mensaje preparado. Si no apareció, escribinos
          directamente a{" "}
          <a href="mailto:hola@hilo.studio" className="contact-mail-inline">
            hola@hilo.studio
          </a>
          .
        </p>
        <button type="button" className="btn-ghost contact-reset" onClick={() => setSent(false)}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="contact-name">Nombre</label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
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
          type="text"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => handleChange("company", e.target.value)}
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-process">¿Qué proceso te consume más tiempo?</label>
        <textarea
          id="contact-process"
          required
          rows={5}
          value={form.process}
          onChange={(e) => handleChange("process", e.target.value)}
          placeholder="Ej: cada semana armamos un reporte consolidando datos de 3 sistemas y tarda 6 horas..."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? "Preparando..." : "Enviar consulta →"}
        </button>
      </div>
    </form>
  );
}
