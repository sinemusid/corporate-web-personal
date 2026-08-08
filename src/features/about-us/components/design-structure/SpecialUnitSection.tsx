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
      {/* Production Unit Hierarchy Stack */}
      <div className="w-full max-w-[28rem] flex flex-col items-center px-3">
        <div className="w-full">
          <CardItem node={pudNode} />
        </div>

        <div className="w-[1px] h-8 bg-slate-300 transition-colors duration-500" />

        <div className="w-full">
          <CardItem node={ucoNode} />
        </div>

        <div className="w-[1px] h-8 bg-slate-300 transition-colors duration-500" />

        <div className="w-full">
          <CardItem node={usNode} isStaff />
        </div>
      </div>
    </div>
  );
};
