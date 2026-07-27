'use client';

import React from 'react';
import Image from 'next/image';
import { OurTeamData } from '../types';

interface OurTeamGridProps {
  data: OurTeamData;
}

export const OurTeamGrid: React.FC<OurTeamGridProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-xl mx-auto">{data.subheading}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.members.map((member) => (
          <div
            key={member.id}
            className="p-5 rounded-2xl bg-bg-elevated border border-borderToken-subtle space-y-4 hover:border-borderToken-default transition-colors"
          >
            <div className="relative h-48 w-full rounded-xl overflow-hidden bg-bg-tertiary">
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-heading font-bold text-content-primary">{member.name}</h3>
              <p className="text-xs font-mono text-content-secondary font-medium">{member.role}</p>
              <p className="text-[11px] font-body text-content-tertiary font-light leading-relaxed pt-1">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
