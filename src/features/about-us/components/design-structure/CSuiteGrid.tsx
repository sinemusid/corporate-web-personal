import React from 'react';
import { CardItem } from './CardItem';
import {
  DesktopCSuiteBusLine,
  TabletCSuiteBusLine,
  ColumnStaffLine,
} from './ConnectorLines';
import { CSuiteColumnData } from './hooks/useDesignStructureData';

export interface CSuiteGridProps {
  columns: CSuiteColumnData[];
}

export const CSuiteGrid: React.FC<CSuiteGridProps> = ({ columns }) => {
  return (
    <div className="w-full relative mt-0 max-w-7xl hidden md:block">
      <DesktopCSuiteBusLine />
      <TabletCSuiteBusLine />
      {/* Top Trunk line connecting JointDot to BusLine */}
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-gray-700 hidden md:block" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-6 lg:gap-x-4 relative pt-8 w-full">
        {columns.map((col, idx) => (
          <div key={idx} className="flex flex-col items-center relative px-2 lg:px-4 w-full">
            <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-gray-700" />

            <div className="w-full h-full">
              <CardItem node={col.head} />
            </div>

            <ColumnStaffLine />
            <div className="w-full h-full">
              <CardItem node={col.staff} isStaff />
            </div>

            {idx < 2 && (
              <div className="hidden md:block lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
