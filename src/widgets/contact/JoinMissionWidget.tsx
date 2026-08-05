import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { JoinMission, fetchJoinMission } from '@/features/contact';

export const JoinMissionWidget = async () => {
  const joinMission = await fetchJoinMission();

  return (
    <SectionWrapper isTopSection id="join-mission" className="w-full min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
      <JoinMission data={joinMission} />
    </SectionWrapper>
  );
};

