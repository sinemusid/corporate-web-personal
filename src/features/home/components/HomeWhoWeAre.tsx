import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/motion';
import { HomeWhoWeAreData } from '../types';

interface HomeWhoWeAreProps {
  data: HomeWhoWeAreData;
}

export const HomeWhoWeAre: React.FC<HomeWhoWeAreProps> = ({ data }) => {
  const bgImage = data.backgroundImage || '/images/hero/sinemus_team_photo.jpg';

  return (
    <div className="relative w-full min-h-[85vh] sm:min-h-screen flex flex-col justify-end lg:justify-center overflow-hidden bg-slate-950 px-6 sm:px-12 pb-14 sm:pb-18 lg:pb-0">

      {/* 1. Background Media Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none bg-slate-950">
        {data.backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            className="absolute inset-0 block w-full h-full object-cover object-center opacity-55"
          >
            <source src={data.backgroundVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={bgImage}
            alt={data.subheading || 'Sinemus Indonesia Team'}
            fill
            sizes="100vw"
            quality={70}
            className="object-cover object-center opacity-50"
          />
        )}
      </div>

      {/* 2. Top-to-Bottom Blend Gradient from Hero Section */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-28 sm:h-36 z-1 pointer-events-none bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent"
      />

      {/* 3. Multi-Directional Gradient Mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/80 via-40% to-transparent to-70% lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/75 lg:via-45% lg:to-transparent lg:to-65%"
      />

      {/* 4. Text Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn direction="up" delay={0.1} className="space-y-5 sm:space-y-6 max-w-xl sm:max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight sm:leading-snug">
            {data.subheading}
          </h2>

          <p className="text-base sm:text-lg font-body font-normal text-slate-300 tracking-normal leading-relaxed">
            {data.description}
          </p>

          <div className="pt-2 sm:pt-4 flex justify-start">
            <Link
              href={data.ctaHref}
              aria-label="Tentang Kami - Profil Sinemus Indonesia"
              className="inline-flex items-center px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-heading font-semibold text-sm transition-all duration-300 group active:scale-95 cursor-pointer shadow-lg shadow-blue-900/30 hover:shadow-blue-600/20"
            >
              <span>{data.ctaText || 'Tentang Kami'}</span>
              <ArrowRight className="ml-2 w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>

    </div>
  );
};
