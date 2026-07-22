import React from 'react';
import { PortfolioCard } from './PortfolioCard';
import { PortfolioItem } from '../types';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-500 text-sm">
        Belum ada karya dalam kategori ini.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
};
