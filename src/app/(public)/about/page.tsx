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
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Tentang Kami - Profil & Misi Corporate',
  description:
    'Mengenal profil Sinemus Indonesia, visi misi, struktur organisasi, tim kepemimpinan, dan rekam jejak portofolio ekosistem sinema terintegrasi.',
  canonicalUrl: '/about',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Tentang Sinemus Indonesia',
    'Profil Perusahaan Sinemus',
    'Visi Misi Sinemus Indonesia',
    'Tim Kepemimpinan Sinemus',
    'Struktur Organisasi Sinemus',
    'Portofolio Sinemus Indonesia',
  ],
});

export default function AboutUsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Beranda', item: '/' },
          { name: 'Tentang Kami', item: '/about' },
        ]}
      />
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



