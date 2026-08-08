'use client';

import React from 'react';
import { VisionMissionValueData } from '../types';

interface VisionMissionValueProps {
  data: VisionMissionValueData;
}

export const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ data }) => {
  return (
    <div className="relative max-w-6xl mx-auto select-none py-6">
      <div className="relative z-10 space-y-10">
        <fieldset className="rounded-3xl border border-slate-200 bg-white shadow-xs px-6 py-6 sm:px-10 sm:py-8 text-center transition-colors">
          <legend className="mx-auto px-6 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-widest text-white bg-blue-600 uppercase font-heading shadow-md shadow-blue-600/20">
            {data.visionTitle || 'VISI'}
          </legend>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 font-body leading-relaxed max-w-4xl mx-auto pt-3 pb-2 font-normal">
            {data.visionText}
          </p>
        </fieldset>

        <fieldset className="rounded-3xl border border-slate-200 bg-white shadow-xs px-4 py-6 sm:px-6 sm:py-8 transition-colors">
          <legend className="mx-auto px-6 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-widest text-white bg-blue-600 uppercase font-heading shadow-md shadow-blue-600/20">
            {data.missionTitle || 'MISI'}
          </legend>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
              data.missions.length === 6
                ? 'lg:grid-cols-6'
                : data.missions.length === 4
                ? 'lg:grid-cols-4'
                : 'lg:grid-cols-3'
            } divide-y sm:divide-y-0 ${
              data.missions.length === 6
                ? 'lg:divide-x'
                : data.missions.length === 4
                ? 'lg:divide-x'
                : 'md:divide-x'
            } divide-slate-200 text-center w-full items-stretch pt-3 pb-2`}
          >
            {data.missions.map((m, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 sm:p-5 w-full h-full text-center"
              >
                <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed max-w-4xl mx-auto font-normal">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
};
