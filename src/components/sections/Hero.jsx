import React, { useEffect, useRef } from "react";
import { heroData, personalData } from "../../data/portfolio";
import { ArrowDown, Terminal } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const tagRef = useRef(null);
  const positionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          tagRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          positionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60"
    >
      {/* Background Editorial Watermark / Details */}
      <div className="absolute top-28 right-6 md:right-12 hidden lg:flex items-center gap-2 text-zinc-600 text-xs font-mono-code uppercase tracking-widest pointer-events-none">
        <Terminal size={14} className="text-zinc-500" />
        <span>{personalData.location} • 2026</span>
      </div>

      {/* Main Editorial Content Hierarchy */}
      <div className="my-auto pt-8">
        {/* Top Tag Label */}
        <div ref={positionRef} className="mb-6 inline-flex items-center gap-3">
          <span className="h-[1px] w-8 bg-zinc-600"></span>
          <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono-code">
            MUHAMMAD ZARIYAN JAVAID
          </span>
        </div>

        {/* 1. DOMINANT HUGE HEADLINE */}
        <h1
          ref={headlineRef}
          className="hero-headline font-display font-extrabold text-white max-w-5xl tracking-tighter mb-8"
        >
          {heroData.mainHeadline}
        </h1>

        {/* 2. Supporting Line */}
        <p
          ref={subRef}
          className="text-2xl md:text-4xl lg:text-5xl font-display font-medium text-zinc-300 max-w-3xl leading-tight mb-6"
        >
          {heroData.supportingLine}
        </p>

        {/* 3. Unique Value Line & Additional Positioning */}
        <div
          ref={tagRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800/80 max-w-4xl"
        >
          <div>
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 block mb-1">
              FOCUS AREAS
            </span>
            <p className="text-sm md:text-base text-zinc-300 font-normal">
              {heroData.uniqueValueLine}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 block mb-1">
              APPROACH
            </span>
            <p className="text-sm md:text-base text-zinc-400 font-normal">
              {heroData.additionalPositioning}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="pt-12 flex items-center justify-between text-xs font-mono-code uppercase text-zinc-500 tracking-widest">
        <div className="flex items-center gap-2">
          <ArrowDown size={14} className="animate-bounce" />
          <span>SCROLL TO EXPLORE</span>
        </div>
        <div className="hidden sm:block">
          <span>{personalData.role}</span>
        </div>
      </div>
    </section>
  );
}
