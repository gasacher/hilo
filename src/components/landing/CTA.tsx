export function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-inner reveal">
        <h2>¿Tenés un pedido?</h2>
        <p>
          Landing, web, dashboard, bot o lo que te esté frenando. Contanos y te
          decimos si lo podemos hacer, qué haríamos y cuánto.
        </p>
        <div className="cta-actions">
          <a href="#contacto" className="btn-primary">
            Contanos el pedido
          </a>
          <a
            href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
            className="btn-ghost btn-ghost-light"
          >
            hola@hilo.studio
          </a>
        </div>
      </div>
    </section>
  );
}
