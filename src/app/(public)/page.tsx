import React from 'react';
import { Metadata } from 'next';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget, ServicesSectionWidget } from '@/widgets/home';
import { constructMetadata } from '@/lib/seo';
import { WebSiteJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Sinemus Indonesia – Platform Ekosistem Sinema & Solusi Digital',
  description:
    'Sinemus Indonesia adalah ekosistem sinema terintegrasi yang menghadirkan layanan produksi film, platform penayangan digital, akademi, dan komunitas sinema.',
  canonicalUrl: '/',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Sinemus',
    'Sinemus Indonesia',
    'Sineas Muslim Indonesia',
    'Ekosistem Sinema Indonesia',
    'Screen Unit',
    'Production Unit',
    'Academy Unit',
    'Community Unit',
    'Produksi Film Indonesia',
    'Platform Penayangan Digital',
    'Komunitas Sinema',
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
