import React from 'react';
import {
  Compass,
  Clapperboard,
  Layers,
  MonitorPlay,
  HeartHandshake,
  Award,
  Globe2,
} from 'lucide-react';
import { FadeIn, FadeInStagger, MotionCard } from '@/components/motion';
import { VisionMissionValueData } from '../types';

interface VisionMissionValueProps {
  data: VisionMissionValueData;
}

const MISSION_ICONS = [
  { icon: Clapperboard, label: 'Narasi Sinema' },
  { icon: Layers, label: 'Ekosistem Terpadu' },
  { icon: MonitorPlay, label: 'Distribusi Digital' },
  { icon: HeartHandshake, label: 'Komunitas Kreator' },
  { icon: Award, label: 'Akademi & Talenta' },
  { icon: Globe2, label: 'Standar Global' },
];

export const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ data }) => {
  return (
    <div className="relative max-w-6xl mx-auto select-none py-6 space-y-12 sm:space-y-16">
      {/* 1. CINEMATIC VISION SECTION */}
      <FadeIn direction="up" className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-12 md:p-14 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 overflow-hidden group">
        {/* Decorative Film Reel SVG Background Watermark */}
        <div
          aria-hidden="true"
          className="absolute -right-12 -bottom-12 w-64 h-64 sm:w-80 sm:h-80 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none text-slate-900 select-none"
        >
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full">
            <circle cx="100" cy="100" r="90" strokeWidth="3" />
            <circle cx="100" cy="100" r="32" strokeWidth="3" fill="currentColor" fillOpacity="0.1" />
            <circle cx="100" cy="45" r="14" strokeWidth="2.5" />
            <circle cx="155" cy="100" r="14" strokeWidth="2.5" />
            <circle cx="100" cy="155" r="14" strokeWidth="2.5" />
            <circle cx="45" cy="100" r="14" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="8" fill="currentColor" />
          </svg>
        </div>

        {/* Vision Header Label */}
        <div className="relative z-10 flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
            {data.visionTitle || 'VISI PERUSAHAAN'}
          </span>
        </div>

        {/* Editorial Vision Quote with Accent Border */}
        <div className="relative z-10 border-l-4 border-blue-600 pl-6 sm:pl-8 py-1 space-y-3">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-900 font-heading font-semibold leading-relaxed tracking-tight">
            &ldquo;{data.visionText}&rdquo;
          </p>
          <p className="text-xs sm:text-sm font-mono font-medium text-slate-500 tracking-wide pt-1">
            — Arah Strategis &amp; Komitmen Ekosistem Sinemus Indonesia
          </p>
        </div>
      </FadeIn>

      {/* 2. STRATEGIC MISSION PILLARS */}
      <div className="space-y-8">
        {/* Clean Executive Section Title */}
        <FadeIn direction="up" className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-slate-900 uppercase tracking-tight">
            {data.missionTitle || 'Misi Perusahaan'}
          </h2>
        </FadeIn>

        {/* 3x2 Responsive Pillar Grid */}
        <FadeInStagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {data.missions.map((mission, idx) => {
            const IconComponent = MISSION_ICONS[idx]?.icon || Clapperboard;

            return (
              <MotionCard
                key={idx}
                className="group relative rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 text-left flex flex-col justify-between space-y-5 hover:border-blue-500 hover:shadow-xl transition-colors duration-300 overflow-hidden shadow-xs"
              >
                {/* Top Header: Icon & Pillar Step */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xs font-mono font-extrabold text-slate-400 group-hover:text-blue-600 tracking-wider transition-colors">
                    PILAR {(idx + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Pillar Statement */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {mission}
                  </h3>
                </div>

                {/* Bottom Visual Accent Bar */}
                <div className="pt-2">
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-blue-600 transition-all duration-500 ease-out" />
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </FadeInStagger>
      </div>
    </div>
  );
};
