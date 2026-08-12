import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HomeWhoWeAreData } from '../types';

interface HomeWhoWeAreProps {
  data: HomeWhoWeAreData;
}

export const HomeWhoWeAre: React.FC<HomeWhoWeAreProps> = ({ data }) => {
  const bgImage = data.backgroundImage || '/images/hero/sinemus_team_photo.jpg';

  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-950 px-6 sm:px-12 pb-12 sm:pb-16 lg:pb-0">

      {/* 1. Background Media Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-slate-950">
        {data.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 block w-full h-full object-cover object-center opacity-60"
          >
            <source src={data.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={bgImage}
            alt={data.subheading || 'Sinemus Indonesia'}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
        )}
      </div>

      {/* 2. Seamless Section Transition Gradients */}
      {/* Top-to-Bottom Subtle Blend Gradient from Hero Section 1 */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-20 sm:h-28 z-1 pointer-events-none bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent" 
      />

      {/* SpaceX-style Text legibility gradient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-slate-950/95 via-slate-950/75 via-40% to-transparent to-60% lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/65 lg:via-40% lg:to-transparent lg:to-55%" 
      />

      {/* 3. Text Content Container Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="space-y-4 sm:space-y-6 max-w-xl sm:max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight sm:leading-snug">
            {data.subheading}
          </h2>

          <p className="text-base sm:text-lg font-body font-normal text-slate-300 sm:text-blue-100 tracking-normal leading-relaxed">
            {data.description}
          </p>

          <div className="pt-2 sm:pt-4 flex justify-start">
            <Link
              href={data.ctaHref}
              className="inline-flex items-center px-6 py-3 sm:px-7 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:border-white/30 backdrop-blur-md font-body font-medium text-sm transition-all duration-300 group active:scale-95 cursor-pointer shadow-lg shadow-black/20"
            >
              <span>Selengkapnya</span>
              <ArrowRight className="ml-2 w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

