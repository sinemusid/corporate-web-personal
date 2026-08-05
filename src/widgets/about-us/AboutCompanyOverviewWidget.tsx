import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { AboutCompanyOverview, fetchAboutCompanyOverview, fetchVisionMissionValue, VisionMissionValue } from '@/features/about-us';

export const AboutCompanyOverviewWidget: React.FC = async () => {
  const [companyOverview, visionMissionValue] = await Promise.all([
    fetchAboutCompanyOverview(),
    fetchVisionMissionValue(),
  ]);

  if (!companyOverview) return null;

  return (
    <SectionWrapper isTopSection id="about-overview" className="flex flex-col items-center justify-center gap-8">
      <AboutCompanyOverview data={companyOverview} />
      {visionMissionValue && <VisionMissionValue data={visionMissionValue} />}
    </SectionWrapper>
  );
};

