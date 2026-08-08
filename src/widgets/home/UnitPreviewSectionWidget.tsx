import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeUnitPreview, fetchHomeUnitPreview } from '@/features/home';

interface UnitPreviewSectionWidgetProps {
  showTitleHeader?: boolean;
  darkBg?: boolean;
}

export const UnitPreviewSectionWidget: React.FC<UnitPreviewSectionWidgetProps> = async ({
  showTitleHeader = true,
  darkBg = true,
}) => {
  const unitPreview = await fetchHomeUnitPreview();

  return (
    <SectionWrapper id="units" darkBg={darkBg} className="w-full py-24 md:py-32 flex flex-col justify-center">
      <HomeUnitPreview data={unitPreview} showTitleHeader={showTitleHeader} />
    </SectionWrapper>
  );
};
