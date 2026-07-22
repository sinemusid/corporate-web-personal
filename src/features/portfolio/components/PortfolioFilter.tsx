import React from 'react';
import { PortfolioCategory } from '../types';

interface PortfolioFilterProps {
  currentCategory: PortfolioCategory;
  onSelectCategory: (category: PortfolioCategory) => void;
}

const CATEGORIES: { label: string; value: PortfolioCategory }[] = [
  { label: 'Semua Karya', value: 'all' },
  { label: 'Feature Film', value: 'feature-film' },
  { label: 'Dokumenter', value: 'documentary' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Film Pendek', value: 'short-film' },
];

export const PortfolioFilter: React.FC<PortfolioFilterProps> = ({
  currentCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelectCategory(cat.value)}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            currentCategory === cat.value
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
              : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};
