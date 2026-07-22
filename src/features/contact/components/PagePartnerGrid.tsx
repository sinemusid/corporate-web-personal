import React from 'react';
import { Card } from '@/components/ui/Card';
import { PartnerItem } from '../types';

interface PagePartnerGridProps {
  partners: PartnerItem[];
}

export const PagePartnerGrid: React.FC<PagePartnerGridProps> = ({ partners }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl font-extrabold text-white">Mitra & Kolaborator Strategis</h2>
        <p className="text-xs text-zinc-400">
          Jejaring asosiasi, investor, studio paska-produksi, dan sponsor pendukung ekosistem Sinemus.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {partners.map((p) => (
          <Card key={p.id} className="text-center space-y-2 flex flex-col items-center justify-center p-4 hover:border-red-600/40 transition-all">
            <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-red-500 font-mono text-xs">
              {p.name.substring(0, 2).toUpperCase()}
            </div>
            <h4 className="text-xs font-semibold text-white line-clamp-1">{p.name}</h4>
            <span className="text-[10px] text-zinc-500">{p.category}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};
