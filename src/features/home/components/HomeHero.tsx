import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { HomeHeroData } from '../types';

interface HomeHeroProps {
  data: HomeHeroData;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ data }) => {
  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center bg-slate-950 pt-20">
      {/* Background Media with Ambient Tone */}
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
            className="object-cover object-center opacity-35"
          />
        )}
      </div>

      {/* Cinematic Ambient Glow & Vignette */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-1 pointer-events-none bg-radial from-blue-900/10 via-slate-950/60 to-slate-950/90" 
      />

      {/* Subtle Bottom-to-Top Transition Gradient to Section 2 (Who We Are) */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 z-2 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" 
      />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto py-8 sm:py-12 flex flex-col items-center justify-center space-y-6">
        <h1 className="flex justify-center items-center">
          <span className="sr-only">{data.title} - {data.tagline}</span>
          <Image
            src="/images/hero/sinemus-hero-v2.png"
            alt={`${data.title} - ${data.tagline}`}
            width={625}
            height={168}
            priority
            className="w-auto h-20 sm:h-28 md:h-36 lg:h-44 object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
          />
        </h1>
      </div>

      {/* Subtle Downward Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 z-10 flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Scroll</span>
        <ChevronDown className="w-4 h-4 text-blue-400 animate-bounce" />
      </div>
    </div>
  );
};
