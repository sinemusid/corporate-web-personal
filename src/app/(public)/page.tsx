import React from 'react';
import { Metadata } from 'next';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget, ServicesSectionWidget } from '@/widgets/home';
import { constructMetadata } from '@/lib/seo';
import { WebSiteJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Platform Ekosistem Sinema & Solusi Digital',
  description:
    'Sineas Muslim Indonesia (Sinemus) adalah platform ekosistem sinema dan penyedia solusi teknologi terintegrasi di Indonesia. Menghadirkan layanan produksi film, event screening komunitas, edukasi perfilman, hingga ekosistem digital.',
  canonicalUrl: '/',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Sineas Muslim Indonesia',
    'Sinemus',
    'Sinemus Indonesia',
    'Ekosistem Sinema Indonesia',
    'Produksi Film Indonesia',
    'Event Screening Komunitas',
    'Sinemus Academy',
    'Sinemus Screen',
    'Sinemus Production',
    'Sinemus Community',
  ],
});

export default function LandingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <WebSiteJsonLd />
      <HeroSectionWidget />
      <WhoWeAreSectionWidget />
      <UnitPreviewSectionWidget showTitleHeader />
      <ServicesSectionWidget />
    </main>
  );
}
