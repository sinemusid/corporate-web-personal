'use client';

import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
      {/* Background Image: Woman with yellow hijab */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/khoas_poster.png"
          alt="Sinemus Khoas Poster"
          fill
          priority
          className="object-cover object-center filter brightness-[0.45] contrast-105"
        />
        {/* Top & Bottom Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/40 to-zinc-950" />
      </div>

      {/* Hero Central Text */}
      <div className="relative z-10 space-y-4 max-w-4xl mx-auto py-20">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-widest text-white uppercase drop-shadow-2xl">
          SINEMUS
        </h1>
        <p className="text-sm sm:text-lg md:text-xl font-light text-zinc-200 tracking-wide max-w-2xl mx-auto drop-shadow-md">
          One Ecosystem, Many Stories, For Everyone
        </p>
      </div>
    </section>
  );
};
