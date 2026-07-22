'use client';

import { useState, useMemo } from 'react';
import { PortfolioItem, PortfolioCategory } from '../types';

export function usePortfolioFilter(items: PortfolioItem[]) {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredItems,
  };
}
