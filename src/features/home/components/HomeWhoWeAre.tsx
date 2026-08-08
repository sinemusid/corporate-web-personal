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
    <div className="relative w-full overflow-hidden bg-blue-950 py-20 sm:py-28">

      {/* Background Media Container (Full screen width & height like HomeHero) */}
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
            src={bgImage}
            alt={data.subheading}
            fill
            priority
            className="object-cover object-center opacity-30"
          />
        )}
      </div>

      {/* Left-aligned Content Container matching Navbar alignment (px-6 sm:px-12 max-w-7xl) */}
      <div className="relative z-10 w-full max-w-10xl mx-auto px-6 sm:px-12">
        <div className="space-y-6 max-w-3xl text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight">
            {data.subheading}
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-body font-normal text-blue-200 tracking-wide leading-relaxed">
            {data.description}
          </p>

          <div className="pt-4 flex justify-start">
            <Link
              href={data.ctaHref}
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-500 font-body font-semibold text-sm transition-all duration-300 group shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer"
            >
              <span>Selengkapnya</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
