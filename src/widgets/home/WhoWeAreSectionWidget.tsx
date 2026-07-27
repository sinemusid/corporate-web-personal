'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeWhoWeAre, HomeSkeleton, useHome } from '@/features/home';

export const WhoWeAreSectionWidget: React.FC = () => {
  const { whoWeAre, isLoading } = useHome();

  if (isLoading || !whoWeAre) {
    return (
      <SectionWrapper id="who-we-are">
        <HomeSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="who-we-are" className="pt-4">
      <HomeWhoWeAre data={whoWeAre} />
    </SectionWrapper>
  );
};
