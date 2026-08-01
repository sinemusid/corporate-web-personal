'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HomeWhoWeAreData } from '../types';

interface HomeWhoWeAreProps {
  data: HomeWhoWeAreData;
  backgroundImage?: string;
}

export const HomeWhoWeAre: React.FC<HomeWhoWeAreProps> = ({
  data,
  backgroundImage = '/images/hero/sinemus_team_photo.jpg',
}) => {
  return (
    <div className="relative w-full h-screen min-h-150 flex items-center overflow-hidden bg-[#09090b]">
      {/* Background Image Container (Spans full right half to edge) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={data.subheading}
          fill
          priority
          className="object-cover object-right filter brightness-90 contrast-105"
        />
      </div>

      {/* Multi-step Feathered Shadow Gradient Mask from Solid Black on Left to Transparent on Right */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#09090b_0%,#09090b_28%,rgba(9,9,11,0.98)_38%,rgba(9,9,11,0.85)_48%,rgba(9,9,11,0.4)_62%,rgba(9,9,11,0.1)_75%,transparent_88%)]" />

      {/* Top and Bottom Subtle Vignette Shadows */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(9,9,11,0.7)_0%,transparent_18%,transparent_82%,rgba(9,9,11,0.85)_100%)] pointer-events-none" />

      {/* Left-Aligned Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl space-y-6 text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-content-primary uppercase tracking-tight leading-tight">
            {data.subheading}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-content-secondary font-body font-light leading-relaxed max-w-md sm:max-w-lg">
            {data.description}
          </p>

          <div className="pt-4">
            <Link
              href={data.ctaHref}
              className="inline-flex items-center px-7 py-3 rounded-full border border-white/60 bg-transparent text-white hover:bg-white hover:text-black font-body font-semibold text-sm transition-all duration-300 group shadow-lg"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
