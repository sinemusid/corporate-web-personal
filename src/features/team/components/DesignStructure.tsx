import React from 'react';
import { Card } from '@/components/ui/Card';
import { StructureNode } from '../types';

interface DesignStructureProps {
  structure: StructureNode[];
}

export const DesignStructure: React.FC<DesignStructureProps> = ({ structure }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Struktur Organisasi (Design Structure)</h3>
        <p className="text-xs text-zinc-400 mt-1">Hierarki kepemimpinan dan pembagian tata kelola ekosistem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {structure.map((node, i) => (
          <Card key={i} className="space-y-3">
            <h4 className="font-bold text-red-500 text-base">{node.title}</h4>
            <p className="text-xs text-zinc-400">{node.description}</p>
            {node.subNodes && (
              <ul className="pt-2 space-y-1 border-t border-zinc-800">
                {node.subNodes.map((sub, sIdx) => (
                  <li key={sIdx} className="text-xs text-zinc-300 font-mono">
                    › {sub}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
