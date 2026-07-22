'use client';

import { useState, useEffect } from 'react';
import { MilestoneItem } from '../types';
import { fetchMilestones } from '../api';

export function useMilestones() {
  const [milestones, setMilestones] = useState<MilestoneItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchMilestones();
        setMilestones(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { milestones, isLoading };
}
