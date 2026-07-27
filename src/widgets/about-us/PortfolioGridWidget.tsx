'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { PortfolioGrid, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const PortfolioGridWidget: React.FC = () => {
  const { portfolio, isLoading } = useAboutUs();

  if (isLoading || !portfolio) {
    return (
      <SectionWrapper id="portfolio">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="portfolio">
      <PortfolioGrid data={portfolio} />
    </SectionWrapper>
  );
};
