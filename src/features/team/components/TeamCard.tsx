import React from 'react';
import Image from 'next/image';
import { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="group rounded-2xl overflow-hidden bg-zinc-900/60 border border-zinc-800 p-3 space-y-3 text-center backdrop-blur-md hover:border-zinc-700 transition-all duration-300">
      <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-zinc-950">
        <Image
          src={member.avatarUrl}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="py-1">
        <h4 className="text-sm font-bold text-white tracking-tight">{member.name}</h4>
        <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{member.role}</p>
      </div>
    </div>
  );
};

