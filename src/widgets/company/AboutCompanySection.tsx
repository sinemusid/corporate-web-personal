'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { WhoWeAre, AboutCompany, NumberProjects, CompanySkeleton, useCompany } from '@/features/company';

interface AboutCompanySectionProps {
  variant?: 'who-we-are' | 'about' | 'stats' | 'all';
}

export const AboutCompanySection: React.FC<AboutCompanySectionProps> = ({ variant = 'all' }) => {
  const { info, stats, isLoading } = useCompany();

  if (isLoading) {
    return (
      <SectionWrapper id="about-skeleton">
        <CompanySkeleton />
      </SectionWrapper>
    );
  }

  if (variant === 'who-we-are') {
    return info ? (
      <SectionWrapper id="who-we-are" className="pt-4">
        <WhoWeAre info={info} />
      </SectionWrapper>
    ) : null;
  }

  if (variant === 'about') {
    return info ? (
      <SectionWrapper id="about-info">
        <AboutCompany info={info} />
      </SectionWrapper>
    ) : null;
  }

  if (variant === 'stats') {
    return (
      <SectionWrapper id="stats">
        <NumberProjects stats={stats} />
      </SectionWrapper>
    );
  }

  return (
    <div className="space-y-12">
      {info && (
        <SectionWrapper id="who-we-are">
          <WhoWeAre info={info} />
        </SectionWrapper>
      )}
      {info && (
        <SectionWrapper id="about-info">
          <AboutCompany info={info} />
        </SectionWrapper>
      )}
      <SectionWrapper id="stats">
        <NumberProjects stats={stats} />
      </SectionWrapper>
    </div>
  );
};
