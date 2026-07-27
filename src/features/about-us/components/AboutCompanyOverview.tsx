'use client';

import React from 'react';
import { AboutCompanyOverviewData } from '../types';

interface AboutCompanyOverviewProps {
  data: AboutCompanyOverviewData;
}

export const AboutCompanyOverview: React.FC<AboutCompanyOverviewProps> = ({ data }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto text-center">
      <div className="space-y-2">
        <span className="text-xs uppercase font-mono tracking-widest text-content-secondary font-bold">
          {data.title}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-content-primary uppercase tracking-tight">
          {data.subheading}
        </h2>
      </div>
      <p className="text-sm sm:text-base md:text-lg font-body text-content-secondary font-light leading-relaxed">
        {data.fullAbout}
      </p>
    </div>
  );
};
