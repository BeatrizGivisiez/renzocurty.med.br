import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Archivo, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import StructuredData from "@/components/StructuredData/StructuredData";
import { baseOpenGraph, baseTwitter, siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Renzo Curty · Médico · Clínica geral em Piraí/RJ e telemedicina",
    template: "%s · Dr. Renzo Curty",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "Dr. Renzo Curty",
    "Renzo Curty",
    "médico",
    "clínica geral",
    "clínico geral Piraí",
    "Hospital Flávio Leal",
    "Piraí RJ",
    "telemedicina",
    "teleconsulta",
    "consulta médica online",
    "urgência e emergência",
    "gestão em saúde pública",
    "ABMAR",
    "medicina de áreas remotas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    ...baseOpenGraph,
    url: "/",
    title: "Dr. Renzo Curty · Médico",
    description: siteDescription,
  },
  twitter: {
    ...baseTwitter,
    title: "Dr. Renzo Curty · Médico",
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#1e2617",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
