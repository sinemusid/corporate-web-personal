import React from 'react';
import { CheckCircle2, Globe, Video, Share2 } from 'lucide-react';
import { CompanyInfo } from '../types';

interface VisionMissionValueProps {
  info: CompanyInfo;
}

export const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ info }) => {
  const socials = [
    { name: 'Website', label: 'sinemus.co.id', icon: <Globe className="w-4 h-4 text-sky-400" />, href: 'https://sinemus.co.id' },
    { name: 'Instagram', label: '@sinemus.id', icon: <Share2 className="w-4 h-4 text-sky-400" />, href: '#' },
    { name: 'Youtube', label: 'Sinemus Indonesia', icon: <Video className="w-4 h-4 text-sky-400" />, href: '#' },
    { name: 'Twitter', label: '@sinemus_id', icon: <Share2 className="w-4 h-4 text-sky-400" />, href: '#' },
    { name: 'LinkedIn', label: 'Sinemus Indonesia', icon: <Globe className="w-4 h-4 text-sky-400" />, href: '#' },
  ];



  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Large Vision statement & Mission Checkmarks */}
      <div className="lg:col-span-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          {info.vision}
        </h2>

        <div className="space-y-4 pt-2">
          {info.mission.map((m, idx) => (
            <div key={idx} className="flex items-start space-x-3 text-zinc-300">
              <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <span className="text-sm font-light leading-relaxed">{m}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Social Channels Card */}
      <div className="lg:col-span-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 space-y-4 backdrop-blur-md">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-3">
          Kanal Resmi
        </h3>
        <ul className="space-y-3">
          {socials.map((s, idx) => (
            <li key={idx}>
              <a
                href={s.href}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-zinc-800/60 text-xs text-zinc-300 hover:text-white transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {s.icon}
                  <span className="font-medium">{s.name}</span>
                </div>
                <span className="text-zinc-500 font-mono text-[11px]">{s.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

