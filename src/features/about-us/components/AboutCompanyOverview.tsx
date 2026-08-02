'use client';

import React from 'react';
import { AboutCompanyOverviewData } from '../types';

interface AboutCompanyOverviewProps {
  data: AboutCompanyOverviewData;
}

export const AboutCompanyOverview: React.FC<AboutCompanyOverviewProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10">
      {/* Main Title Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider font-heading leading-tight">
        {data.subheading}
      </h1>
    </div>
  );
};

