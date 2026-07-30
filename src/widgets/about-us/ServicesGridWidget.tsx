'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ServicesGrid, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const ServicesGridWidget: React.FC = () => {
  const { services, isLoading } = useAboutUs();

  if (isLoading || !services) {
    return (
      <SectionWrapper id="services" darkBg className="w-full min-h-screen lg:h-screen min-h-[600px] flex flex-col justify-center items-center">
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="services" darkBg className="w-full min-h-screen lg:h-screen min-h-[600px] flex flex-col justify-center">
      <ServicesGrid data={services} />
    </SectionWrapper>
  );
};
