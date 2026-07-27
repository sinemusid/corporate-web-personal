'use client';

import React from 'react';
import { UnitHeroBanner, BusinessUnit } from '@/features/units';

interface UnitHeroSectionProps {
  unit?: BusinessUnit;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const UnitHeroSection: React.FC<UnitHeroSectionProps> = ({
  unit,
  title = 'Hub Unit Bisnis Sinemus',
  subtitle = 'Pilih salah satu dari 4 pilar unit di bawah ini untuk melihat fokus layanan, statistik, dan kapabilitas masing-masing.',
  badge = 'Sinemus Business Units',
}) => {
  if (unit) {
    return <UnitHeroBanner unit={unit} />;
  }

  return (
    <section className="py-20 text-center space-y-4 max-w-4xl mx-auto px-4">
      <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded border border-red-900/50">
        {badge}
      </span>
      <h1 className="text-4xl font-extrabold text-white">{title}</h1>
      <p className="text-zinc-400 text-sm max-w-xl mx-auto">{subtitle}</p>
    </section>
  );
};
