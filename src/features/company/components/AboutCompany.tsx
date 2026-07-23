import React from 'react';
import { Sparkles, ShieldCheck, Share2 } from 'lucide-react';
import { CompanyInfo } from '../types';

interface AboutCompanyProps {
  info: CompanyInfo;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ info }) => {
  const valueIcons = [<Sparkles key="1" className="w-6 h-6 text-sky-400" />, <ShieldCheck key="2" className="w-6 h-6 text-sky-400" />, <Share2 key="3" className="w-6 h-6 text-sky-400" />];

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      {/* Header & Description */}
      <div className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">About Us</h1>
        <h2 className="text-lg sm:text-xl font-medium text-zinc-300">Tentang Sinemus Indonesia</h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-3xl">
          {info.fullAbout}
        </p>
      </div>

      {/* 3 Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.values.map((val, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 backdrop-blur-md space-y-4 hover:border-zinc-700 transition-colors"
          >
            <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-800/50 w-fit">
              {valueIcons[idx % valueIcons.length]}
            </div>
            <h3 className="text-lg font-bold text-white">{val.title}</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">{val.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

