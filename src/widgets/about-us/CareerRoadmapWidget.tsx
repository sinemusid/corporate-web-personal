import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CareerRoadmap, fetchCareerRoadmap } from '@/features/about-us';

export const CareerRoadmapWidget: React.FC = async () => {
  const careerRoadmap = await fetchCareerRoadmap();

  if (!careerRoadmap) return null;

  return (
    <SectionWrapper id="roadmap" darkBg>
      <CareerRoadmap data={careerRoadmap} />
    </SectionWrapper>
  );
};

