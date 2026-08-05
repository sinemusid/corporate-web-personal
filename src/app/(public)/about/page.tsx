import React from 'react';
import { Metadata } from 'next';
import {
  AboutCompanyOverviewWidget,
  ProjectStatsWidget,
  MilestonesTimelineWidget,
  CareerRoadmapWidget,
  DesignStructureWidget,
  LeadershipWidget,
  PortfolioGridWidget,
} from '@/widgets/about-us';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Tentang Kami',
  description:
    'Mengenal lebih dekat profil, visi misi, jajaran kepemimpinan, serta rekam jejak Sinemus Indonesia.',
  canonicalUrl: '/about',
});

export default function AboutUsPage() {
  return (
    <main className="space-y-8 pb-8 sm:pb-12">
      <AboutCompanyOverviewWidget />
      <ProjectStatsWidget />
      <MilestonesTimelineWidget />
      <CareerRoadmapWidget />
      <DesignStructureWidget />
      <LeadershipWidget />
      <PortfolioGridWidget />
    </main>
  );
}



