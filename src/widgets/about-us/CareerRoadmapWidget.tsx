'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CareerRoadmap, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const CareerRoadmapWidget: React.FC = () => {
  const { careerRoadmap, isLoading } = useAboutUs();

  if (isLoading || !careerRoadmap) {
    return (
      <SectionWrapper id="roadmap">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="roadmap">
      <CareerRoadmap data={careerRoadmap} />
    </SectionWrapper>
  );
};
