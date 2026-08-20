import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { HomeUnitPreviewData } from '../types';

interface HomeUnitPreviewProps {
  data: HomeUnitPreviewData;
  showTitleHeader?: boolean;
}

export const HomeUnitPreview: React.FC<HomeUnitPreviewProps> = ({ data, showTitleHeader = true }) => {
  return (
    <div className="relative space-y-6 sm:space-y-8 w-full">

      {showTitleHeader && (
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-2.5 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-slate-900 leading-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 font-normal tracking-wide leading-relaxed max-w-2xl mx-auto">
            {data.subheading}
          </p>
        </div>
      )}

      {/* Diagram Branching Tree — Desktop Only */}
      <div className="hidden lg:flex flex-col items-center w-full mt-10 -mb-2 relative">
        {/* Sinemus Root Node */}
        <div className="z-10 flex items-center justify-center px-5 py-2">
          <Image
            src="/images/sinemus-indonesia-v2.png"
            alt={data.heading || 'Sinemus Indonesia'}
            width={371}
            height={530}
            priority
            className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* SVG Branch Connector — Blue-200 for clear but subtle brand connection */}
        <div className="w-full h-16 relative mt-4">
          <svg
            className="w-full h-full pointer-events-none"
            viewBox="0 0 1000 64"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Vertical stem down from root node */}
            <path
              d="M 500 0 V 20"
              stroke="#bfdbfe"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Main horizontal branching arc */}
            <path
              d="M 125 64 V 34 Q 125 20 141 20 H 859 Q 875 20 875 34 V 64"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Card 2 vertical drop */}
            <path
              d="M 375 20 V 64"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Card 3 vertical drop */}
            <path
              d="M 625 20 V 64"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.units.map((unit) => (
          <div
            key={unit.id}
            className="group relative rounded-2xl overflow-hidden border border-slate-200/80 hover:border-blue-500/80 p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full min-h-[300px]"
          >
            {/* Background Image Showcase */}
            <Image
              src={unit.bgImage || '/images/hero/bg-unit-preview.jpeg'}
              alt={unit.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Glass Overlay for High Contrast Legibility */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/65 group-hover:via-slate-950/75 transition-colors duration-500 z-0 pointer-events-none" 
            />

            {/* Card Content Overlay */}
            <div className="relative z-10 space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors tracking-wide">
                {unit.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200/90 font-normal tracking-wide leading-relaxed line-clamp-4">
                {unit.description}
              </p>
            </div>

            <div className="relative z-10 pt-5 mt-4 border-t border-white/15">
              <Link
                href={`/units/${unit.slug}`}
                aria-label={`Pelajari lebih lanjut tentang ${unit.title}`}
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-300 group-hover:text-white transition-colors"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-400 group-hover:text-white" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
