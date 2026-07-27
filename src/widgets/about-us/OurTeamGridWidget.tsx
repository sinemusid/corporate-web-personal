'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { OurTeamGrid, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const OurTeamGridWidget: React.FC = () => {
  const { ourTeam, isLoading } = useAboutUs();

  if (isLoading || !ourTeam) {
    return (
      <SectionWrapper id="our-team">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="our-team">
      <OurTeamGrid data={ourTeam} />
    </SectionWrapper>
  );
};
