import React from 'react';
import {
  AboutCompanyOverviewWidget,
  ProjectStatsWidget,
  MilestonesTimelineWidget,
  CareerRoadmapWidget,
  DesignStructureWidget,
  LeadershipWidget,
  PortfolioGridWidget,
} from '@/widgets/about-us';

export default function AboutUsPage() {
  return (
    <div className="space-y-8 pb-8 sm:pb-12">
      <AboutCompanyOverviewWidget />
      <ProjectStatsWidget />
      <MilestonesTimelineWidget />
      <CareerRoadmapWidget />
      <DesignStructureWidget />
      <LeadershipWidget />
      <PortfolioGridWidget />
    </div>
  );
}

