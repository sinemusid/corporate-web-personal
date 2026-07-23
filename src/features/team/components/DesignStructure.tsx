import React from 'react';
import { StructureNode } from '../types';

interface DesignStructureProps {
  structure: StructureNode[];
}

export const DesignStructure: React.FC<DesignStructureProps> = ({ structure }) => {
  const topNode = structure[0];
  const subNodes = structure.slice(1);

  return (
    <div className="space-y-10 my-16">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Design Structure</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top Node: COMMISSIONER / CEO */}
        {topNode && (
          <div className="flex justify-center">
            <div className="w-64 bg-zinc-900 border border-zinc-700 p-4 rounded-xl text-center space-y-1 backdrop-blur-md shadow-xl">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{topNode.title}</h3>
              <p className="text-[10px] text-zinc-400 font-mono">{topNode.description}</p>
            </div>
          </div>
        )}

        {/* Tree Line Connector */}
        <div className="w-0.5 h-6 bg-zinc-700 mx-auto" />

        {/* Sub Nodes Grid (COO, CTO, CMO, CFO) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {subNodes.map((node, i) => (
            <div
              key={i}
              className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-center space-y-1 backdrop-blur-md hover:border-zinc-700 transition-colors"
            >
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">{node.title}</h4>
              <p className="text-[10px] text-zinc-400 font-mono">{node.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

