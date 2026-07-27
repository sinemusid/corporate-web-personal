import React from 'react';
import { BusinessUnit } from '../types';
import { MOCK_UNITS } from '../mock/units-mock';

interface UnitHeroBannerProps {
  unit?: BusinessUnit;
  badgePrefix?: string;
}

export const UnitHeroBanner: React.FC<UnitHeroBannerProps> = ({
  unit = MOCK_UNITS[0],
  badgePrefix = 'Unit Pilar:',
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-bg-elevated border border-borderToken-subtle p-8 md:p-12 space-y-6">
      <div className="inline-block px-3 py-1 bg-accent-subtle text-content-primary rounded-full text-xs font-mono font-semibold uppercase tracking-widest border border-borderToken-subtle">
        {badgePrefix} {unit.slug}
      </div>
      <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-content-primary tracking-tight">{unit.title}</h1>
      <p className="text-lg font-body text-content-secondary font-medium">{unit.subtitle}</p>
      <p className="text-sm font-body text-content-tertiary max-w-2xl leading-relaxed">{unit.description}</p>

      {unit.stats && unit.stats.length > 0 && (
        <div className="pt-6 border-t border-borderToken-subtle grid grid-cols-2 md:grid-cols-4 gap-6">
          {unit.stats.map((st: { label: string; value: string }, i: number) => (
            <div key={i}>
              <div className="text-2xl font-mono font-bold text-content-primary">{st.value}</div>
              <div className="text-xs font-body text-content-secondary">{st.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
