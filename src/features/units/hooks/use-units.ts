'use client';

import { useState, useEffect } from 'react';
import { BusinessUnit } from '../types';
import { fetchUnits } from '../api';

export function useUnits() {
  const [units, setUnits] = useState<BusinessUnit[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchUnits();
        setUnits(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { units, isLoading };
}
