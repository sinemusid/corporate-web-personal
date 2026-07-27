'use client';

import React from 'react';
import { ProjectStatsData } from '../types';

interface ProjectStatsProps {
  data: ProjectStatsData;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-black text-content-primary uppercase tracking-tight">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-xl mx-auto">{data.subheading}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {data.stats.map((stat, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-borderToken-subtle bg-bg-elevated text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-mono font-black text-content-primary">{stat.value}</div>
            <div className="text-xs sm:text-sm font-heading font-semibold text-content-primary">{stat.label}</div>
            <div className="text-[11px] font-body text-content-secondary font-light">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
