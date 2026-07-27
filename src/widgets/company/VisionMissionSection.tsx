'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { VisionMissionValue, CompanySkeleton, useCompany } from '@/features/company';

export const VisionMissionSection: React.FC = () => {
  const { info, isLoading } = useCompany();

  if (isLoading) {
    return (
      <SectionWrapper id="vision-mission-skeleton">
        <CompanySkeleton />
      </SectionWrapper>
    );
  }

  if (!info) return null;

  return (
    <SectionWrapper id="vision-mission">
      <VisionMissionValue info={info} />
    </SectionWrapper>
  );
};
