import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Unbounded } from "next/font/google";
import { assetPath } from "@/lib/base-path";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-unbounded",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
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
      className={`${unbounded.variable} ${hanken.variable} ${plex.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
