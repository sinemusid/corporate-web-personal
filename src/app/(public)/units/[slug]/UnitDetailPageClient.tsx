'use client';

import { UnitDetailWidget } from '@/widgets';
import { BusinessUnit } from '@/features/units';

interface UnitDetailPageClientProps {
  unit: BusinessUnit;
}

export const UnitDetailPageClient: React.FC<UnitDetailPageClientProps> = ({ unit }) => {
  return (
    <main>
      <UnitDetailWidget unit={unit} />
    </main>
  );
};


