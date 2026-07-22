import React from 'react';
import { CompanyInfo } from '../types';

interface WhoWeAreProps {
  info: CompanyInfo;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ info }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-block px-3 py-1 bg-red-600/10 text-red-500 rounded-full text-xs font-semibold uppercase tracking-widest border border-red-600/20">
          Who We Are
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
          {info.tagline}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">{info.shortDescription}</p>
      </div>

      <div className="relative aspect-video rounded-2xl bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-end overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <div className="relative z-10 space-y-2">
          <span className="text-xs text-red-400 font-mono">SINEMUS ECOSYSTEM HUB</span>
          <p className="text-sm text-zinc-300 italic">{info.fullAbout}</p>
        </div>
      </div>
    </div>
  );
};
