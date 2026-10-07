import type { Metadata } from "next";

export const siteUrl = "https://renzocurty.med.br";
export const siteName = "Dr. Renzo Curty";
export const siteDescription =
  "Dr. Renzo Curty, médico (CRM/RJ 52.140936-9) e gestor em Saúde Pública. Clínica geral no Hospital Flávio Leal em Piraí/RJ e consulta online por telemedicina. Agendamento pelo WhatsApp.";

const ogImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Dr. Renzo Curty · Médico",
};

export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "pt_BR",
  siteName,
  images: [ogImage],
};

export const baseTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  images: [ogImage],
};
