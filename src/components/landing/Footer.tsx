import Link from "next/link";
import { HiloIcon } from "./HiloIcon";

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        <HiloIcon size={20} />
        <span className="footer-word">hilo</span>
      </Link>
      <div className="footer-right">
        <a
          href="mailto:hola@hilo.studio?subject=Consulta%20desde%20hilo.studio"
          className="footer-email"
        >
          hola@hilo.studio
        </a>
        <span className="footer-copy">© 2026 Hilo Studio</span>
      </div>
    </footer>
  );
}
