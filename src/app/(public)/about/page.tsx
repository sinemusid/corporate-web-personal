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

/**
 * Skeleton ringan untuk setiap section saat di-stream.
 * Lebih granular daripada satu loading.tsx tunggal — user
 * melihat konten yang sudah selesai satu per satu.
 */
function SectionSkeleton({ height = 'h-64' }: { height?: string }) {
  return (
    <div
      className={`w-full ${height} bg-slate-100 animate-pulse rounded-2xl mx-auto max-w-5xl`}
      aria-hidden="true"
    />
  );
}

export default function AboutUsPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Beranda', item: '/' },
          { name: 'Tentang Kami', item: '/about' },
        ]}
      />

      {/*
       * ✅ FIX: Setiap widget dibungkus Suspense boundary terpisah.
       * Next.js App Router akan stream setiap section secara independen
       * ke client segera setelah selesai — tidak menunggu semua selesai.
       * User melihat konten bagian atas dahulu, lalu bagian bawah menyusul.
       */}

      {/* Section 1: Company Overview + Vision Mission — prioritas tertinggi, tampil pertama */}
      <Suspense fallback={<SectionSkeleton height="h-[480px]" />}>
        <AboutCompanyOverviewWidget />
      </Suspense>

      {/* Section 2: Project Stats */}
      <Suspense fallback={<SectionSkeleton height="h-48" />}>
        <ProjectStatsWidget />
      </Suspense>

      {/* Section 3: Milestones Timeline */}
      <Suspense fallback={<SectionSkeleton height="h-72" />}>
        <MilestonesTimelineWidget />
      </Suspense>

      {/* Section 4: Career Roadmap */}
      <Suspense fallback={<SectionSkeleton height="h-72" />}>
        <CareerRoadmapWidget />
      </Suspense>

      {/* Section 5: Design/Org Structure */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <DesignStructureWidget />
      </Suspense>

      {/* Section 6: Leadership/Founder — gambar CEO di-stream segera setelah data ada */}
      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <LeadershipWidget />
      </Suspense>

      {/* Section 7: Portfolio Grid */}
      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <PortfolioGridWidget />
      </Suspense>
    </main>
  );
}
