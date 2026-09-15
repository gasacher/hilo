import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { HowWeWork } from "@/components/landing/HowWeWork";
import { Differential } from "@/components/landing/Differential";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { RevealObserver } from "@/components/landing/Reveal";
import "@/styles/hilo-landing.css";

export default function LandingPage() {
  return (
    <div className="hilo-landing">
      <CustomCursor />
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <Services />
        <div className="divider" />
        <HowWeWork />
        <div className="divider" />
        <Differential />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
