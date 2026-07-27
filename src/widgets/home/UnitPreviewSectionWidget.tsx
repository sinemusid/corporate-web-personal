'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeUnitPreview, HomeSkeleton, useHome } from '@/features/home';

interface UnitPreviewSectionWidgetProps {
  showTitleHeader?: boolean;
  darkBg?: boolean;
}

export const UnitPreviewSectionWidget: React.FC<UnitPreviewSectionWidgetProps> = ({
  showTitleHeader = true,
  darkBg = false,
}) => {
  const { unitPreview, isLoading } = useHome();

  if (isLoading || !unitPreview) {
    return (
      <SectionWrapper darkBg={darkBg} id="units-skeleton">
        <HomeSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="units" darkBg={darkBg} className={showTitleHeader ? 'pb-20' : ''}>
      <HomeUnitPreview data={unitPreview} showTitleHeader={showTitleHeader} />
    </SectionWrapper>
  );
};
