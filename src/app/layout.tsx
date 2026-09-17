import type { Metadata } from "next";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hilo Estudio \u2014 el hilo conductor",
  description:
    "Estudio de dise\u00f1o y desarrollo en Buenos Aires. Web, identidad, tableros, automatizaci\u00f3n, contenido y productos digitales, con propuesta concreta y precio cerrado.",
  icons: {
    icon: [
      { url: assetPath("/favicon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon.png"), type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hilo Estudio \u2014 el hilo conductor",
    description:
      "Web, identidad, tableros, bots, contenido y productos digitales. Contanos qu\u00e9 necesit\u00e1s, te decimos qu\u00e9 har\u00edamos y cu\u00e1nto.",
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
