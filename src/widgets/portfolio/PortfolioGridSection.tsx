'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import {
  PortfolioGrid,
  PortfolioFilter,
  PortfolioSkeleton,
  usePortfolio,
  usePortfolioFilter,
} from '@/features/portfolio';

export const PortfolioGridSection: React.FC = () => {
  const { items, isLoading } = usePortfolio();
  const { selectedCategory, setSelectedCategory, filteredItems } = usePortfolioFilter(items);

  if (isLoading) {
    return (
      <SectionWrapper id="portfolio-skeleton">
        <PortfolioSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="portfolio">
      <div className="space-y-6 my-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Karya Kami</h2>
          <PortfolioFilter
            currentCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        <PortfolioGrid items={filteredItems} />
      </div>
    </SectionWrapper>
  );
};
