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
    <div className="relative space-y-6 sm:space-y-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {showTitleHeader && (
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-2.5 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-body text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            {data.subheading}
          </p>
        </div>
      )}

      {/* Diagram Branching Tree — Desktop Only */}
      <div className="hidden lg:flex flex-col items-center w-full mt-16 -mb-2 relative">
        {/* Sinemus Root Node */}
        <div className="z-10 flex items-center justify-center px-5 py-2.5">
          <Image
            src="/images/sinemus-indonesia.png"
            alt={data.heading || 'Sinemus Indonesia'}
            width={180}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
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
            className="group relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500 hover:shadow-sm h-full min-h-[300px]"
          >
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                {unit.title}
              </h3>
              <p className="text-xs sm:text-sm font-body text-slate-500 font-normal leading-relaxed line-clamp-4">
                {unit.description}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                href={`/units/${unit.slug}`}
                className="inline-flex items-center text-sm font-body font-semibold text-slate-400 group-hover:text-blue-600 transition-colors"
              >
                <span>Pelajari Lebih Lanjut</span>
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
