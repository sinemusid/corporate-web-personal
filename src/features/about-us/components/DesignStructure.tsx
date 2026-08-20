'use client';

import React from 'react';
import { FadeIn } from '@/components/motion';
import { DesignStructureData } from '../types';
import {
  computeDesignStructureData,
  CardItem,
  CEOTrunkLine,
  CSuiteGrid,
  SpecialUnitSection,
  MobileTreeFlow,
} from './design-structure';

interface DesignStructureProps {
  data: DesignStructureData;
}

export const DesignStructure: React.FC<DesignStructureProps> = ({ data }) => {
  const structureData = computeDesignStructureData(data);
  const { heading, ceoNode, cSuiteColumns, pudNode, ucoNode, usNode } = structureData;

  return (
    <section className="w-full bg-transparent py-10 sm:py-16 select-none px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        <FadeIn direction="up" className="text-center flex flex-col items-center justify-center space-y-3 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight font-heading leading-tight">
            {heading}
          </h2>
        </FadeIn>
        <MobileTreeFlow data={structureData} />
        <FadeIn direction="up" delay={0.1} className="hidden md:flex flex-col items-center relative">
          <div className="w-full max-w-md z-10 px-3">
            <CardItem node={ceoNode} highlight levelBadge="EXECUTIVE LEADERSHIP" />
          </div>
          <CEOTrunkLine />
          <CSuiteGrid columns={cSuiteColumns} />
          <SpecialUnitSection pudNode={pudNode} ucoNode={ucoNode} usNode={usNode} />
        </FadeIn>
      </div>
    </section>
  );
};
