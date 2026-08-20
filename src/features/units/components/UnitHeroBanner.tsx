import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { BusinessUnit } from '../types';
import { MOCK_UNITS } from '../constants/units-mock';

interface UnitHeroBannerProps {
  unit?: BusinessUnit;
}

export const UnitHeroBanner: React.FC<UnitHeroBannerProps> = ({
  unit = MOCK_UNITS[0],
}) => {
  const heroImage = unit.bannerUrl || '/images/hero/bg-unit-preview.jpeg';

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[85vh] lg:min-h-[85vh] flex flex-col justify-end lg:justify-center bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      {/* Background Image Layer - Full Width */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={heroImage}
          alt={`${unit.title} Hero Background`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-30 mix-blend-luminosity scale-105"
        />
      </div>

      {/* Top subtle blend gradient */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-20 sm:h-28 z-1 pointer-events-none bg-gradient-to-b from-slate-950 via-slate-950/50 to-transparent" 
      />

      {/* SpaceX/Who-We-Are style Text legibility gradient */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-t from-slate-950/95 via-slate-950/75 via-40% to-transparent to-60% lg:bg-gradient-to-r lg:from-slate-950/95 lg:via-slate-950/65 lg:via-40% lg:to-transparent lg:to-55%" 
      />

      {/* Main Container Aligned directly with Navbar (w-full px-6 sm:px-12) */}
      <div className="relative z-10 w-full px-6 sm:px-12 space-y-4 lg:space-y-6">
        {/* Breadcrumb Navigation - Positioned closer to Navbar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/#units" className="hover:text-blue-400 transition-colors">
            Unit Bisnis
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">{unit.title}</span>
        </nav>

        {/* Content & Stat Grid Horizontal Container */}
        <div className="space-y-6 sm:space-y-8 pt-2">
          {/* Top Block: Heading, Subtitle & Narrative Description */}
          <div className="space-y-4 sm:space-y-5 max-w-4xl">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase font-heading">
                {unit.title}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-blue-400 font-sans tracking-wide">
                {unit.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl sm:max-w-3xl leading-relaxed font-body">
              {unit.about || unit.description}
            </p>
          </div>

          {/* Action Buttons (External Link if available) */}
          {unit.externalUrl && (
            <div className="pt-2">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
                <a
                  href={unit.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500/50 font-medium rounded-xl text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  Kunjungi Website Unit
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
