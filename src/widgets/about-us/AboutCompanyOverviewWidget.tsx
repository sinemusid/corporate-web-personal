'use client';
import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { AboutCompanyOverview, AboutUsSkeleton, useAboutUs, VisionMissionValue } from '@/features/about-us';

export const AboutCompanyOverviewWidget: React.FC = () => {
  const { companyOverview, visionMissionValue, isLoading } = useAboutUs();

  if (isLoading || !companyOverview) {
    return (
      <SectionWrapper isTopSection id="about-overview">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper isTopSection id="about-overview" className="flex flex-col items-center justify-center gap-8">
      <AboutCompanyOverview data={companyOverview} />
      {visionMissionValue && <VisionMissionValue data={visionMissionValue} />}
    </SectionWrapper>
  );
};
