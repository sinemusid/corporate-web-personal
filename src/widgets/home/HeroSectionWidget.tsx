import React from 'react';
import { HomeHero, fetchHomeHero } from '@/features/home';

export const HeroSectionWidget: React.FC = async () => {
  const hero = await fetchHomeHero();

  return (
    <section id="hero" className="w-full">
      <HomeHero data={hero} />
    </section>
  );
};
