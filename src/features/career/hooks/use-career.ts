'use client';

import { useState, useEffect } from 'react';
import { CareerOpportunity } from '../types';
import { fetchCareers } from '../api';

export function useCareer() {
  const [careers, setCareers] = useState<CareerOpportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchCareers();
        setCareers(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { careers, isLoading };
}
