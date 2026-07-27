'use client';

import React from 'react';
import { HomeHero, HomeSkeleton, useHome } from '@/features/home';

export const HeroSectionWidget: React.FC = () => {
  const { hero, isLoading } = useHome();

  if (isLoading || !hero) {
    return (
      <section id="hero" className="w-full">
        <HomeSkeleton />
      </section>
    );
  }

  return (
    <section id="hero" className="w-full">
      <HomeHero data={hero} />
    </section>
  );
};
