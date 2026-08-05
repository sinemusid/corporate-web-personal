import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { HomeServices } from '@/features/home/components/HomeServices';
import { fetchHomeServices } from '@/features/home';

export const ServicesSectionWidget: React.FC = async () => {
  const servicesData = await fetchHomeServices();

  if (!servicesData) return null;

  return (
    <SectionWrapper id="services" darkBg className="w-full py-24 md:py-32 flex flex-col justify-center">
      <HomeServices data={servicesData} />
    </SectionWrapper>
  );
};

