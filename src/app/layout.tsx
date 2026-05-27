import type { Metadata } from "next";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hilo — Herramientas inteligentes para equipos reales",
  description:
    "Diseñamos y desarrollamos asistentes inteligentes, automatizaciones y herramientas internas para que las empresas trabajen con menos fricción y más claridad.",
  icons: {
    icon: assetPath("/favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
