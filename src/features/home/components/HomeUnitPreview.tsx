'use client';

import React from 'react';
import Link from 'next/link';
import { HomeUnitPreviewData } from '../types';

interface HomeUnitPreviewProps {
  data: HomeUnitPreviewData;
  showTitleHeader?: boolean;
}

export const HomeUnitPreview: React.FC<HomeUnitPreviewProps> = ({ data, showTitleHeader = true }) => {
  return (
    <div className="space-y-6 sm:space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6">
      {showTitleHeader && (
        <div className="text-center max-w-4xl mx-auto space-y-3 px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-wider text-content-primary uppercase leading-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed max-w-3xl mx-auto">
            {data.subheading}
          </p>
        </div>
      )}

      {/* Diagram Branching Tree Architecture (as shown in image 2) */}
      <div className="hidden lg:flex flex-col items-center w-full mt-6 mb-2">
        {/* Node Badge */}
        <div className="px-6 py-2 rounded-full border border-white/40 bg-bg-elevated/90 text-white font-heading font-black text-xs sm:text-sm tracking-widest uppercase shadow-xl backdrop-blur-md z-10">
          LOGO SINEMUS INDONESIA
        </div>

        {/* Stem down from Node Badge */}
        <div className="w-[2px] h-8 bg-white/50" />

        {/* Horizontal Branching Line across 4 Columns */}
        <div className="w-[78%] max-w-[900px] h-[2px] bg-white/50 relative">
          {/* 4 Vertical Stems dropping to each of the 4 cards */}
          <div className="absolute top-0 left-0 w-full flex justify-between px-10">
            <div className="w-[2px] h-8 bg-white/50 transform -translate-x-1/2" />
            <div className="w-[2px] h-8 bg-white/50 transform -translate-x-1/2" />
            <div className="w-[2px] h-8 bg-white/50 transform -translate-x-1/2" />
            <div className="w-[2px] h-8 bg-white/50 transform translate-x-1/2" />
          </div>
        </div>
        <div className="h-8" />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.units.map((unit) => (
          <div
            key={unit.id}
            className="group relative rounded-3xl bg-bg-elevated/80 border border-white/20 p-6 flex flex-col justify-between hover:border-white/60 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full min-h-[300px] shadow-lg"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-content-secondary font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 inline-block">
                {unit.slug}
              </span>
              <h3 className="text-lg sm:text-xl font-heading font-black text-content-primary group-hover:text-white transition-colors uppercase tracking-tight">
                {unit.title}
              </h3>
              <p className="text-xs sm:text-sm font-body text-content-secondary font-light leading-relaxed line-clamp-4">
                {unit.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/units/${unit.slug}`}
                className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 bg-white/5 text-xs font-body font-semibold text-white hover:bg-white hover:text-black transition-all group-hover:border-white"
              >
                <span>Learn More</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">&gt;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
