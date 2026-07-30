import React from 'react';
import { TeamMemberData } from '../../types';
import { TeamMemberCard } from './TeamMemberCard';

interface StaffDireksiSectionProps {
  members: TeamMemberData[];
  visibleMembers: TeamMemberData[];
  hasMore: boolean;
  limit: number;
  totalCount: number;
  onLoadMore: () => void;
  onShowLess: () => void;
}

export const StaffDireksiSection: React.FC<StaffDireksiSectionProps> = ({
  members,
  visibleMembers,
  hasMore,
  limit,
  totalCount,
  onLoadMore,
  onShowLess,
}) => {
  if (members.length === 0) return null;

  return (
    <div className="space-y-6 pt-6 border-t border-white/10">
      {/* Sub-header Badge */}
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
          STAFF DIREKSI
        </span>
      </div>

      {/* Grid Staff Direksi (Portrait Cards Uniform) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {visibleMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>

      {/* Show More / Show Less Button Controls */}
      <div className="flex flex-col items-center justify-center pt-2 space-y-2">
        {hasMore ? (
          <button
            onClick={onLoadMore}
            className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/15 hover:border-amber-500/50 hover:text-amber-500 text-gray-200 transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center gap-2 group"
          >
            <span>Show More Staff Direksi</span>
            <span className="text-[10px] text-amber-500 font-mono">({visibleMembers.length}/{totalCount})</span>
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
