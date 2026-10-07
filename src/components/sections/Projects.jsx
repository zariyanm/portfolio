import React, { useEffect, useRef } from "react";
import { projectsData } from "../../data/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0.2, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-zinc-800/80">
        <div>
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            03 // CASE STUDIES
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter">
            SELECTED PROJECTS
          </h2>
        </div>
        <div className="text-sm font-mono-code text-zinc-400 mt-4 md:mt-0">
          <span>SPECIFICATIONS & ARCHITECTURE</span>
        </div>
      </div>

      {/* Editorial Case Study List */}
      <div className="flex flex-col space-y-20">
        {projectsData.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-zinc-950/70 border border-zinc-800/90 rounded-2xl p-6 md:p-12 group hover:border-zinc-600 transition-colors duration-500 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Case Metadata & Description */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest">
                      PROJECT {project.number}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span className="font-mono-code text-xs text-zinc-400 uppercase tracking-widest">
                      {project.year}
                    </span>
                    <span className="text-zinc-700">•</span>
                    <span
                      className={`font-mono-code text-xs tracking-widest uppercase px-2.5 py-0.5 rounded ${
                        project.status === "In Progress"
                          ? "bg-amber-950/60 text-amber-300 border border-amber-800/60"
                          : "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl md:text-4xl text-white tracking-tight mb-2 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-mono-code text-zinc-400 uppercase tracking-wider mb-6">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-base text-zinc-300 font-normal leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack & Action Links */}
                <div>
                  <div className="mb-6">
                    <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 block mb-2">
                      TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono-code uppercase tracking-wider text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 pt-4 border-t border-zinc-800/80">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-mono-code uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
                    >
                      <GithubIcon size={16} />
                      <span>REPOSITORY</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-xs font-mono-code uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Case Screenshot / Visual Preview */}
              <div className="lg:col-span-6 overflow-hidden rounded-xl border border-zinc-800/80 relative aspect-[16/10] bg-zinc-900 group">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-zinc-700/60 font-mono-code text-[10px] text-zinc-400 uppercase tracking-widest">
                  EDITORIAL PREVIEW
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
