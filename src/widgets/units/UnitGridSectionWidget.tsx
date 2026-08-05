import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { UnitGrid, fetchUnits } from '@/features/units';

interface UnitGridSectionWidgetProps {
  showTitleHeader?: boolean;
  darkBg?: boolean;
}

export const UnitGridSectionWidget: React.FC<UnitGridSectionWidgetProps> = async ({
  showTitleHeader = false,
  darkBg = false,
}) => {
  const units = await fetchUnits();

  if (!units || units.length === 0) return null;

  return (
    <SectionWrapper id="units-list" darkBg={darkBg} className={showTitleHeader ? 'pb-20' : ''}>
      {showTitleHeader && (
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-wider text-content-primary uppercase">
            SATU EKOSISTEM TERINTEGRASI
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed">
            Kami mengintegrasikan kreativitas, teknologi, dan nilai-nilai luhur untuk menghadirkan karya perfilman yang berdampak melalui beberapa unit:
          </p>
        </div>
      )}
      <UnitGrid units={units} />
    </SectionWrapper>
  );
};

