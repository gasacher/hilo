import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-bricolage",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const title = "Hilo Estudio — Contanos qué te frena";
const description =
  "Contanos qué te frena. Del resto nos encargamos nosotros. Estudio en Buenos Aires.";
const url = "https://gasacher.github.io/hilo/";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  icons: {
    icon: [
      { url: assetPath("/favicon.svg"), type: "image/svg+xml" },
      { url: assetPath("/favicon.png"), type: "image/png" },
    ],
  },
  openGraph: {
    title,
    description,
    url,
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
    <html
      lang="es-AR"
      className={`${bricolage.variable} ${hanken.variable} ${instrument.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
