import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { VisionMissionValue, fetchVisionMissionValue } from '@/features/about-us';

export const VisionMissionValueWidget: React.FC = async () => {
  const visionMissionValue = await fetchVisionMissionValue();

  if (!visionMissionValue) return null;

  return (
    <SectionWrapper id="vision-mission" darkBg className="pt-2 sm:pt-4">
      <VisionMissionValue data={visionMissionValue} />
    </SectionWrapper>
  );
};
