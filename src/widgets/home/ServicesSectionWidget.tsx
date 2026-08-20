import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeServices } from '@/features/home/components/HomeServices';
import { fetchHomeServices } from '@/features/home';

export const ServicesSectionWidget: React.FC = async () => {
  const servicesData = await fetchHomeServices();

  if (!servicesData) return null;

  return (
    <SectionWrapper id="services" className="w-full flex flex-col justify-center pt-12 sm:pt-14 lg:pt-16 pb-24 sm:pb-28 lg:pb-32">
      <HomeServices data={servicesData} />
    </SectionWrapper>
  );
};

