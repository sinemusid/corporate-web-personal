'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { MilestonesTimeline, CompanySkeleton, useMilestones } from '@/features/company';

export const MilestonesSection: React.FC = () => {
  const { milestones, isLoading } = useMilestones();

  if (isLoading) {
    return (
      <SectionWrapper id="milestones-skeleton">
        <CompanySkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="milestones">
      <MilestonesTimeline milestones={milestones} />
    </SectionWrapper>
  );
};
