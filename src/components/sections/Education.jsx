import React from "react";
import { educationData } from "../../data/portfolio";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-8 md:p-12">
        {/* Left Column: Heading */}
        <div className="lg:col-span-4">
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            07 // ACADEMICS
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter">
            EDUCATION
          </h2>
        </div>

        {/* Right Column: Degree Details */}
        <div className="lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t lg:border-t-0 lg:border-l border-zinc-800/80 pt-6 lg:pt-0 lg:pl-12">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code uppercase tracking-widest text-zinc-400 mb-2">
              <GraduationCap size={16} className="text-zinc-300" />
              <span>UNDERGRADUATE DEGREE</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-2">
              {educationData.degree}
            </h3>
            <p className="text-lg font-display text-zinc-300 font-medium mb-4">
              {educationData.institution}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-zinc-400 uppercase">
              <div className="flex items-center space-x-1.5">
                <Calendar size={14} />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <MapPin size={14} />
                <span>{educationData.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono-code text-xs text-zinc-300 uppercase tracking-widest self-start md:self-auto">
            {educationData.expectedGraduation}
          </div>
        </div>
      </div>
    </section>
  );
}
