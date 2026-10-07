import React from "react";
import { personalData } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto text-zinc-400 font-mono-code text-xs">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-800/60">
        <div>
          <span className="font-display font-extrabold text-white text-xl md:text-2xl tracking-tighter block mb-1">
            {personalData.displayName}
          </span>
          <span className="text-[10px] tracking-widest uppercase text-zinc-500">
            {personalData.role}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 uppercase tracking-widest">
          <span>{personalData.location}</span>
          <span>•</span>
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a href={personalData.mailto} className="hover:text-white transition-colors">
            EMAIL
          </a>
        </div>
      </div>

      <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
        <span>© 2026 MUHAMMAD ZARIYAN JAVAID</span>
        <span>DESIGNED & ENGINEERED EDITORIALLY</span>
      </div>
    </footer>
  );
}
