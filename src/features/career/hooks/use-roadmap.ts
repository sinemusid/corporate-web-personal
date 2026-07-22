'use client';

import { useState, useEffect } from 'react';
import { RoadmapMilestone } from '../types';
import { fetchRoadmap } from '../api';

export function useRoadmap() {
  const [roadmap, setRoadmap] = useState<RoadmapMilestone[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchRoadmap();
        setRoadmap(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { roadmap, isLoading };
}
