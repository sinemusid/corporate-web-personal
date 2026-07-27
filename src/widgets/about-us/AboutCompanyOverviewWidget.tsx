'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { AboutCompanyOverview, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const AboutCompanyOverviewWidget: React.FC = () => {
  const { companyOverview, isLoading } = useAboutUs();

  if (isLoading || !companyOverview) {
    return (
      <SectionWrapper id="about-overview" className="pt-8">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="about-overview" className="pt-8">
      <AboutCompanyOverview data={companyOverview} />
    </SectionWrapper>
  );
};
