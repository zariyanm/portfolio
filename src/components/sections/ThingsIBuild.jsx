import React, { useEffect, useRef } from "react";
import { thingsIBuildData } from "../../data/portfolio";
import gsap from "gsap";

export default function ThingsIBuild() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const img = item.querySelector(".build-image");
        const content = item.querySelector(".build-content");

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, y: -20 },
            {
              scale: 1,
              y: 20,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0.3, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-zinc-800/80">
        <div>
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            02 // CORE DISCIPLINES
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter">
            THINGS I BUILD
          </h2>
        </div>
        <p className="text-sm text-zinc-400 font-mono-code max-w-md mt-4 md:mt-0">
          Editorial breakdown of engineering focus across intelligent models, automated workflows, and security operations.
        </p>
      </div>

      {/* Editorial Story Layouts */}
      <div className="flex flex-col space-y-24">
        {thingsIBuildData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (itemsRef.current[index] = el)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group"
          >
            {/* Image Container with Parallax & Hover Effect */}
            <div
              className={`lg:col-span-7 overflow-hidden rounded-xl border border-zinc-800 relative aspect-[16/10] bg-zinc-950 ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="build-image w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 font-mono-code text-xs uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-700/60">
                {item.subtitle}
              </div>
            </div>

            {/* Content Story Block */}
            <div
              className={`build-content lg:col-span-5 flex flex-col justify-center ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="font-mono-code text-zinc-400 text-sm md:text-base tracking-widest font-semibold">
                  {item.number}
                </span>
                <span className="w-12 h-[1px] bg-zinc-700"></span>
                <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest">
                  FOCUS
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight mb-6 group-hover:text-zinc-200 transition-colors">
                {item.title}
              </h3>

              <p className="text-base md:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/60">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono-code tracking-wider uppercase text-zinc-400 px-3 py-1 bg-zinc-900/80 border border-zinc-800 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
