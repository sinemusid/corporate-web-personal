'use client';
import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { AboutCompanyOverview, AboutUsSkeleton, useAboutUs, VisionMissionValue } from '@/features/about-us';

export const AboutCompanyOverviewWidget: React.FC = () => {
  const { companyOverview, visionMissionValue, isLoading } = useAboutUs();

  if (isLoading || !companyOverview) {
    return (
      <SectionWrapper id="about-overview" className="pt-8">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="about-overview" className="flex flex-col items-center justify-center min-h-screen gap-2">
      <AboutCompanyOverview data={companyOverview} />
      {visionMissionValue && <VisionMissionValue data={visionMissionValue} />}
    </SectionWrapper>
  );
};
