import React from 'react';
import { FadeIn } from '@/components/motion';
import { AboutCompanyOverviewData } from '../types';

interface AboutCompanyOverviewProps {
  data: AboutCompanyOverviewData;
}

export const AboutCompanyOverview: React.FC<AboutCompanyOverviewProps> = ({ data }) => {
  return (
    <FadeIn direction="up" className="max-w-5xl mx-auto text-center relative z-10 space-y-3 pt-6 sm:pt-10">
      <p className="text-xs sm:text-sm md:text-base font-mono font-bold text-blue-600 uppercase tracking-widest">
        {data.heading || 'Tentang Kami'}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 uppercase tracking-tight font-heading leading-tight">
        {data.subheading || 'SINEAS MUSLIM INDONESIA'}
      </h1>
    </FadeIn>
  );
};
