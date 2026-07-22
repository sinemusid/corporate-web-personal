import React from 'react';
import { MilestoneItem } from '../types';

interface MilestonesTimelineProps {
  milestones: MilestoneItem[];
}

export const MilestonesTimeline: React.FC<MilestonesTimelineProps> = ({ milestones }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white text-center">Milestones Perusahaan</h3>
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-zinc-800">
        {milestones.map((item, idx) => (
          <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-between">
            <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:order-2 md:pl-8'} pl-10 md:pl-0`}>
              <span className="text-xs font-mono text-red-500 font-bold">{item.year}</span>
              <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-zinc-400">{item.description}</p>
            </div>
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border-4 border-zinc-950" />
            <div className="hidden md:block w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
};
