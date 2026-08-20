import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { LeadershipSection, fetchLeadership } from '@/features/about-us';

export const LeadershipWidget: React.FC = async () => {
  const leadership = await fetchLeadership();

  if (!leadership) return null;

  return (
    <SectionWrapper id="founder">
      <div id="meet-the-founder" className="scroll-mt-24">
        <LeadershipSection data={leadership} />
      </div>
    </SectionWrapper>
  );
};

