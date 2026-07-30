import React from 'react';

/** Minimalist Node Joint Dot */
export const JointDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-2.5 h-2.5 rounded-full bg-gray-600 z-20 ${className}`} />
);

/** CEO Vertical Trunk Line */
export const CEOTrunkLine: React.FC = () => (
  <div className="flex flex-col items-center z-10 -mb-1">
    <div className="w-[1px] h-10 bg-gray-800" />
    <JointDot className="-mt-1 hidden md:block" />
  </div>
);

/** Desktop C-Suite Horizontal Bus Line (4 Columns) */
export const DesktopCSuiteBusLine: React.FC = () => (
  <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-gray-800" />
);

/** Tablet C-Suite Horizontal Bus Line (2 Columns) */
export const TabletCSuiteBusLine: React.FC = () => (
  <div className="hidden md:block lg:hidden absolute top-0 left-[25%] right-[25%] h-[1px] bg-gray-800" />
);

/** Column Vertical Stem from Bus Line down into Card */
export const ColumnTopLine: React.FC = () => (
  <div className="hidden md:block absolute -top-8 w-[1px] h-8 bg-gray-800" />
);

/** Vertical Line connecting C-Suite Head card to Staff card */
export const ColumnStaffLine: React.FC = () => (
  <div className="flex flex-col items-center my-2">
    <div className="w-[1px] h-6 bg-gray-800" />
  </div>
);

/** Bridge connector between C-Suite/CTO and Production Division */
export const CTOToSpecialUnitBridge: React.FC = () => (
  <>
    <div className="w-full relative h-16 hidden lg:block">
      <div className="absolute top-0 left-[62.5%] w-[1px] h-8 bg-[#1e293b]" />
      <div className="absolute top-8 left-[50%] w-[12.5%] h-[1px] bg-[#1e293b]" />
      <div className="absolute top-8 left-[50%] w-[1px] h-8 bg-[#1e293b] flex flex-col items-center">
        <JointDot className="mt-6" />
      </div>
    </div>

    <div className="w-full relative h-14 hidden md:flex lg:hidden justify-center items-center">
      <div className="w-[1px] h-full bg-[#1e293b] flex flex-col items-center justify-end">
        <JointDot className="-mb-1" />
      </div>
    </div>
  </>
);
