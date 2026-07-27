'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MilestonesTimeline, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const MilestonesTimelineWidget: React.FC = () => {
  const { milestonesTimeline, isLoading } = useAboutUs();

  if (isLoading || !milestonesTimeline) {
    return (
      <SectionWrapper id="milestones" darkBg>
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="milestones" darkBg>
      <MilestonesTimeline data={milestonesTimeline} />
    </SectionWrapper>
  );
};
