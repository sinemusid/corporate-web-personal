'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { RoadmapTimeline, CareerSkeleton, useRoadmap } from '@/features/career';

export const CareerRoadmapSection: React.FC = () => {
  const { roadmap, isLoading } = useRoadmap();

  if (isLoading) {
    return (
      <SectionWrapper id="career-roadmap-skeleton">
        <CareerSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="roadmap">
      <RoadmapTimeline roadmap={roadmap} />
    </SectionWrapper>
  );
};
