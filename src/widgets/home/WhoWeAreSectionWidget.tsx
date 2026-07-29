'use client';

import React from 'react';
import { HomeWhoWeAre, HomeSkeleton, useHome } from '@/features/home';

export const WhoWeAreSectionWidget: React.FC = () => {
  const { whoWeAre, isLoading } = useHome();

  if (isLoading || !whoWeAre) {
    return (
      <section id="who-we-are" className="w-full h-screen min-h-[600px] flex items-center justify-center">
        <HomeSkeleton />
      </section>
    );
  }

  return (
    <section id="who-we-are" className="w-full h-screen min-h-[600px] relative overflow-hidden flex items-center">
      <HomeWhoWeAre data={whoWeAre} />
    </section>
  );
};
