import React from 'react';
import Image from 'next/image';
import { HomeHeroData } from '../types';

interface HomeHeroProps {
  data: HomeHeroData;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center bg-blue-950 pt-20">

      {/* Background Media — Video if available, fallback to Image */}
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
            <source src="/images/hero/Video-screen-1.mov" type="video/quicktime" />
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

      {/* Hero Central Text */}
      <div className="relative z-10 space-y-5 sm:space-y-7 max-w-5xl mx-auto py-12">
        <h1 className="flex justify-center items-center">
          <span className="sr-only">{data.title}</span>
          <Image
            src="/images/hero/sinemus-hero.png"
            alt={data.title}
            width={600}
            height={150}
            priority
            className="h-14 sm:h-20 md:h-24 lg:h-32 object-contain brightness-0 invert drop-shadow-[0_2px_24px_rgba(255,255,255,0.08)]"
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-body font-normal text-blue-200 tracking-wide max-w-2xl mx-auto leading-relaxed">
          {data.tagline}
        </p>
      </div>

    </div>
  );
};
