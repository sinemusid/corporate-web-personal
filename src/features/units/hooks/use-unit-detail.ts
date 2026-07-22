'use client';

import { useState, useEffect } from 'react';
import { BusinessUnit } from '../types';
import { fetchUnitBySlug } from '../api';

export function useUnitDetail(slug: string) {
  const [unit, setUnit] = useState<BusinessUnit | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchUnitBySlug(slug);
        setUnit(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [slug]);

  return { unit, isLoading };
}
