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
      <SectionWrapper darkBg={darkBg} id="units-skeleton" className="w-full min-h-screen lg:h-screen min-h-[650px] flex flex-col justify-center items-center py-12">
        <HomeSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="units" darkBg={darkBg} className="w-full min-h-screen lg:h-screen min-h-[650px] flex flex-col justify-center py-12">
      <HomeUnitPreview data={unitPreview} showTitleHeader={showTitleHeader} />
    </SectionWrapper>
  );
};
