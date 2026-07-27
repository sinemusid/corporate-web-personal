'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { JoinMission, ContactSkeleton, useContact } from '@/features/contact';

export const JoinMissionWidget: React.FC = () => {
  const { joinMission, isLoading } = useContact();

  if (isLoading || !joinMission) {
    return (
      <SectionWrapper id="join-mission" className="py-8">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="join-mission" className="py-8">
      <JoinMission data={joinMission} />
    </SectionWrapper>
  );
};
