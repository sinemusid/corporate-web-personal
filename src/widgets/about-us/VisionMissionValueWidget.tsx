'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { VisionMissionValue, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const VisionMissionValueWidget: React.FC = () => {
  const { visionMissionValue, isLoading } = useAboutUs();

  if (isLoading || !visionMissionValue) {
    return (
      <SectionWrapper id="vision-mission" darkBg>
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="vision-mission" darkBg>
      <VisionMissionValue data={visionMissionValue} />
    </SectionWrapper>
  );
};
