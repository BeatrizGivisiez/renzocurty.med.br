import type { Metadata } from "next";
import About from "@/components/About/About";
import Trajectory from "@/components/Trajectory/Trajectory";
import Roles from "@/components/Roles/Roles";
import RemoteAreas from "@/components/RemoteAreas/RemoteAreas";
import Neabi from "@/components/Neabi/Neabi";
import Science from "@/components/Science/Science";
import { baseOpenGraph, baseTwitter } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre · Formação, trajetória e produção científica",
  description:
    "Conheça a trajetória do Dr. Renzo Curty: médico pela Universidade de Vassouras, gestor em Saúde Pública, Diretor Médico da ABMAR, atuação em urgência e emergência, educação médica e produção científica.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    ...baseOpenGraph,
    url: "/sobre",
    title: "Sobre o Dr. Renzo Curty",
    description:
      "Formação, cargos, medicina de áreas remotas, NEABI e produção científica do Dr. Renzo Curty.",
  },
  twitter: {
    ...baseTwitter,
    title: "Sobre o Dr. Renzo Curty",
    description:
      "Formação, cargos, medicina de áreas remotas, NEABI e produção científica do Dr. Renzo Curty.",
  },
};

export default function SobrePage() {
  return (
    <>
      <About />
      <Trajectory />
      <Roles />
      <RemoteAreas />
      <Neabi />
      <Science />
    </>
  );
}
