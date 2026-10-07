import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import LogosBar from "@/components/LogosBar/LogosBar";
import Telemedicine from "@/components/Telemedicine/Telemedicine";
import Contact from "@/components/Contact/Contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogosBar />
      <Telemedicine />
      <Contact />
    </>
  );
}
