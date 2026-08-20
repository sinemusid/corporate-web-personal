import React from 'react';
import { FadeIn, FadeInStagger, MotionCard, CounterNumber } from '@/components/motion';
import { ProjectStatsData } from '../types';

interface ProjectStatsProps {
  data: ProjectStatsData;
}

export const ProjectStats: React.FC<ProjectStatsProps> = ({ data }) => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto py-6">
      <FadeIn direction="up" className="text-center space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 uppercase tracking-tight">
          {data.heading}
        </h2>
        <p className="text-sm sm:text-base font-body text-slate-600 font-normal max-w-xl mx-auto leading-relaxed">
          {data.subheading}
        </p>
      </FadeIn>

      <FadeInStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {data.stats.map((stat, idx) => (
          <MotionCard
            key={idx}
            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 bg-white text-center flex flex-col justify-center items-center space-y-3 hover:border-blue-500 hover:shadow-xl transition-colors duration-200 group"
          >
            <div className="text-4xl sm:text-5xl font-mono font-extrabold text-slate-900 tracking-tight group-hover:scale-105 transition-transform duration-200">
              <CounterNumber value={stat.value} duration={1.6} />
            </div>
            <div className="text-base font-heading font-bold text-slate-900">
              {stat.label}
            </div>
            <div className="text-xs sm:text-sm font-body text-slate-600 font-normal leading-relaxed max-w-[220px]">
              {stat.description}
            </div>
          </MotionCard>
        ))}
      </FadeInStagger>
    </div>
  );
};
