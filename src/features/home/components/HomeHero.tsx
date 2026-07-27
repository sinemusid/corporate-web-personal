'use client';

import React from 'react';
import Image from 'next/image';
import { HomeHeroData } from '../types';

interface HomeHeroProps {
  data: HomeHeroData;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-105"
        />
        {/* Top & Bottom Vignette Overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-bg-primary/90 via-bg-primary/40 to-bg-primary" />
      </div>

      {/* Hero Central Text */}
      <div className="relative z-10 space-y-4 max-w-4xl mx-auto py-20">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-widest text-content-primary uppercase drop-shadow-2xl">
          {data.title}
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-body font-light text-content-secondary tracking-wide max-w-2xl mx-auto drop-shadow-md">
          {data.tagline}
        </p>
      </div>
    </div>
  );
};
