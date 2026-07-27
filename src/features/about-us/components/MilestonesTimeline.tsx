'use client';

import React from 'react';
import { MilestonesTimelineData } from '../types';

interface MilestonesTimelineProps {
  data: MilestonesTimelineData;
}

export const MilestonesTimeline: React.FC<MilestonesTimelineProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center space-y-2">
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-content-primary uppercase tracking-tight">
          {data.heading}
        </h3>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-lg mx-auto">{data.subheading}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.milestones.map((item) => (
          <div key={item.id} className="p-6 rounded-xl border border-borderToken-subtle bg-bg-elevated space-y-2">
            <span className="text-2xl font-mono font-black text-content-primary">{item.year}</span>
            <h4 className="text-lg font-heading font-bold text-content-primary">{item.title}</h4>
            <p className="text-xs font-body text-content-secondary leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
