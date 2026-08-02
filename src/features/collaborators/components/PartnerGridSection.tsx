'use client';

import React from 'react';
import { PartnerItem } from '../types';
import { PartnerCard } from './PartnerCard';

interface PartnerGridSectionProps {
  title: string;
  subtitle?: string;
  items: PartnerItem[];
  columnsDesktop?: 3 | 4;
}

export const PartnerGridSection: React.FC<PartnerGridSectionProps> = ({
  title,
  subtitle,
  items,
  columnsDesktop = 4,
}) => {
  if (!items || items.length === 0) return null;

  const gridColsClass =
    columnsDesktop === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  return (
    <div className="space-y-6 w-full z-10 pt-6">
      {/* Section Header */}
      <div className="text-left space-y-1 border-b border-borderToken-subtle/30 pb-4">
        <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-content-primary uppercase tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm font-body text-content-secondary font-light">
            {subtitle}
          </p>
        )}
      </div>

      {/* Partners / Vendors Grid */}
      <div className={`grid ${gridColsClass} gap-4 sm:gap-6 w-full`}>
        {items.map((item) => (
          <PartnerCard key={item.id} partner={item} />
        ))}
      </div>
    </div>
  );
};
