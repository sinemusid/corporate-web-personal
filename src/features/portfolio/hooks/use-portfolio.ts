'use client';

import { useState, useEffect } from 'react';
import { PortfolioItem } from '../types';
import { fetchPortfolio } from '../api';

export function usePortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchPortfolio();
        setItems(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { items, isLoading };
}
