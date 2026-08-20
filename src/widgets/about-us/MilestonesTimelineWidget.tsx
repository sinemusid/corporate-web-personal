import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MilestonesTimeline, fetchMilestonesTimeline } from '@/features/about-us';

export const MilestonesTimelineWidget: React.FC = async () => {
  const milestonesTimeline = await fetchMilestonesTimeline();

  if (!milestonesTimeline) return null;

  return (
    <SectionWrapper id="milestones">
      <MilestonesTimeline data={milestonesTimeline} />
    </SectionWrapper>
  );
};
