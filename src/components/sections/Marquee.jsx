import React from "react";
import { marqueeData } from "../../data/portfolio";

export default function Marquee() {
  const marqueeList = [...marqueeData.items, ...marqueeData.items, ...marqueeData.items];

  return (
    <section className="py-16 bg-zinc-950 border-b border-zinc-800/60 overflow-hidden select-none">
      {/* Top Positioning Statement */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <p className="text-xs uppercase font-mono-code tracking-widest text-zinc-400">
          POSITIONING STATEMENT //{" "}
          <span className="text-zinc-100 font-semibold">{marqueeData.sentence}</span>
        </p>
      </div>

      {/* Infinite Horizontal Smooth Marquee Track */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-3 bg-zinc-900/30 border-y border-zinc-800/40">
        <div className="animate-marquee-slow flex items-center space-x-8">
          {marqueeList.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-display text-2xl md:text-4xl font-semibold tracking-tight text-zinc-300 hover:text-white transition-colors uppercase">
                {item}
              </span>
              <span className="text-zinc-600 text-lg md:text-2xl font-mono-code">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
