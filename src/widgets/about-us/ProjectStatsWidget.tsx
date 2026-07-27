'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ProjectStats, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const ProjectStatsWidget: React.FC = () => {
  const { projectStats, isLoading } = useAboutUs();

  if (isLoading || !projectStats) {
    return (
      <SectionWrapper id="project-stats">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="project-stats">
      <ProjectStats data={projectStats} />
    </SectionWrapper>
  );
};
