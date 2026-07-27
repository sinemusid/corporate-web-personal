'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { DesignStructure, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const DesignStructureWidget: React.FC = () => {
  const { designStructure, isLoading } = useAboutUs();

  if (isLoading || !designStructure) {
    return (
      <SectionWrapper id="design-structure" darkBg>
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="design-structure" darkBg>
      <DesignStructure data={designStructure} />
    </SectionWrapper>
  );
};
