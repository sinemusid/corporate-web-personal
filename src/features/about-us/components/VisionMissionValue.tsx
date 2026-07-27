'use client';

import React from 'react';
import { VisionMissionValueData } from '../types';

interface VisionMissionValueProps {
  data: VisionMissionValueData;
}

export const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ data }) => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="p-8 rounded-2xl border border-borderToken-subtle bg-bg-elevated space-y-4 backdrop-blur-sm">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold text-content-primary bg-accent-subtle border border-borderToken-subtle">
            {data.visionTitle}
          </div>
          <p className="text-base sm:text-lg font-body text-content-secondary font-medium leading-relaxed">
            {data.visionText}
          </p>
        </div>

        {/* Mission */}
        <div className="p-8 rounded-2xl border border-borderToken-subtle bg-bg-elevated space-y-4 backdrop-blur-sm">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold text-content-primary bg-accent-subtle border border-borderToken-subtle">
            {data.missionTitle}
          </div>
          <ul className="space-y-3">
            {data.missions.map((m, idx) => (
              <li key={idx} className="flex items-start text-xs sm:text-sm font-body text-content-secondary">
                <span className="text-content-primary mr-2 font-bold">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Values */}
      <div className="space-y-6 pt-6 border-t border-borderToken-subtle">
        <h3 className="text-xl font-heading font-bold text-center text-content-primary">{data.valuesTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-borderToken-subtle bg-bg-elevated space-y-2">
              <h4 className="text-sm font-heading font-bold text-content-primary">{val.title}</h4>
              <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
