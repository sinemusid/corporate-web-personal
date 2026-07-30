import React from 'react';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget } from '@/widgets/home';
import { ServicesGridWidget } from '@/widgets/about-us';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSectionWidget />
      <WhoWeAreSectionWidget />
      <UnitPreviewSectionWidget showTitleHeader />
      <ServicesGridWidget />
    </div>
  );
}
