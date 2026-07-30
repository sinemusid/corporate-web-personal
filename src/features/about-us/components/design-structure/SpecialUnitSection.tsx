import React from 'react';
import { CardItem } from './CardItem';
import { StructureNodeData } from '../../types';

export interface SpecialUnitSectionProps {
  pudNode?: StructureNodeData;
  ucoNode?: StructureNodeData;
  usNode?: StructureNodeData;
}

export const SpecialUnitSection: React.FC<SpecialUnitSectionProps> = ({
  pudNode,
  ucoNode,
  usNode,
}) => {
  return (
    <div className="hidden md:flex flex-col items-center relative w-full group/unit pt-10 sm:pt-12">
      {/* Division Pill Badge */}
      <div className="flex items-center space-x-2.5 bg-transparent border border-white/10 rounded-full px-6 py-2 mb-4 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.02] shadow-sm z-10">
        <span className="text-[11px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest transition-colors duration-500 group-hover/unit:text-white">
          🎬 Special Unit — Production Division
        </span>
      </div>

      {/* Connector Line from Badge to PUD Card */}
      <div className="w-px h-8 bg-gray-700 -mt-4" />

      {/* Production Unit Hierarchy Stack */}
      <div className="w-full max-w-[28rem] flex flex-col items-center px-3">
        <div className="w-full">
          <CardItem node={pudNode} />
        </div>

        <div className="w-[1px] h-8 bg-gray-700 transition-colors duration-500" />

        <div className="w-full">
          <CardItem node={ucoNode} />
        </div>

        <div className="w-[1px] h-8 bg-gray-700 transition-colors duration-500" />

        <div className="w-full">
          <CardItem node={usNode} isStaff />
        </div>
      </div>
    </div>
  );
};
