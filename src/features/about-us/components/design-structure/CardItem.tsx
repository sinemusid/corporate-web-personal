import React from 'react';
import { StructureNodeData } from '../../types';

export interface CardItemProps {
  node?: StructureNodeData;
  highlight?: boolean;
  isStaff?: boolean;
  levelBadge?: string;
}

export const CardItem: React.FC<CardItemProps> = ({
  node,
  highlight,
  isStaff,
  levelBadge,
}) => {
  if (!node) return null;

  return (
    <div
      className={`w-full bg-transparent border backdrop-blur-sm rounded-xl p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 group h-full ${
        isStaff ? 'min-h-[105px] sm:min-h-[115px]' : 'min-h-[130px] sm:min-h-[140px]'
      } ${
        highlight
          ? 'border-gray-300/40 hover:border-gray-200/80 shadow-[0_0_15px_rgba(255,255,255,0.05)] bg-white/[0.03]'
          : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
      }`}
    >
      {/* Optional Minimalist Level Badge */}
      {levelBadge && (
        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-gray-200 border border-white/20">
          {levelBadge}
        </span>
      )}

      {/* Role Title */}
      <h3
        className={`text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide leading-snug transition-colors ${
          highlight ? 'text-gray-100' : 'text-gray-100 group-hover:text-white'
        }`}
      >
        {node.title}
      </h3>

      {/* Description */}
      {node.description && (
        <p className="text-[11px] sm:text-xs text-gray-400 font-light leading-relaxed px-1 line-clamp-2">
          {node.description}
        </p>
      )}
    </div>
  );
};
