'use client';

import React from 'react';
import { ProjectStatsData } from '../types';

interface ProjectStatsProps {
  data: ProjectStatsData;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ data }) => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm font-body text-gray-400 font-light max-w-xl mx-auto">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {data.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl border border-white/20 bg-transparent text-center flex flex-col justify-center items-center space-y-2 hover:border-white/40 transition-colors"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-black text-white">
              {stat.value}
            </div>
            <div className="text-sm sm:text-base font-heading font-bold text-white">
              {stat.label}
            </div>
            <div className="text-xs font-body text-gray-400 font-light leading-relaxed max-w-[220px]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
