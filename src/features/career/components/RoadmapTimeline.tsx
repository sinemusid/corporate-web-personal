import React from 'react';
import { Card } from '@/components/ui/Card';
import { RoadmapMilestone } from '../types';

interface RoadmapTimelineProps {
  roadmap: RoadmapMilestone[];
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ roadmap }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Strategic Roadmap</h3>
        <p className="text-xs text-zinc-400 mt-1">Peta jalan pengembangan ekosistem Sinemus Indonesia jangka panjang.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roadmap.map((item) => (
          <Card key={item.id} className="space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-red-500 font-bold">{item.phase}</span>
              <span className="text-zinc-500">{item.year}</span>
            </div>
            <h4 className="font-bold text-white text-base">{item.title}</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
            <span
              className={`inline-block text-[10px] px-2 py-0.5 rounded font-mono ${
                item.status === 'completed'
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : item.status === 'in-progress'
                  ? 'bg-amber-950 text-amber-400 border border-amber-800'
                  : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              STATUS: {item.status.toUpperCase()}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};
