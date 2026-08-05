'use client';

import { SectionWrapper } from '@/components/common/SectionWrapper';
import {
  UnitHeroBanner,
  UnitOverviewSection,
  UnitCapabilitiesSection,
  UnitProjectsSection,
  UnitWorkflowSection,
  UnitCtaSection,
  BusinessUnit,
} from '@/features/units';

interface UnitDetailPageClientProps {
  unit: BusinessUnit;
}

export const UnitDetailPageClient: React.FC<UnitDetailPageClientProps> = ({ unit }) => {
  return (
    <main>
      <SectionWrapper isTopSection>
        <div className="space-y-12 sm:space-y-16">
          <UnitHeroBanner unit={unit} />
          <UnitOverviewSection about={unit.about} tagline={unit.tagline} />
          <UnitCapabilitiesSection unitTitle={unit.title} capabilities={unit.capabilities} />
          <UnitProjectsSection projects={unit.featuredProjects} />
          <UnitWorkflowSection workflow={unit.workflow} />
          <UnitCtaSection unitTitle={unit.title} />
        </div>
      </SectionWrapper>
    </main>
  );
};

