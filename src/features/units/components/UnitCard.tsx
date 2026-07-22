import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BusinessUnit } from '../types';

interface UnitCardProps {
  unit: BusinessUnit;
}

export const UnitCard: React.FC<UnitCardProps> = ({ unit }) => {
  return (
    <Card className="flex flex-col justify-between h-full hover:border-red-600/60 transition-all">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 px-2.5 py-1 rounded border border-red-900/50">
            {unit.slug}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{unit.title}</h3>
          <p className="text-xs text-red-400 font-medium mb-3">{unit.subtitle}</p>
          <p className="text-xs text-zinc-400 leading-relaxed">{unit.description}</p>
        </div>

        <ul className="space-y-1.5 pt-2">
          {unit.features.map((feat, i) => (
            <li key={i} className="text-xs text-zinc-300 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <Link href={`/units/${unit.slug}`}>
          <Button variant="outline" size="sm" className="w-full">
            Jelajahi Unit
          </Button>
        </Link>
      </div>
    </Card>
  );
};
