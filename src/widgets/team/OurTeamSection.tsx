'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { OurTeamGrid, DesignStructure, TeamSkeleton, useTeam } from '@/features/team';

interface OurTeamSectionProps {
  variant?: 'grid' | 'structure' | 'all';
}

export const OurTeamSection: React.FC<OurTeamSectionProps> = ({ variant = 'all' }) => {
  const { members, structure, isLoading } = useTeam();

  if (isLoading) {
    return (
      <SectionWrapper id="team-skeleton">
        <TeamSkeleton />
      </SectionWrapper>
    );
  }

  if (variant === 'grid') {
    return (
      <SectionWrapper id="leadership">
        <OurTeamGrid members={members} />
      </SectionWrapper>
    );
  }

  if (variant === 'structure') {
    return (
      <SectionWrapper id="structure">
        <DesignStructure structure={structure} />
      </SectionWrapper>
    );
  }

  return (
    <>
      <SectionWrapper id="leadership">
        <OurTeamGrid members={members} />
      </SectionWrapper>
      <SectionWrapper id="structure">
        <DesignStructure structure={structure} />
      </SectionWrapper>
    </>
  );
};
