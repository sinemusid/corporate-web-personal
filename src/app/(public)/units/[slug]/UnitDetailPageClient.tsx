'use client';

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import {
  UnitHeroBanner,
  UnitOverviewSection,
  UnitCapabilitiesSection,
  UnitProjectsSection,
  UnitWorkflowSection,
  UnitCtaSection,
  useUnitDetail,
  UnitSkeleton,
} from '@/features/units';

interface UnitDetailPageClientProps {
  params: Promise<{
    slug: string;
  }>;
}

export const UnitDetailPageClient: React.FC<UnitDetailPageClientProps> = ({ params }) => {
  const resolvedParams = use(params);
  const { unit, isLoading } = useUnitDetail(resolvedParams.slug);

  if (!isLoading && !unit) {
    notFound();
  }

  return (
    <SectionWrapper isTopSection>
      {isLoading || !unit ? (
        <UnitSkeleton />
      ) : (
        <div className="space-y-12 sm:space-y-16">
          <UnitHeroBanner unit={unit} />
          <UnitOverviewSection about={unit.about} tagline={unit.tagline} />
          <UnitCapabilitiesSection unitTitle={unit.title} capabilities={unit.capabilities} />
          <UnitProjectsSection projects={unit.featuredProjects} />
          <UnitWorkflowSection workflow={unit.workflow} />
          <UnitCtaSection unitTitle={unit.title} />
        </div>
      )}
    </SectionWrapper>
  );
};
