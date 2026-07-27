'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { LayananKamiGrid, ServiceSkeleton, useServices } from '@/features/services';

export const ServicesGridSection: React.FC = () => {
  const { services, isLoading } = useServices();

  if (isLoading) {
    return (
      <SectionWrapper id="services-skeleton">
        <ServiceSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="services">
      <div className="space-y-8 my-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Layanan Kami</h2>
        <LayananKamiGrid services={services} />
      </div>
    </SectionWrapper>
  );
};
