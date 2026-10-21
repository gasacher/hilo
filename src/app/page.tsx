import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Works } from "@/components/landing/Works";
import { Services } from "@/components/landing/Services";
import { HowWeWork } from "@/components/landing/HowWeWork";
import { Team } from "@/components/landing/Team";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { RevealObserver } from "@/components/landing/Reveal";
import "@/styles/hilo-landing.css";

export default function LandingPage() {
  return (
    <div className="hilo-landing">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <RevealObserver />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Works />
        <Services />
        <HowWeWork />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
