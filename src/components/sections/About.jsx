import React from "react";
import { aboutData, personalData } from "../../data/portfolio";
import { UserCheck, MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Header Tag */}
        <div className="lg:col-span-4">
          <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400 block mb-2">
            04 // BACKGROUND
          </span>
          <h2 className="section-headline font-display font-bold text-white tracking-tighter mb-6">
            {aboutData.heading}
          </h2>

          <div className="flex flex-col space-y-4 pt-4 border-t border-zinc-800/80 font-mono-code text-xs text-zinc-400">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-zinc-500" />
              <span>LOCATION: {personalData.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap size={14} className="text-zinc-500" />
              <span>DEGREE: B.S. Software Engineering (2023 - 2027)</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserCheck size={14} className="text-zinc-500" />
              <span>HANDLE: {personalData.handle}</span>
            </div>
          </div>
        </div>

        {/* Right Content Statement */}
        <div className="lg:col-span-8 flex flex-col space-y-8">
          <p className="text-2xl md:text-4xl font-display font-medium text-zinc-100 leading-snug tracking-tight">
            "{aboutData.mainStatement}"
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800/80">
            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 block mb-2">
                SYSTEM INTEGRATION
              </span>
              <p className="text-base text-zinc-300 font-normal leading-relaxed">
                {aboutData.supportingContent}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono-code uppercase tracking-widest text-zinc-500 block mb-2">
                SCOPE OF WORK
              </span>
              <p className="text-base text-zinc-400 font-normal leading-relaxed">
                {aboutData.additionalContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
