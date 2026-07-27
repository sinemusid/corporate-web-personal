import React from 'react';
import { HeroSectionWidget, WhoWeAreSectionWidget, UnitPreviewSectionWidget } from '@/widgets/home';

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <HeroSectionWidget />
      <WhoWeAreSectionWidget />
      <UnitPreviewSectionWidget showTitleHeader />
    </div>
  );
}
