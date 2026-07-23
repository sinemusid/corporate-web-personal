import React from 'react';
import { RoadmapMilestone } from '../types';

interface RoadmapTimelineProps {
  roadmap: RoadmapMilestone[];
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ roadmap }) => {
  return (
    <div className="space-y-12 my-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Roadmap</h2>

      <div className="relative pt-6">
        {/* Horizontal Connecting Line */}
        <div className="hidden lg:block absolute top-[34px] left-[10%] right-[10%] h-0.5 bg-zinc-800 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {roadmap.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center space-y-3">
              {/* Timeline Dot */}
              <div className="w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.5)] my-2" />

              <span className="text-xs font-mono text-zinc-400">{item.year}</span>
              <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

