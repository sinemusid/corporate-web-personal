import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ProjectStats, fetchProjectStats } from '@/features/about-us';

export const ProjectStatsWidget: React.FC = async () => {
  const projectStats = await fetchProjectStats();

  if (!projectStats) return null;

  return (
    <SectionWrapper id="project-stats">
      <ProjectStats data={projectStats} />
    </SectionWrapper>
  );
};

