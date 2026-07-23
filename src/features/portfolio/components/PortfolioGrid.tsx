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
    <div className="space-y-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button className="px-6 py-2 rounded-full border border-white/30 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all flex items-center space-x-1">
          <span>Lihat Semua Karya</span>
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

