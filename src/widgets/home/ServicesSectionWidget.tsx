'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeServices } from '@/features/home/components/HomeServices';
import { MOCK_HOME_SERVICES } from '@/features/home/constants/home-services.mock';

export const ServicesSectionWidget: React.FC = () => {
  return (
    <SectionWrapper id="services" darkBg className="w-full min-h-screen lg:h-screen min-h-[600px] flex flex-col justify-center py-12">
      <HomeServices data={MOCK_HOME_SERVICES} />
    </SectionWrapper>
  );
};
