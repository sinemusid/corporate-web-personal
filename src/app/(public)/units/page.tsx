import React from 'react';
import { UnitHeroSectionWidget, UnitGridSectionWidget } from '@/widgets/units';

export default function UnitsHubPage() {
  return (
    <div>
      <UnitHeroSectionWidget />
      <UnitGridSectionWidget darkBg />
    </div>
  );
}
