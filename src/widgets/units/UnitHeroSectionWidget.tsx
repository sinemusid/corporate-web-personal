import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { UnitHeroBanner } from '@/features/units';

export const UnitHeroSectionWidget: React.FC = () => {
  return (
    <SectionWrapper id="unit-hero" className="pt-8 pb-4">
      <UnitHeroBanner />
    </SectionWrapper>
  );
};

