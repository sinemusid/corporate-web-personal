'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { UnitGrid, useUnits, UnitSkeleton } from '@/features/units';

export default function UnitsHubPage() {
  const { units, isLoading } = useUnits();

  return (
    <div>
      <section className="py-20 text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded border border-red-900/50">
          Sinemus Business Units
        </span>
        <h1 className="text-4xl font-extrabold text-white">Hub Unit Bisnis Sinemus</h1>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">
          Pilih salah satu dari 4 pilar unit di bawah ini untuk melihat fokus layanan, statistik, dan kapabilitas masing-masing.
        </p>
      </section>

      <SectionWrapper darkBg>
        {isLoading ? <UnitSkeleton /> : <UnitGrid units={units} />}
      </SectionWrapper>
    </div>
  );
}
