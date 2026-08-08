import React from 'react';

/** Minimalist Node Joint Dot */
/** Minimalist Node Joint Dot */
export const JointDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100/80 z-20 ${className}`} />
);

/** CEO Vertical Trunk Line */
export const CEOTrunkLine: React.FC = () => (
  <div className="flex flex-col items-center z-10">
    <div className="w-[1px] h-8 bg-slate-300" />
    <JointDot className="-mt-1.5 hidden md:block" />
  </div>
);

/** Desktop C-Suite Horizontal Bus Line (4 Columns) */
export const DesktopCSuiteBusLine: React.FC = () => (
  <div className="hidden lg:block absolute top-0 left-[12%] right-[12%] h-[1px] bg-slate-300" />
);

/** Tablet C-Suite Horizontal Bus Line (2 Columns) */
export const TabletCSuiteBusLine: React.FC = () => (
  <div className="hidden md:block lg:hidden absolute top-0 left-[25%] right-[25%] h-[1px] bg-slate-300" />
);

/** Column Vertical Stem from Bus Line down into Card */
export const ColumnTopLine: React.FC = () => (
  <div className="hidden md:block absolute top-0 w-[1px] h-9 bg-slate-300" />
);

/** Vertical Line connecting C-Suite Head card to Staff card */
export const ColumnStaffLine: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="w-[1px] h-8 bg-slate-300" />
  </div>
);
