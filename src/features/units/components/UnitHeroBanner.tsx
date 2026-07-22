import React from 'react';
import { BusinessUnit } from '../types';

interface UnitHeroBannerProps {
  unit: BusinessUnit;
}

export const UnitHeroBanner: React.FC<UnitHeroBannerProps> = ({ unit }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-red-950/40 border border-zinc-800 p-8 md:p-12 space-y-6">
      <div className="inline-block px-3 py-1 bg-red-600/20 text-red-500 rounded-full text-xs font-semibold uppercase tracking-widest border border-red-600/30">
        Unit Pilar: {unit.slug}
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{unit.title}</h1>
      <p className="text-lg text-red-400 font-medium">{unit.subtitle}</p>
      <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">{unit.description}</p>

      {unit.stats && unit.stats.length > 0 && (
        <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {unit.stats.map((st, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-white">{st.value}</div>
              <div className="text-xs text-zinc-400">{st.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
