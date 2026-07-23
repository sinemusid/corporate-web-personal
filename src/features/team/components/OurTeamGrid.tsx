import React from 'react';
import { TeamCard } from './TeamCard';
import { TeamMember } from '../types';

interface OurTeamGridProps {
  members: TeamMember[];
}

export const OurTeamGrid: React.FC<OurTeamGridProps> = ({ members }) => {
  return (
    <div className="space-y-8 my-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Leadership Team</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {members.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <button className="px-6 py-2 rounded-full border border-white/30 text-xs font-semibold text-white hover:bg-white hover:text-black transition-all flex items-center space-x-1">
          <span>View All Team</span>
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
};

