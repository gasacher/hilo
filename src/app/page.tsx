import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { Services } from "@/components/landing/Services";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { HowWeWork } from "@/components/landing/HowWeWork";
import { Differential } from "@/components/landing/Differential";
import { CTA } from "@/components/landing/CTA";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { CustomCursor } from "@/components/landing/CustomCursor";
import { RevealObserver } from "@/components/landing/Reveal";
import { StickyCta } from "@/components/landing/StickyCta";
import "@/styles/hilo-landing.css";

export default function LandingPage() {
  return (
    <div className="hilo-landing">
      <CustomCursor />
      <RevealObserver />
      <Navbar />
      <StickyCta />
      <main>
        <Hero />
        <Intro />
        <Services />
        <CaseStudies />
        <HowWeWork />
        <Differential />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
