import React from 'react';
import {
  AboutCompanySection,
  VisionMissionSection,
  EcosystemFlowSection,
  OurTeamSection,
  ServicesGridSection,
  CareerRoadmapSection,
  PortfolioGridSection,
} from '@/widgets';

export default function AboutUsPage() {
  return (
    <div className="space-y-16 py-12">
      <AboutCompanySection variant="about" />
      <VisionMissionSection />
      <AboutCompanySection variant="stats" />
      <EcosystemFlowSection />
      <OurTeamSection variant="grid" />
      <OurTeamSection variant="structure" />
      <ServicesGridSection />
      <CareerRoadmapSection />
      <PortfolioGridSection />
    </div>
  );
}
