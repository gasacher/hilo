import Link from "next/link";
import { HiloLogo } from "./HiloLogo";

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo" aria-label="hilo">
        <HiloLogo size={36} />
      </Link>
      <div className="footer-right">
        <a
          href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
          className="footer-email"
        >
          hola@hilo.studio
        </a>
        <a
          href="https://www.instagram.com/hilo.studio/"
          className="footer-instagram"
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
        <span className="footer-copy">Hilo Estudio · Buenos Aires · © 2026</span>
      </div>
    </footer>
  );
}
