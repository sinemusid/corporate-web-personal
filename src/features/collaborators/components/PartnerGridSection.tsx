'use client';

import React from 'react';
import { PartnerItem } from '../types';
import { PartnerCard } from './PartnerCard';

interface PartnerGridSectionProps {
  title: string;
  subtitle?: string;
  items: PartnerItem[];
  columnsDesktop?: 3 | 4 | 5;
}

export const PartnerGridSection: React.FC<PartnerGridSectionProps> = ({
  title,
  subtitle,
  items,
  columnsDesktop = 5,
}) => {
  if (!items || items.length === 0) return null;

  const gridColsClass =
    columnsDesktop === 5
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
      : columnsDesktop === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="space-y-6 w-full z-10 pt-4">
      {/* Section Header (Centered) */}
      <div className="text-center flex flex-col items-center justify-center space-y-1.5 pb-2 max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 uppercase tracking-tight text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm font-body text-slate-600 font-normal text-center">
            {subtitle}
          </p>
        )}
      </div>

      {/* Partners / Vendors Grid (CSS Grid: Exactly 5 items per inline row on desktop) */}
      <div className={`grid ${gridColsClass} gap-4 sm:gap-5 w-full`}>
        {items.map((item) => (
          <PartnerCard key={item.id} partner={item} />
        ))}
      </div>
    </div>
  );
};



