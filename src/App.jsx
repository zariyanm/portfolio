import React from "react";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Domains from "./components/sections/Domains";
import Marquee from "./components/sections/Marquee";
import ThingsIBuild from "./components/sections/ThingsIBuild";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/ui/CustomCursor";

export default function App() {
  // Initialize Lenis smooth scroll synced with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="relative bg-[#070708] text-zinc-100 min-h-screen selection:bg-zinc-200 selection:text-black font-sans">
      {/* Subtle Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Editorial Experience */}
      <main className="relative z-10">
        <Hero />
        <Domains />
        <Marquee />
        <ThingsIBuild />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
