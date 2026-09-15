import Link from "next/link";
import { HiloLogo } from "./HiloLogo";

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo" aria-label="hilo">
        <HiloLogo size={22} />
      </Link>
      <div className="footer-right">
        <a
          href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
          className="footer-email"
        >
          hola@hilo.studio
        </a>
        <span className="footer-copy">Hilo Estudio · Buenos Aires · © 2026</span>
      </div>
    </footer>
  );
}
