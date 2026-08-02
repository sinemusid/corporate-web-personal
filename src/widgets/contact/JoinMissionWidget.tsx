'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { JoinMission, ContactSkeleton, useContact } from '@/features/contact';

export const JoinMissionWidget: React.FC = () => {
  const { joinMission, isLoading } = useContact();

  if (isLoading || !joinMission) {
    return (
      <SectionWrapper isTopSection id="join-mission" className="w-full min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper isTopSection id="join-mission" className="w-full min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
      <JoinMission data={joinMission} />
    </SectionWrapper>
  );
};
