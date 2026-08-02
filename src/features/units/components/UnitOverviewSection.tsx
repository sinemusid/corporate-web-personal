import React from 'react';

interface UnitOverviewSectionProps {
  about: string;
  tagline: string;
}

export const UnitOverviewSection: React.FC<UnitOverviewSectionProps> = ({ about, tagline }) => {
  return (
    <section className="bg-bg-elevated border border-borderToken-subtle rounded-2xl p-8 md:p-10 space-y-4 transition-all">
      <div className="inline-block px-3 py-1 bg-accent-subtle border border-borderToken-subtle rounded-full text-xs font-mono font-medium text-content-primary">
        SEKILAS UNIT
      </div>
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-content-primary tracking-tight">
        {tagline}
      </h2>
      <p className="text-base text-content-secondary leading-relaxed font-body max-w-4xl">
        {about}
      </p>
    </section>
  );
};
