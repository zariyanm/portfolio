import React, { useState, useEffect } from "react";
import { personalData, contactData } from "../../data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#070708]/85 backdrop-blur-md border-b border-zinc-800/60 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name & Positioning */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
        >
          <span className="font-display font-bold text-xl md:text-2xl tracking-tighter text-white group-hover:text-zinc-400 transition-colors">
            {personalData.displayName}
          </span>
          <span className="text-[10px] md:text-xs tracking-widest text-zinc-500 uppercase font-mono-code">
            {personalData.role}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="group inline-flex items-center gap-1.5 px-4 py-2 border border-zinc-700 hover:border-zinc-300 rounded-full text-xs tracking-widest uppercase font-mono-code text-zinc-200 hover:text-black hover:bg-zinc-100 transition-all duration-300 cursor-pointer"
          >
            <span>{contactData.ctaText}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-zinc-800 py-8 px-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-display uppercase tracking-wider text-zinc-300 hover:text-white border-b border-zinc-800/50 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center justify-between w-full px-5 py-3 border border-zinc-600 rounded-lg text-sm font-mono-code tracking-widest uppercase text-white hover:bg-zinc-100 hover:text-black transition-colors pt-4 cursor-pointer"
            >
              <span>LET'S TALK ↗</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
