'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { JoinMission, ContactSkeleton, useContact } from '@/features/contact';

export const JoinMissionWidget: React.FC = () => {
  const { joinMission, isLoading } = useContact();

  if (isLoading || !joinMission) {
    return (
      <SectionWrapper id="join-mission" className="w-full min-h-screen lg:h-screen min-h-[600px] flex items-center justify-center pt-20 pb-8">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="join-mission" className="w-full min-h-screen lg:h-screen min-h-[600px] flex items-center justify-center pt-20 pb-8">
      <JoinMission data={joinMission} />
    </SectionWrapper>
  );
};
