import React from "react";
import { skillsData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-zinc-800/80">
        <div>
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            05 // TECHNICAL CAPABILITIES
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter">
            SKILLS & STACK
          </h2>
        </div>
        <div className="text-sm font-mono-code text-zinc-400 mt-4 md:mt-0">
          <span>COMPACT EDITORIAL GRID</span>
        </div>
      </div>

      {/* Skills Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((group, idx) => (
          <div
            key={idx}
            className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800/60">
                <span className="text-xs font-mono-code uppercase tracking-widest text-zinc-300 font-semibold">
                  {group.category}
                </span>
                <span className="text-[10px] font-mono-code text-zinc-600">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono-code tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md hover:border-zinc-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800/40 text-[10px] font-mono-code text-zinc-500 uppercase tracking-widest">
              VERIFIED CAPABILITY
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
