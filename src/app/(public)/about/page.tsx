import React from 'react';
import {
  AboutCompanyOverviewWidget,
  VisionMissionValueWidget,
  ProjectStatsWidget,
  MilestonesTimelineWidget,
  CareerRoadmapWidget,
  DesignStructureWidget,
  OurTeamGridWidget,
  ServicesGridWidget,
  PortfolioGridWidget,
} from '@/widgets/about-us';

export default function AboutUsPage() {
  return (
    <div className="space-y-8 py-8 sm:py-12">
      <AboutCompanyOverviewWidget />
      <VisionMissionValueWidget />
      <ProjectStatsWidget />
      <MilestonesTimelineWidget />
      <CareerRoadmapWidget />
      <DesignStructureWidget />
      <OurTeamGridWidget />
      <ServicesGridWidget />
      <PortfolioGridWidget />
    </div>
  );
}

