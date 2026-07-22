import React from 'react';
import { UnitCard } from './UnitCard';
import { BusinessUnit } from '../types';

interface UnitGridProps {
  units: BusinessUnit[];
}

export const UnitGrid: React.FC<UnitGridProps> = ({ units }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
