import React from 'react';
import { CardItem } from './CardItem';
import { UseDesignStructureDataReturn } from './hooks/useDesignStructureData';

export interface MobileTreeFlowProps {
  data: UseDesignStructureDataReturn;
}

export const MobileTreeFlow: React.FC<MobileTreeFlowProps> = ({ data }) => {
  const { ceoNode, cSuiteColumns, pudNode, ucoNode, usNode } = data;

  const cSuiteNodes = cSuiteColumns.flatMap((col) => [
    { node: col.head, isStaff: false },
    { node: col.staff, isStaff: true },
  ]);

  const specialUnitNodes = [
    { node: pudNode, isStaff: false },
    { node: ucoNode, isStaff: false },
    { node: usNode, isStaff: true },
  ];

  return (
    <div className="w-full flex flex-col md:hidden relative px-2 space-y-0">
      {/* 1. CEO Card (Leadership) */}
      <div className="flex flex-col items-center w-full z-10">
        <div className="w-full max-w-sm">
          <CardItem node={ceoNode} highlight levelBadge="LEVEL 1 — EXECUTIVE LEADERSHIP" />
        </div>
        {/* Connector Line from CEO down into Trunk */}
        <div className="w-[1px] h-8 bg-gray-800" />
      </div>

      {/* 2. Main Tree Wrapper with Continuous Left Vertical Trunk Line */}
      <div className="relative pl-7 sm:pl-9 space-y-6">
        {/* Continuous Left Vertical Stem */}
        <div className="absolute top-0 bottom-6 left-3 sm:left-4 w-[1px] bg-gray-800" />

        {/* Section Header: C-Suite Directors & Staff */}
        <div className="relative flex items-center space-x-3 pt-2 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 -ml-[21px] sm:-ml-[25px]" />
          <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase bg-transparent border border-white/10 px-3 py-1 rounded-full">
            DIRECTORS & DEPARTMENT STAFF
          </span>
        </div>

        {/* C-Suite & Staff Nodes Stacked */}
        <div className="space-y-4 pt-2">
          {cSuiteNodes.map((item, idx) => {
            if (!item.node) return null;
            return (
              <div key={idx} className="relative flex items-center pl-3">
                <div className="absolute top-1/2 -translate-y-1/2 left-[-16px] sm:left-[-20px] w-4 sm:w-5 h-[1px] bg-gray-800" />
                <div className="w-full">
                  <CardItem node={item.node} isStaff={item.isStaff} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Header: Special Unit */}
        <div className="relative flex items-center space-x-3 pt-6 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-gray-400 -ml-[21px] sm:-ml-[25px]" />
          <span className="text-[11px] font-bold tracking-widest text-gray-300 uppercase bg-transparent border border-white/10 px-3 py-1 rounded-full">
            SPECIAL UNIT — PRODUCTION DIVISION
          </span>
        </div>

        {/* Special Unit Nodes Stacked */}
        <div className="space-y-4 pt-2">
          {specialUnitNodes.map((item, idx) => {
            if (!item.node) return null;
            return (
              <div key={idx} className="relative flex items-center pl-3">
                <div className="absolute top-1/2 -translate-y-1/2 left-[-16px] sm:left-[-20px] w-4 sm:w-5 h-[1px] bg-gray-800" />
                <div className="w-full">
                  <CardItem node={item.node} isStaff={item.isStaff} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
