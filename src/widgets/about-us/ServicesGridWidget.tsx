'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ServicesGrid, AboutUsSkeleton, useAboutUs } from '@/features/about-us';

export const ServicesGridWidget: React.FC = () => {
  const { services, isLoading } = useAboutUs();

  if (isLoading || !services) {
    return (
      <SectionWrapper id="services" darkBg>
        <AboutUsSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="services" darkBg>
      <ServicesGrid data={services} />
    </SectionWrapper>
  );
};
