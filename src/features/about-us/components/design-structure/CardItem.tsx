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
}) => {
  if (!node) return null;

  return (
    <div
      className={`w-full bg-white border rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 group h-full ${
        isStaff ? 'min-h-[105px] sm:min-h-[115px]' : 'min-h-[130px] sm:min-h-[140px]'
      } ${
        highlight
          ? 'border-blue-500/80 bg-blue-50/40 hover:border-blue-600 shadow-sm shadow-blue-900/10'
          : 'border-slate-200/80 hover:border-blue-400/60 shadow-xs hover:shadow-md'
      }`}
    >
      {/* Role Title */}
      <h3
        className={`text-xs sm:text-sm md:text-base font-bold uppercase tracking-wide leading-snug transition-colors ${
          highlight ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
        }`}
      >
        {node.title}
      </h3>

      {/* Description */}
      {node.description && (
        <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed px-1 line-clamp-2">
          {node.description}
        </p>
      )}
    </div>
  );
};
