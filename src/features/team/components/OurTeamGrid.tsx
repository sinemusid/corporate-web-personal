import React from 'react';
import { TeamCard } from './TeamCard';
import { TeamMember } from '../types';

interface OurTeamGridProps {
  members: TeamMember[];
}

export const OurTeamGrid: React.FC<OurTeamGridProps> = ({ members }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Our Team (Jajaran Kepemimpinan)</h3>
        <p className="text-xs text-zinc-400 mt-1">Kreator dan profesional industri di balik Sinemus Indonesia.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
