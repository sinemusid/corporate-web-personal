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

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Tentang Kami',
  description:
    'Mengenal lebih dekat profil, visi misi, jajaran kepemimpinan, serta rekam jejak Sinemus Indonesia.',
  canonicalUrl: '/about',
});

export default function AboutUsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
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



