import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Archivo, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
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
  title: {
    default: "Dr. Renzo Curty · Médico e gestor em saúde pública",
    template: "%s · Dr. Renzo Curty",
  },
  description:
    "Médico pela Universidade de Vassouras e gestor em Saúde Pública. Diretor Médico da ABMAR, atuação em urgência e emergência, clínica geral, educação médica e produção científica.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${archivo.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
