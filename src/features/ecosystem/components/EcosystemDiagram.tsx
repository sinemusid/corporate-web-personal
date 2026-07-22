import React from 'react';
import { Card } from '@/components/ui/Card';
import { EcosystemNode } from '../types';

interface EcosystemDiagramProps {
  nodes: EcosystemNode[];
}

export const EcosystemDiagram: React.FC<EcosystemDiagramProps> = ({ nodes }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl font-bold text-white tracking-tight">Sinemus Ecosystem</h2>
        <p className="text-zinc-400 text-sm">
          Integrasi 4 pilar bisnis sinematik dalam satu siklus berkesinambungan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nodes.map((node) => (
          <Card key={node.id} className="relative overflow-hidden group hover:border-red-600/50 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all" />
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider block mb-2">
              {node.category}
            </span>
            <h3 className="text-lg font-bold text-white mb-2">{node.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{node.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
