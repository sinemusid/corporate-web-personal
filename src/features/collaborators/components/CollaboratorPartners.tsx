'use client';

import React from 'react';
import { CollaboratorPartnersData } from '../types';

interface CollaboratorPartnersProps {
  data: CollaboratorPartnersData;
}

export const CollaboratorPartners: React.FC<CollaboratorPartnersProps> = ({ data }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-bg-elevated/40 p-6 sm:p-10 md:p-14 max-w-6xl mx-auto my-12 backdrop-blur-xl flex flex-col items-center justify-center text-center">
      {/* Background Glow */}
      <div 
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-subtle/15 rounded-full blur-3xl opacity-60" 
        aria-hidden="true" 
      />

      {/* Header section (Centered) */}
      <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center z-10 mb-10">
        <span className="text-[11px] sm:text-xs uppercase font-mono font-semibold text-content-primary tracking-widest px-4 py-1.5 bg-accent-subtle/30 rounded-full inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-content-primary animate-pulse" />
          Sinemus Network
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-content-primary uppercase tracking-tight leading-tight">
          {data.heading}
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed max-w-xl mx-auto">
          {data.subheading}
        </p>
      </div>

      {/* Grid Partner Cards - Elegant cards with subtle borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full z-10">
        {data.partners.map((partner) => (
          <div
            key={partner.id}
            className="group relative p-6 rounded-2xl bg-bg-primary/50 border border-borderToken-subtle/50 hover:border-content-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-content-primary/5 hover:-translate-y-1.5 text-center flex flex-col items-center justify-between space-y-4 backdrop-blur-md"
          >
            <div className="space-y-2 w-full flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-content-secondary uppercase tracking-widest px-2.5 py-1 rounded-md bg-bg-elevated/80 border border-borderToken-subtle/40 group-hover:text-content-primary transition-colors">
                {partner.category}
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-content-primary pt-1 transition-colors">
                {partner.name}
              </h3>
            </div>
            <p className="text-xs font-body text-content-secondary font-normal leading-relaxed group-hover:text-content-primary/90 transition-colors">
              {partner.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
