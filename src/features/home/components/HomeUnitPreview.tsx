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
    <div className="relative space-y-10 sm:space-y-14 w-full">
      {/* Section Header */}
      {showTitleHeader && (
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-3 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
            {data.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {data.subheading}
          </p>
        </div>
      )}

      {/* Unit Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
        {data.units.map((unit, index) => {
          /**
           * ✅ FIX: Unit card pertama (index 0) above-fold di semua breakpoint,
           * index 0-1 above-fold di tablet (md: 2-col).
           * Hanya 2 card pertama yang dapat priority=true — sisanya lazy-loaded.
           * bg-unit-preview.jpeg (333KB) × 4 cards = 1.3MB jika semua eager-loaded.
           */
          const isPriority = index < 2;

          return (
            <div
              key={unit.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 hover:border-blue-500/60 shadow-lg hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 h-full min-h-90"
            >
              {/* Background Image with Depth Zoom */}
              <div className="absolute inset-0 z-0 select-none overflow-hidden">
                <Image
                  src={unit.bgImage || '/images/hero/bg-unit-preview.jpeg'}
                  alt=""
                  aria-hidden="true"
                  fill
                  /**
                   * ✅ FIX: sizes sesuai grid breakpoint riil.
                   * Mobile (1-col): 100vw
                   * Tablet (2-col): ~50vw
                   * Desktop (4-col): ~25vw
                   * Sebelumnya tidak ada sizes — Next.js default 100vw untuk semua breakpoint.
                   */
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={70}
                  priority={isPriority}
                  loading={isPriority ? undefined : 'lazy'}
                  className="object-cover object-center brightness-75 group-hover:scale-110 group-hover:brightness-90 transition-all duration-700 ease-out"
                />
                {/* Cinematic Gradient */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/85 via-50% to-slate-950/40 group-hover:via-slate-950/75 transition-colors duration-500 pointer-events-none"
                />
              </div>

              {/* Card Header Info */}
              <div className="relative z-10 p-6 sm:p-7 space-y-3">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                  {unit.title}
                </h3>
                {unit.subtitle && (
                  <p className="text-xs font-mono text-slate-400 font-medium tracking-wide leading-relaxed">
                    {unit.subtitle}
                  </p>
                )}
                <p className="text-xs sm:text-sm text-slate-300/90 font-normal leading-relaxed pt-1">
                  {unit.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="relative z-10 p-6 sm:p-7 pt-0">
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/units/${unit.slug}`}
                    aria-label={`Pelajari lebih lanjut tentang ${unit.title}`}
                    className="inline-flex items-center text-xs font-heading font-bold tracking-wider text-blue-400 group-hover:text-white transition-colors"
                  >
                    <span>Pelajari Unit</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-blue-400 group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
