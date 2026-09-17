import { HiloIcon } from "./HiloIcon";

export function HiloLogo({ size = 36 }: { size?: number }) {
  return (
    <span className="hilo-logo">
      <HiloIcon size={size} />
      <span className="hilo-logo-word">hilo</span>
    </span>
  );
}
