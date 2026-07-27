'use client';

import React from 'react';
import { CareerRoadmapData } from '../types';

interface CareerRoadmapProps {
  data: CareerRoadmapData;
}

export const CareerRoadmap: React.FC<CareerRoadmapProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-xl mx-auto">{data.subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.steps.map((st, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-bg-elevated border border-borderToken-subtle space-y-3 relative overflow-hidden">
            <div className="text-3xl font-black font-mono text-content-muted/40">{st.step}</div>
            <h4 className="text-base font-heading font-bold text-content-primary">{st.title}</h4>
            <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{st.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
