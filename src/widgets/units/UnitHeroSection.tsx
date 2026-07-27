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
      <span className="text-xs font-mono text-content-primary uppercase tracking-widest bg-accent-subtle px-3 py-1 rounded border border-borderToken-subtle">
        {badge}
      </span>
      <h1 className="text-4xl font-heading font-extrabold text-content-primary">{title}</h1>
      <p className="text-content-secondary font-body text-sm max-w-xl mx-auto">{subtitle}</p>
    </section>
  );
};
