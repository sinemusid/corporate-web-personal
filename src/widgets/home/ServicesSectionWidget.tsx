'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeServices } from '@/features/home/components/HomeServices';
import { MOCK_HOME_SERVICES } from '@/features/home/constants/home-services.mock';

export const ServicesSectionWidget: React.FC = () => {
  return (
    <SectionWrapper id="services" darkBg className="w-full py-24 md:py-32 flex flex-col justify-center">
      <HomeServices data={MOCK_HOME_SERVICES} />
    </SectionWrapper>
  );
};
