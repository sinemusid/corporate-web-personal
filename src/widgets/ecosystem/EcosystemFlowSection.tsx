'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { EcosystemFlow, EcosystemSkeleton, useEcosystem } from '@/features/ecosystem';

export const EcosystemFlowSection: React.FC = () => {
  const { flow, isLoading } = useEcosystem();

  if (isLoading) {
    return (
      <SectionWrapper id="ecosystem-skeleton">
        <EcosystemSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="how-we-work">
      <EcosystemFlow flow={flow} />
    </SectionWrapper>
  );
};
