import type { Metadata } from "next";
import About from "@/components/About/About";
import Trajectory from "@/components/Trajectory/Trajectory";
import Roles from "@/components/Roles/Roles";
import RemoteAreas from "@/components/RemoteAreas/RemoteAreas";
import Neabi from "@/components/Neabi/Neabi";
import Science from "@/components/Science/Science";

export const metadata: Metadata = {
  title: "Sobre",
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
