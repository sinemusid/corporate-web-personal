'use client';

import React from 'react';
import { DesignStructureData } from '../types';

interface DesignStructureProps {
  data: DesignStructureData;
}

export const DesignStructure: React.FC<DesignStructureProps> = ({ data }) => {
  const topNode = data.nodes[0];
  const subNodes = data.nodes.slice(1);

  return (
    <div className="space-y-10 max-w-4xl mx-auto my-12">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light">{data.subheading}</p>
      </div>

      <div className="space-y-6">
        {/* Top Node */}
        {topNode && (
          <div className="flex justify-center">
            <div className="w-64 bg-bg-elevated border border-borderToken-strong p-4 rounded-xl text-center space-y-1 backdrop-blur-md shadow-xl">
              <h3 className="text-sm font-heading font-bold text-content-primary uppercase tracking-wider">{topNode.title}</h3>
              <p className="text-[10px] text-content-tertiary font-mono">{topNode.description}</p>
            </div>
          </div>
        )}

        {/* Tree Line Connector */}
        <div className="w-0.5 h-6 bg-borderToken-strong mx-auto" />

        {/* Sub Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {subNodes.map((node, i) => (
            <div
              key={i}
              className="bg-bg-elevated border border-borderToken-subtle p-4 rounded-xl text-center space-y-1 backdrop-blur-md hover:border-borderToken-default transition-colors"
            >
              <h4 className="text-xs font-heading font-bold text-content-primary uppercase tracking-wider">{node.title}</h4>
              <p className="text-[10px] text-content-tertiary font-mono">{node.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
