import React from 'react';
import Image from 'next/image';
import { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 aspect-[3/4] flex flex-col justify-end shadow-2xl hover:border-zinc-600 transition-all duration-300">
      {/* Poster Image */}
      <Image
        src={item.thumbnailUrl}
        alt={item.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
      />

      {/* Dark Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 p-4 space-y-1 text-center sm:text-left">
        <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors">
          {item.title}
        </h3>
        <p className="text-[11px] text-zinc-400 font-mono">{item.categoryLabel} ({item.year})</p>
      </div>
    </div>
  );
};

