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
          {/* TODO: verificar que la cuenta sea nuestra */}
          <a
            href="https://www.instagram.com/hilo.studio/"
            className="btn-ghost btn-ghost-light"
            target="_blank"
            rel="noreferrer"
          >
            @hilo.studio
          </a>
        </div>
      </div>
    </section>
  );
}
