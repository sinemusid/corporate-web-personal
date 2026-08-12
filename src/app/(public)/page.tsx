import React from 'react';
import { Metadata } from 'next';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget, ServicesSectionWidget } from '@/widgets/home';
import { constructMetadata } from '@/lib/seo';
import { WebSiteJsonLd } from '@/components/seo/json-ld';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Platform Ekosistem Sinema & Solusi Digital Indonesia',
  description:
    'Sinemus Indonesia adalah platform ekosistem sinema dan penyedia solusi teknologi terintegrasi. Menghadirkan layanan produksi film, event screening komunitas, hingga solusi digital terpercaya di Indonesia.',
  canonicalUrl: '/',
  image: '/share/sinemus-indonesia.PNG',
  keywords: [
    'Sinemus Indonesia',
    'Ekosistem Sinema Indonesia',
    'Solusi Digital Terpercaya',
    'Produksi Film Indonesia',
    'Event Screening Komunitas',
    'Sineas Muslim Indonesia',
    'Platform Cinema Digital',
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
