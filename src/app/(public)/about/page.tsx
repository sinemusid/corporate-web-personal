import React, { Suspense } from 'react';
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
import {
  AboutCompanyOverviewSkeleton,
  ProjectStatsSkeleton,
  MilestonesTimelineSkeleton,
  CareerRoadmapSkeleton,
  DesignStructureSkeleton,
  LeadershipSkeleton,
  PortfolioGridSkeleton,
} from '@/features/about-us';
import { constructMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Tentang Kami – Profil & Misi Corporate',
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

      {/* Section 1: Company Overview & Vision Mission */}
      <Suspense fallback={<AboutCompanyOverviewSkeleton />}>
        <AboutCompanyOverviewWidget />
      </Suspense>

      {/* Section 2: Project Stats */}
      <Suspense fallback={<ProjectStatsSkeleton />}>
        <ProjectStatsWidget />
      </Suspense>

      {/* Section 3: Milestones Timeline */}
      <Suspense fallback={<MilestonesTimelineSkeleton />}>
        <MilestonesTimelineWidget />
      </Suspense>

      {/* Section 4: Career Roadmap */}
      <Suspense fallback={<CareerRoadmapSkeleton />}>
        <CareerRoadmapWidget />
      </Suspense>

      {/* Section 5: Design / Org Structure */}
      <Suspense fallback={<DesignStructureSkeleton />}>
        <DesignStructureWidget />
      </Suspense>

      {/* Section 6: Leadership / Founder */}
      <Suspense fallback={<LeadershipSkeleton />}>
        <LeadershipWidget />
      </Suspense>

      {/* Section 7: Portfolio Grid */}
      <Suspense fallback={<PortfolioGridSkeleton />}>
        <PortfolioGridWidget />
      </Suspense>
    </main>
  );
}
