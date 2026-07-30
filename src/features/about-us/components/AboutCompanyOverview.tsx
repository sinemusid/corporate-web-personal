'use client';

import React from 'react';
import { AboutCompanyOverviewData } from '../types';

interface AboutCompanyOverviewProps {
  data: AboutCompanyOverviewData;
}

export const AboutCompanyOverview: React.FC<AboutCompanyOverviewProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10 pt-6">
      {/* Pill Badge */}
      <div className="inline-block mb-4">
        <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-200 border border-gray-600/80 rounded-full px-7 py-1.5 backdrop-blur-md bg-transparent">
          {data.title}
        </span>
      </div>

      {/* Main Title Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider font-heading leading-tight">
        {data.subheading}
      </h1>
    </div>
  );
};

