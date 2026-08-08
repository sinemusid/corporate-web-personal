import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { LeadershipSection, fetchLeadership } from '@/features/about-us';

export const LeadershipWidget: React.FC = async () => {
  const leadership = await fetchLeadership();

  if (!leadership) return null;

  return (
    <SectionWrapper id="our-team" darkBg>
      <LeadershipSection data={leadership} />
    </SectionWrapper>
  );
};

