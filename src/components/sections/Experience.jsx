import React from "react";
import { experienceData } from "../../data/portfolio";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-zinc-800/80">
        <div>
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            06 // CHRONOLOGY
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter">
            EXPERIENCE
          </h2>
        </div>
        <div className="text-sm font-mono-code text-zinc-400 mt-4 md:mt-0">
          <span>PRACTICAL & INDUSTRIAL ROLES</span>
        </div>
      </div>

      {/* Experience Timeline Stories */}
      <div className="flex flex-col space-y-12">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 bg-zinc-950/60 border border-zinc-800/80 rounded-xl hover:border-zinc-700 transition-colors"
          >
            {/* Left Column: Period & Company */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono-code uppercase tracking-widest text-zinc-400 block mb-2">
                  {exp.period}
                </span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight">
                  {exp.company}
                </h3>
              </div>
              <div className="mt-4 flex items-center space-x-2 text-xs font-mono-code text-zinc-500 uppercase">
                <Briefcase size={14} />
                <span>{exp.highlight}</span>
              </div>
            </div>

            {/* Right Column: Role Title & Description */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <h4 className="font-display font-semibold text-lg md:text-xl text-zinc-200 mb-3">
                {exp.role}
              </h4>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
