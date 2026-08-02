'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';  
import { HomeUnitPreviewData } from '../types';

interface HomeUnitPreviewProps {
  data: HomeUnitPreviewData;
  showTitleHeader?: boolean;
}

export const HomeUnitPreview: React.FC<HomeUnitPreviewProps> = ({ data, showTitleHeader = true }) => {
  return (
    <div className="relative space-y-6 sm:space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6">
      {/* Top Ambient Glow Seamless Transition from Section 2 */}
      <div 
        className="pointer-events-none absolute -top-36 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-subtle/10 rounded-full blur-3xl opacity-50" 
        aria-hidden="true" 
      />

      {showTitleHeader && (
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-3 px-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-wider text-content-primary uppercase leading-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed max-w-3xl mx-auto">
            {data.subheading}
          </p>
        </div>
      )}

      {/* Diagram Branching Tree Architecture with Smooth Curved Corners */}
      <div className="hidden lg:flex flex-col items-center w-full mt-4 -mb-2 relative">
        {/* Node Badge */}
        <div className="px-6 py-2.5 rounded-full border border-white/30 bg-bg-elevated/90 shadow-xl backdrop-blur-md z-10 flex items-center justify-center min-w-50 hover:border-white/60 transition-colors">
          <Image
            src="/images/sinemus-indonesia.png"
            alt={data.heading || "Sinemus Indonesia"}
            width={180}
            height={40}
            priority
            className="h-8 sm:h-9 w-auto object-contain brightness-110"
          />
        </div>

        {/* Curved Tree Diagram SVG Connector */}
        <div className="w-full h-16 relative mt-1">
          <svg className="w-full h-full pointer-events-none" viewBox="0 0 1000 64" fill="none" preserveAspectRatio="none">
            {/* Top Vertical Stem from Node Badge */}
            <path d="M 500 0 V 20" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />

            {/* Main Outer Curved Branching Line (Connecting Left & Right Outer Cards with Smooth Rounded Corners) */}
            <path
              d="M 125 64 V 34 Q 125 20 141 20 H 859 Q 875 20 875 34 V 64"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Inner Card 2 Vertical Drop Line */}
            <path d="M 375 20 V 64" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />

            {/* Inner Card 3 Vertical Drop Line */}
            <path d="M 625 20 V 64" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.units.map((unit) => (
          <div
            key={unit.id}
            className="group relative rounded-3xl bg-bg-elevated/80 border border-white/20 p-6 flex flex-col justify-between hover:border-white/60 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full min-h-75 shadow-lg"
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
                <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
