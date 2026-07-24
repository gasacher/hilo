export function ContactForm() {
  return (
    <form
      className="contact-form"
      action="mailto:hola@hilo.studio"
      method="POST"
      encType="text/plain"
    >
      <input type="hidden" name="Origen" value="Formulario web Hilo" />

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
        <label htmlFor="contact-process">¿Qué proceso te consume más tiempo?</label>
        <textarea
          id="contact-process"
          name="Proceso"
          required
          rows={5}
          placeholder="Ej: cada semana armamos un reporte consolidando datos de 3 sistemas y tarda 6 horas..."
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-primary">
          Enviar consulta →
        </button>
      </div>

      <p className="contact-alt">
        o escribinos a{" "}
        <a href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio" className="contact-mail-inline">
          hola@hilo.studio
        </a>
      </p>
    </form>
  );
}
