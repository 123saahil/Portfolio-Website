import React from "react";
import Navbar from "./components/Navbar";
import SectionRail from "./components/SectionRail";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import VelocityMarquee from "./components/VelocityMarquee";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-[#0a0a0f] text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Navbar />
      <SectionRail />

      {/* scroll-scrubbed canvas hero */}
      <ScrollyCanvas />

      {/* everything below the 500vh scroll stage */}
      <main className="relative z-10 bg-[#0a0a0f]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(90%_100%_at_50%_0%,rgba(109,40,217,0.22),transparent_70%)]" />
        <div className="container relative mx-auto max-w-6xl px-6">
          <Hero />
          <Experience />
          <Technologies />
          <Projects />
          <VelocityMarquee />
          <Education />
          <Achievements />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
