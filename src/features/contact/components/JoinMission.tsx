'use client';

import React from 'react';
import { JoinMissionData } from '../types';

interface JoinMissionProps {
  data: JoinMissionData;
}

export const JoinMission: React.FC<JoinMissionProps> = ({ data }) => {
  return (
    <div className="rounded-3xl bg-bg-elevated border border-borderToken-subtle p-8 md:p-14 space-y-8 max-w-5xl mx-auto backdrop-blur-md">
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase font-mono font-semibold text-content-primary tracking-widest px-3 py-1 bg-accent-subtle border border-borderToken-subtle rounded-full inline-block">
          {data.subheading}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-content-primary uppercase tracking-tight">
          {data.heading}
        </h2>
        <p className="text-sm sm:text-base font-body text-content-secondary font-light leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-borderToken-subtle">
        {data.benefits.map((benefit, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-bg-primary border border-borderToken-subtle space-y-2">
            <span className="text-content-primary font-mono font-bold text-base">0{idx + 1}.</span>
            <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>

      <div>
        <a
          href={data.ctaHref}
          className="inline-flex items-center px-8 py-4 rounded-xl bg-accent-solid text-content-inverse font-body font-bold text-sm hover:bg-accent-solid-hover transition-colors shadow-sm"
        >
          {data.ctaText}
        </a>
      </div>
    </div>
  );
};
