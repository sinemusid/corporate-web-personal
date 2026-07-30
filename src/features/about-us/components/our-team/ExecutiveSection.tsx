import React from 'react';
import { TeamMemberData } from '../../types';
import { TeamMemberCard } from './TeamMemberCard';

interface ExecutiveSectionProps {
  executives: TeamMemberData[];
  visibleExecutives: TeamMemberData[];
  hasMore: boolean;
  limit: number;
  totalCount: number;
  onLoadMore: () => void;
  onShowLess: () => void;
}

export const ExecutiveSection: React.FC<ExecutiveSectionProps> = ({
  executives,
  visibleExecutives,
  hasMore,
  limit,
  totalCount,
  onLoadMore,
  onShowLess,
}) => {
  if (executives.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Sub-header Badge */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
          EXECUTIVE LEADERSHIP & DIREKSI
        </span>
      </div>

      {/* Grid 4 Kolom Portrait Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {visibleExecutives.map((exec) => (
          <TeamMemberCard key={exec.id} member={exec} />
        ))}
      </div>

      {/* Show More / Show Less Button Controls */}
      <div className="flex flex-col items-center justify-center pt-2 space-y-2">
        {hasMore ? (
          <button
            onClick={onLoadMore}
            className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/15 hover:border-amber-500/50 hover:text-amber-500 text-gray-200 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center gap-2 group"
          >
            <span>Show More Leadership</span>
            <span className="text-[10px] text-amber-500 font-mono">({visibleExecutives.length}/{totalCount})</span>
          </button>
        ) : limit > 4 ? (
          <button
            onClick={onShowLess}
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/15 hover:border-gray-400 text-gray-400 transition-all duration-300 backdrop-blur-md"
          >
            Show Less
          </button>
        ) : null}
      </div>
    </div>
  );
};
