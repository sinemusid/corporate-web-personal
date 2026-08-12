import React from 'react';
import Image from 'next/image';
import { HomeHeroData } from '../types';

interface HomeHeroProps {
  data: HomeHeroData;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center bg-slate-950 pt-20">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {data.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 block w-full h-full object-cover object-center opacity-40"
          >
            <source src={data.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={data.backgroundImage}
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
        )}
      </div>

      {/* Subtle Bottom-to-Top Transition Gradient to Section 2 (Who We Are) */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 z-1 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" 
      />

      {/* Hero Central Text */}
      <div className="relative z-10 space-y-3 sm:space-y-4 lg:space-y-7 max-w-5xl mx-auto py-6 sm:py-8 lg:py-12">
        <h1 className="flex justify-center items-center">
          <span className="sr-only">{data.title}</span>
          <Image
            src="/images/hero/sinemus-hero.png"
            alt={data.title}
            width={600}
            height={150}
            priority
            className="h-9 sm:h-14 md:h-20 lg:h-32 object-contain brightness-0 invert drop-shadow-[0_2px_24px_rgba(255,255,255,0.08)]"
          />
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-xl font-body font-normal text-blue-200 tracking-wide max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto leading-relaxed">
          {data.tagline}
        </p>
      </div>

    </div>
  );
};
