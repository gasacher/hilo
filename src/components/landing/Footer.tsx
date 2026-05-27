import Link from "next/link";
import { HiloIcon } from "./HiloIcon";

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        <HiloIcon size={20} />
        <span className="footer-word">hilo</span>
      </Link>
      <span className="footer-copy">© 2026 Hilo Studio — Herramientas inteligentes</span>
    </footer>
  );
}
