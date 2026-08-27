import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import About from "@/components/About";
import Trajectory from "@/components/Trajectory";
import Roles from "@/components/Roles";
import RemoteAreas from "@/components/RemoteAreas";
import Neabi from "@/components/Neabi";
import Science from "@/components/Science";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosBar />
        <About />
        <Trajectory />
        <Roles />
        <RemoteAreas />
        <Neabi />
        <Science />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
