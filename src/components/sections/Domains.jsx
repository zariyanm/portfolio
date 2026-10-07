import React, { useState } from "react";
import { domainData } from "../../data/portfolio";
import { Cpu, Shield, Workflow, Code, Brain, Target, Compass } from "lucide-react";

export default function Domains() {
  const [activeId, setActiveId] = useState("everyone");

  const activeDomain = domainData.find((d) => d.id === activeId) || domainData[0];

  const getVisualCueIcon = (cue) => {
    switch (cue) {
      case "ai":
        return <Brain className="text-purple-400 w-6 h-6 stroke-[1.5]" />;
      case "automation":
        return <Workflow className="text-blue-400 w-6 h-6 stroke-[1.5]" />;
      case "cybersecurity":
        return <Shield className="text-emerald-400 w-6 h-6 stroke-[1.5]" />;
      case "software":
        return <Code className="text-pink-400 w-6 h-6 stroke-[1.5]" />;
      case "aiml":
        return <Cpu className="text-indigo-400 w-6 h-6 stroke-[1.5]" />;
      case "problem":
        return <Target className="text-amber-400 w-6 h-6 stroke-[1.5]" />;
      default:
        return <Compass className="text-zinc-300 w-6 h-6 stroke-[1.5]" />;
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60 transition-colors duration-700 relative overflow-hidden">
      {/* Background Tone Shift Accent Overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-20 blur-3xl"
        style={{ backgroundColor: activeDomain.accentColor }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Domain Trigger List */}
        <div className="lg:col-span-6 flex flex-col space-y-3">
          <div className="mb-4">
            <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-500">
              01 // INTERACTIVE PERSPECTIVES
            </span>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2 md:gap-3">
            {domainData.map((domain) => {
              const isActive = domain.id === activeId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveId(domain.id)}
                  className={`group text-left transition-all duration-300 py-2.5 px-4 rounded-lg flex items-center justify-between border ${
                    isActive
                      ? "bg-zinc-900/90 border-zinc-500 text-white shadow-lg shadow-black/40 scale-[1.01]"
                      : "bg-transparent border-zinc-800/40 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                  }`}
                >
                  <span className="font-display font-medium text-lg md:text-2xl tracking-tight">
                    {domain.label}
                  </span>
                  <span
                    className={`text-xs font-mono-code transition-all duration-300 ${
                      isActive
                        ? "text-zinc-300 opacity-100"
                        : "text-zinc-600 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Editorial Content & Visual Cue */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[320px] bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-8 md:p-12 relative overflow-hidden backdrop-blur-md">
          {/* Top Cue Badge */}
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-zinc-900 border border-zinc-700/60">
                {getVisualCueIcon(activeDomain.visualCue)}
              </div>
              <span className="text-xs font-mono-code tracking-widest uppercase text-zinc-400">
                FIELD // {activeDomain.label}
              </span>
            </div>
            <span className="text-xs font-mono-code text-zinc-500 uppercase">
              LIVE SIGNAL
            </span>
          </div>

          {/* Dynamic Content Text with Key-based Crossfade Animation */}
          <div className="my-8">
            <p
              key={activeDomain.id}
              className="domain-headline font-display font-normal text-zinc-100 transition-all duration-500 animate-fadeIn"
            >
              "{activeDomain.content}"
            </p>
          </div>

          {/* Bottom Interactive Cue Graphic */}
          <div className="pt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono-code text-zinc-500">
            <span>POSITION: ARCHITECT & BUILDER</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ACTIVE PERSPECTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
