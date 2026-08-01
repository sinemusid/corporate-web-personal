'use client';

import React from 'react';
import Image from 'next/image';
import { HomeHeroData } from '../types';

interface HomeHeroProps {
  data: HomeHeroData;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <div className="relative w-full h-screen min-h-125 flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.backgroundImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-105"
        />
        {/* Smooth Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-bg-primary" />
      </div>

      {/* Hero Central Text */}
      <div className="relative z-10 space-y-4 sm:space-y-6 max-w-5xl mx-auto py-8">
        <h1 className="flex justify-center items-center drop-shadow-2xl">
          <Image
            src="/images/hero/sinemus-hero.png" 
            alt={data.title}
            width={600}
            height={150}
            priority
            className="h-12 sm:h-20 md:h-24 lg:h-32 object-contain"
          />
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-body font-light text-content-secondary tracking-wide max-w-2xl mx-auto drop-shadow-md">
          {data.tagline}
        </p>
      </div>
    </div>
  );
};
