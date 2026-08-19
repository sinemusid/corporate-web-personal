'use client';

import React, { useState } from 'react';
import { PortfolioData, PortfolioItemData } from '../types';
import { PortfolioCard } from './portfolio/PortfolioCard';
import { PortfolioDetailModal } from './portfolio/PortfolioDetailModal';

interface PortfolioGridProps {
  data: PortfolioData;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);

  if (!data?.items || data.items.length === 0) {
    return null;
  }

  const handleOpenModal = (item: PortfolioItemData) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 font-sans select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-1200px mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center justify-center space-y-3 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight font-heading leading-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-slate-600 font-normal max-w-2xl text-center leading-relaxed">
            {data.subheading}
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={() => handleOpenModal(item)} />
          ))}
        </div>
      </div>

      {/* Detail Modal Component */}
      <PortfolioDetailModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={handleCloseModal}
      />
    </section>
  );
};
