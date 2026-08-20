'use client';

import React from 'react';
import Image from 'next/image';
import { PortfolioItemData } from '../../types';

interface PortfolioCardProps {
  item: PortfolioItemData;
  onClick?: () => void;
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="group relative flex flex-col rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      {/* Media Aspect Frame with Overlay */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Badges (Category & Year) */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-blue-600/90 border border-blue-400/30 backdrop-blur-md shadow-xs">
            {item.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium text-white/90 bg-slate-950/70 border border-white/10 backdrop-blur-md">
            {item.year}
          </span>
        </div>
      </div>

      {/* Card Body Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-heading font-extrabold text-slate-900 tracking-wide leading-snug group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm font-body text-slate-600 font-normal leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Card Footer Interaction Prompt */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
          <span className="uppercase tracking-wider text-[11px]">Lihat Detail Karya</span>
          <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </article>
  );
};


