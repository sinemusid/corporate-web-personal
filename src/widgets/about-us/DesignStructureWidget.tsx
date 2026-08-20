import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { DesignStructure, fetchDesignStructure } from '@/features/about-us';

export const DesignStructureWidget: React.FC = async () => {
  const designStructure = await fetchDesignStructure();

  if (!designStructure) return null;

  return (
    <SectionWrapper id="design-structure">
      <DesignStructure data={designStructure} />
    </SectionWrapper>
  );
};
