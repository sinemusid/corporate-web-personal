'use client';

import { useState, useEffect } from 'react';
import { HomeHeroData, HomeWhoWeAreData, HomeUnitPreviewData } from '../types';
import { fetchHomeHero, fetchHomeWhoWeAre, fetchHomeUnitPreview } from '../api';

export function useHome() {
  const [hero, setHero] = useState<HomeHeroData | null>(null);
  const [whoWeAre, setWhoWeAre] = useState<HomeWhoWeAreData | null>(null);
  const [unitPreview, setUnitPreview] = useState<HomeUnitPreviewData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [heroData, whoWeAreData, unitData] = await Promise.all([
          fetchHomeHero(),
          fetchHomeWhoWeAre(),
          fetchHomeUnitPreview(),
        ]);
        setHero(heroData);
        setWhoWeAre(whoWeAreData);
        setUnitPreview(unitData);
      } catch (err) {
        console.error('Failed loading home data:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return {
    hero,
    whoWeAre,
    unitPreview,
    isLoading,
  };
}
