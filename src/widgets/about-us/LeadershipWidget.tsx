'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { LeadershipSection, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const LeadershipWidget: React.FC = () => {
  const { leadership, isLoading } = useAboutUs();

  if (isLoading || !leadership) {
    return (
      <SectionWrapper id="our-team">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="our-team">
      <LeadershipSection data={leadership} />
    </SectionWrapper>
  );
};
