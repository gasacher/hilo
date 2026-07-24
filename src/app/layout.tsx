import type { Metadata } from "next";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hilo — Herramientas que tu equipo elige usar",
  description:
    "Diseñamos asistentes inteligentes y automatizaciones que los equipos realmente adoptan. MVP en 3 semanas.",
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
