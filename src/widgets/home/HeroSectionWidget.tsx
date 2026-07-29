'use client';

import React from 'react';
import { HomeHero, HomeSkeleton, useHome } from '@/features/home';

export const HeroSectionWidget: React.FC = () => {
  const { hero, isLoading } = useHome();

  if (isLoading || !hero) {
    return (
      <section id="hero" className="w-full h-screen min-h-[500px] flex items-center justify-center">
        <HomeSkeleton />
      </section>
    );
  }

  return (
    <section id="hero" className="w-full h-screen min-h-[500px] flex items-center justify-center">
      <HomeHero data={hero} />
    </section>
  );
};
