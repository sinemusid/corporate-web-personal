import React from 'react';
import Image from 'next/image';
import { TeamMemberData } from '../../types';

interface TeamMemberCardProps {
  member: TeamMemberData;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const badgeText = member.departmentBadge || member.department;

  return (
    <div className="w-full h-full bg-transparent border border-white/10 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.1)] backdrop-blur-sm rounded-2xl p-5 flex flex-col justify-between space-y-4 transition-all duration-300 group relative overflow-hidden">
      {/* Top Section: Photo & Badge */}
      <div className="space-y-4">
        <div className="relative h-56 w-full rounded-xl overflow-hidden bg-white/5 border border-white/5 group-hover:border-amber-500/20 transition-colors">
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {badgeText && (
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-500 border border-amber-500/30">
                {badgeText}
              </span>
            </div>
          )}
        </div>

        {/* Identity & Role */}
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-bold font-heading text-white uppercase tracking-wide group-hover:text-amber-500 transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-mono text-amber-500/90 font-medium tracking-wide">
            {member.role}
          </p>
        </div>

        {/* Descriptive Bio */}
        <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {member.bio}
        </p>
      </div>

      {/* Footer Section: Skills & Socials */}
      <div className="pt-2 space-y-3 border-t border-white/5">
        {member.skills && member.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="text-[10px] font-medium text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {member.socials && member.socials.length > 0 && (
          <div className="flex items-center gap-3 pt-1">
            {member.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-wider"
              >
                {social.type}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
