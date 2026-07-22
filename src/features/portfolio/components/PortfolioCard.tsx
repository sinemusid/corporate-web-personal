import React from 'react';
import { Card } from '@/components/ui/Card';
import { PortfolioItem } from '../types';

interface PortfolioCardProps {
  item: PortfolioItem;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <Card className="group overflow-hidden flex flex-col justify-between hover:border-red-600/50 transition-all">
      <div className="space-y-3">
        <div className="relative aspect-video rounded-lg bg-zinc-800 overflow-hidden flex items-center justify-center text-zinc-600 text-xs font-mono">
          <span>[ Thumbnail: {item.title} ]</span>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-red-500 font-medium">{item.categoryLabel}</span>
          <span className="text-zinc-500">{item.year}</span>
        </div>

        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-zinc-400 line-clamp-2">{item.synopsis}</p>
      </div>

      <div className="pt-4 border-t border-zinc-800/80 mt-4 text-xs text-zinc-500 flex justify-between">
        <span>Sutradara: {item.director}</span>
        <span className="text-zinc-400 font-mono">@{item.unitSlug}</span>
      </div>
    </Card>
  );
};
