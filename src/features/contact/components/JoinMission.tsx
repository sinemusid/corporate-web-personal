'use client';

import React from 'react';
import { JoinMissionData } from '../types';

interface JoinMissionProps {
  data: JoinMissionData;
}

export const JoinMission: React.FC<JoinMissionProps> = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-bg-elevated/80 border border-borderToken-subtle/80 p-6 sm:p-8 md:p-10 w-full max-w-5xl mx-auto backdrop-blur-xl text-center shadow-2xl flex flex-col items-center">
      {/* Background ambient glow effect */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-subtle/20 rounded-full blur-3xl opacity-50" 
        aria-hidden="true" 
      />

      {/* Header section (Centered) */}
      <header className="space-y-3 max-w-2xl mx-auto flex flex-col items-center z-10">
        <span className="text-[10px] sm:text-xs uppercase font-mono font-semibold text-content-primary tracking-widest px-3.5 py-1 bg-accent-subtle/40 border border-borderToken-subtle/60 rounded-full inline-flex items-center gap-2 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-content-primary animate-pulse" />
          {data.subheading}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-content-primary uppercase tracking-tight leading-tight">
          {data.heading}
        </h1>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light leading-relaxed max-w-xl mx-auto">
          {data.description}
        </p>
      </header>

      {/* Divider */}
      <div className="w-full max-w-3xl my-6 sm:my-8 border-t border-borderToken-subtle/60 z-10" />

      {/* Benefits grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full z-10">
        {data.benefits.map((benefit, idx) => (
          <div 
            key={idx} 
            className="group relative p-4 sm:p-5 rounded-2xl bg-bg-primary/60 border border-borderToken-subtle/80 hover:border-content-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center flex flex-col items-center justify-start space-y-2"
          >
            <span className="text-[11px] font-mono font-semibold text-content-secondary group-hover:text-content-primary transition-colors duration-200 px-2 py-0.5 rounded-md bg-bg-elevated border border-borderToken-subtle/50">
              0{idx + 1}
            </span>
            <p className="text-xs font-body text-content-secondary font-normal leading-relaxed group-hover:text-content-primary transition-colors duration-200">
              {benefit}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6 sm:mt-8 z-10">
        <a
          href={data.ctaHref}
          className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-content-primary text-bg-primary font-body font-bold text-xs sm:text-sm border border-borderToken-subtle/40 hover:border-content-primary/80 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl group/btn"
        >
          <span>{data.ctaText}</span>
          <svg 
            className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
