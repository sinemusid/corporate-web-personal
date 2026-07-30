import React from 'react';

/** Minimalist Node Joint Dot */
export const JointDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-2 h-2 rounded-full bg-gray-600 z-20 ${className}`} />
);

/** CEO Vertical Trunk Line */
export const CEOTrunkLine: React.FC = () => (
  <div className="flex flex-col items-center z-10">
    <div className="w-px h-8 bg-gray-700" />
    <JointDot className="-mt-1 hidden md:block" />
  </div>
);

/** Desktop C-Suite Horizontal Bus Line (4 Columns) */
export const DesktopCSuiteBusLine: React.FC = () => (
  <div className="hidden lg:block absolute top-0 left-[12%] right-[12%] h-px bg-gray-700" />
);

/** Tablet C-Suite Horizontal Bus Line (2 Columns) */
export const TabletCSuiteBusLine: React.FC = () => (
  <div className="hidden md:block lg:hidden absolute top-0 left-[25%] right-[25%] h-px bg-gray-700" />
);

/** Column Vertical Stem from Bus Line down into Card */
export const ColumnTopLine: React.FC = () => (
  <div className="hidden md:block absolute top-0 w-px h-9 bg-gray-700" />
);

/** Vertical Line connecting C-Suite Head card to Staff card */
export const ColumnStaffLine: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="w-px h-9 bg-gray-700" />
  </div>
);
