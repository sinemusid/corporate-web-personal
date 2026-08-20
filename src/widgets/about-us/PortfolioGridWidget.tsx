import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { PortfolioGrid, fetchPortfolio } from '@/features/about-us';

export const PortfolioGridWidget: React.FC = async () => {
  const portfolio = await fetchPortfolio();

  if (!portfolio) return null;

  return (
    <SectionWrapper id="portfolio">
      <PortfolioGrid data={portfolio} />
    </SectionWrapper>
  );
};
