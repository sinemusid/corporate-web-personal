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
      <div className="relative z-10 max-w-5xl mx-auto py-6 sm:py-8 lg:py-12 flex flex-col items-center justify-center">
        <h1 className="flex justify-center items-center">
          <span className="sr-only">{data.title} - {data.tagline}</span>
          <Image
            src="/images/hero/sinemus-hero-v2.png"
            alt={`${data.title} - ${data.tagline}`}
            width={625}
            height={168}
            priority
            className="w-auto h-20 sm:h-28 md:h-36 lg:h-48 object-contain drop-shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
          />
        </h1>
      </div>

    </div>
  );
};
