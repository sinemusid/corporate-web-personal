import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ExternalLink, Clapperboard, Trophy, Users, Monitor } from 'lucide-react';
import { BusinessUnit } from '../types';
import { MOCK_UNITS } from '../mock/units-mock';

interface UnitHeroBannerProps {
  unit?: BusinessUnit;
}

export const UnitHeroBanner: React.FC<UnitHeroBannerProps> = ({
  unit = MOCK_UNITS[0],
}) => {
  const heroImage = unit.bannerUrl || '/images/hero/khoas_poster.png';

  const statIcons = [
    <Clapperboard key="clap" className="w-6 h-6 text-blue-400" />,
    <Trophy key="trophy" className="w-6 h-6 text-blue-400" />,
    <Users key="users" className="w-6 h-6 text-blue-400" />,
    <Monitor key="monitor" className="w-6 h-6 text-blue-400" />,
  ];

  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[75vh] lg:min-h-[100vh] flex flex-col justify-center bg-slate-950 text-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
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

      {/* Main Container Aligned directly with Navbar Logo (px-6 sm:px-12) */}
      <div className="relative z-10 w-full px-6 sm:px-12 space-y-4 lg:space-y-6">
        {/* Breadcrumb Navigation - Positioned closer to Navbar */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/units" className="hover:text-blue-400 transition-colors">
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

          {/* Action Buttons & Horizontal Stats Bar Aligned Sejajar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-blue-600/90 hover:bg-blue-600 text-white font-semibold rounded-xl text-xs sm:text-sm border border-blue-500/30 hover:border-blue-400/60 shadow-sm shadow-blue-950/50 backdrop-blur-sm transition-all active:scale-95 cursor-pointer"
              >
                Konsultasikan Project
                <ArrowRight className="w-4 h-4 text-blue-100" />
              </Link>

              {unit.externalUrl && (
                <a
                  href={unit.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500/50 font-medium rounded-xl text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                >
                  Kunjungi Website Unit
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                </a>
              )}
            </div>

            {/* Horizontal 1-Row Stat Glassmorphism Bar Sejajar */}
            {unit.stats && unit.stats.length > 0 && (
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-center justify-around gap-4 sm:gap-8 shadow-lg shadow-black/20 flex-1 max-w-2xl transition-all">
                {unit.stats.map((st, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 sm:p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
                      {statIcons[i % statIcons.length]}
                    </div>
                    <div className="text-left">
                      <div className="text-lg sm:text-xl lg:text-2xl font-mono font-bold text-white tracking-tight leading-none">
                        {st.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight mt-1">
                        {st.label}
                      </div>
                    </div>
                    {i < unit.stats!.length - 1 && (
                      <div className="hidden sm:block h-8 w-[1px] bg-slate-800 ml-2 sm:ml-4" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
