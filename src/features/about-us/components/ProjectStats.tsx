import React from 'react';
import { ProjectStatsData } from '../types';

interface ProjectStatsProps {
  data: ProjectStatsData;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ data }) => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto py-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 uppercase tracking-tight">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm font-body text-slate-600 font-normal max-w-xl mx-auto">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {data.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-white text-center flex flex-col justify-center items-center space-y-3 hover:border-blue-500 hover:shadow-xl transition-all duration-300 shadow-xs"
          >
            <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-blue-600">
              {stat.value}
            </div>
            <div className="text-sm sm:text-base font-heading font-bold text-slate-900">
              {stat.label}
            </div>
            <div className="text-xs font-body text-slate-600 font-normal leading-relaxed max-w-[220px]">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
