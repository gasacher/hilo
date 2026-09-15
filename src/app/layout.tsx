import type { Metadata } from "next";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hilo Estudio \u2014 Un pedido puntual. Una respuesta concreta.",
  description:
    "Estudio de dise\u00f1o y desarrollo en Buenos Aires. Landings, sitios, dashboards, automatizaciones e identidad visual, con propuesta concreta y precio cerrado.",
  icons: {
    icon: [
      { url: assetPath("/favicon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon.png"), type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hilo Estudio \u2014 Un pedido puntual. Una respuesta concreta.",
    description:
      "Landings, sitios, dashboards, bots e identidad visual. Contanos el pedido, te decimos qu\u00e9 har\u00edamos y cu\u00e1nto.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
