import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeUnitPreview, fetchHomeUnitPreview } from '@/features/home';

interface UnitPreviewSectionWidgetProps {
  showTitleHeader?: boolean;
  darkBg?: boolean;
}

export const UnitPreviewSectionWidget: React.FC<UnitPreviewSectionWidgetProps> = async ({
  showTitleHeader = true,
  darkBg = false,
}) => {
  const unitPreview = await fetchHomeUnitPreview();

  return (
    <SectionWrapper id="units" darkBg={darkBg} className="w-full flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16">
      <HomeUnitPreview data={unitPreview} showTitleHeader={showTitleHeader} />
    </SectionWrapper>
  );
};
