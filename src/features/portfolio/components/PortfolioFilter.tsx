import React from 'react';
import { PortfolioCategory } from '../types';

interface PortfolioFilterProps {
  currentCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
}

const CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Film', value: 'Film' },
  { label: 'Series', value: 'Series' },
  { label: 'Documentary', value: 'Documentary' },
];

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  currentCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-1 mb-6">
      <div className="bg-zinc-900/80 p-1 rounded-lg border border-zinc-800 flex items-center space-x-1">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
              currentCategory === cat.value
                ? 'bg-zinc-700 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

