import React from 'react';
import { Card } from '@/components/ui/Card';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="text-center space-y-4 hover:border-red-600/40 transition-all">
      <div className="w-24 h-24 mx-auto rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center font-bold text-zinc-500 font-mono text-lg overflow-hidden">
        <span>{member.name.substring(0, 2).toUpperCase()}</span>
      </div>
      <div>
        <h4 className="text-base font-bold text-white">{member.name}</h4>
        <p className="text-xs text-red-500 font-medium">{member.role}</p>
        <span className="text-[10px] text-zinc-500 block mt-0.5">{member.department}</span>
      </div>
      <p className="text-xs text-zinc-400 line-clamp-3">{member.bio}</p>
    </Card>
  );
};
