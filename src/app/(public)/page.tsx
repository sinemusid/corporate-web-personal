import React from 'react';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget, ServicesSectionWidget } from '@/widgets/home';

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSectionWidget />
      <WhoWeAreSectionWidget />
      <UnitPreviewSectionWidget showTitleHeader />
      <ServicesSectionWidget />
    </div>
  );
}
