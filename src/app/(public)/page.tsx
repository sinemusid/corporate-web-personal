import React from 'react';
import { HeroSection, AboutCompanySection, UnitGridSection } from '@/widgets';

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AboutCompanySection variant="who-we-are" />
      <UnitGridSection showTitleHeader />
    </div>
  );
}
