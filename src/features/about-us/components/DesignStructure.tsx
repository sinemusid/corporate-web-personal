'use client';

import React from 'react';
import { DesignStructureData } from '../types';
import {
  useDesignStructureData,
  CardItem,
  CEOTrunkLine,
  CSuiteGrid,
  CTOToSpecialUnitBridge,
  SpecialUnitSection,
  MobileTreeFlow,
} from './design-structure';

interface DesignStructureProps {
  data: DesignStructureData;
}

export const DesignStructure: React.FC<DesignStructureProps> = ({ data }) => {
  const structureData = useDesignStructureData(data);
  const { heading, subheading, ceoNode, cSuiteColumns, pudNode, ucoNode, usNode } = structureData;

  return (
    <section className="w-full bg-transparent py-16 sm:py-20 font-sans select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        <div className="text-center flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider font-heading leading-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-light max-w-2xl text-center leading-relaxed">
            {subheading}
          </p>
        </div>
        <MobileTreeFlow data={structureData} />
        <div className="hidden md:flex flex-col items-center relative">
          <div className="w-full max-w-[28rem] z-10 px-3">
            <CardItem node={ceoNode} highlight levelBadge="EXECUTIVE LEADERSHIP" />
          </div>
          <CEOTrunkLine />
          <CSuiteGrid columns={cSuiteColumns} />
          <CTOToSpecialUnitBridge />
          <SpecialUnitSection pudNode={pudNode} ucoNode={ucoNode} usNode={usNode} />
        </div>
      </div>
    </section>
  );
};
