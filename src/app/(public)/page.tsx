import React from 'react';
import { Metadata } from 'next';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget, ServicesSectionWidget } from '@/widgets/home';
import { constructMetadata } from '@/lib/seo';

export const revalidate = 3600;

export const metadata: Metadata = constructMetadata({
  title: 'Corporate Web & Solution Partner',
  description:
    'Sinemus Indonesia adalah penyedia solusi bisnis dan teknologi terpercaya dengan berbagai unit usaha unggulan di Indonesia.',
  canonicalUrl: '/',
});

export default function LandingPage() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <HeroSectionWidget />
      <WhoWeAreSectionWidget />
      <UnitPreviewSectionWidget showTitleHeader />
      <ServicesSectionWidget />
    </main>
  );
}
