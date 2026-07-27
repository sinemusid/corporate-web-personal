'use client';

import React from 'react';
import Link from 'next/link';
import { HomeUnitPreviewData } from '../types';

interface HomeUnitPreviewProps {
  data: HomeUnitPreviewData;
  showTitleHeader?: boolean;
}

export const HomeUnitPreview: React.FC<HomeUnitPreviewProps> = ({ data, showTitleHeader = true }) => {
  return (
    <div className="space-y-12">
      {showTitleHeader && (
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-wider text-content-primary uppercase">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed">
            {data.subheading}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.units.map((unit) => (
          <div
            key={unit.id}
            className="group relative rounded-2xl bg-bg-elevated border border-borderToken-subtle p-6 flex flex-col justify-between hover:border-borderToken-strong transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-content-secondary font-semibold px-2.5 py-1 rounded-full bg-accent-subtle border border-borderToken-subtle inline-block">
                {unit.slug}
              </span>
              <h3 className="text-lg font-heading font-bold text-content-primary group-hover:text-content-primary transition-colors">
                {unit.title}
              </h3>
              <p className="text-xs font-body text-content-secondary font-light leading-relaxed line-clamp-3">
                {unit.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-borderToken-subtle flex items-center justify-between">
              <Link
                href={`/units/${unit.slug}`}
                className="text-xs font-body font-semibold text-content-secondary hover:text-content-primary inline-flex items-center space-x-1"
              >
                <span>Pelajari Detail</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
