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
      className={`w-full rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center space-y-2 transition-all duration-300 group h-full ${
        isStaff ? 'min-h-[95px] sm:min-h-[105px]' : 'min-h-[120px] sm:min-h-[130px]'
      } ${
        highlight
          ? 'border-2 border-blue-600 bg-white shadow-lg shadow-blue-900/5'
          : 'border border-slate-200 bg-white hover:border-blue-400 shadow-xs hover:shadow-md'
      }`}
    >
      {levelBadge && (
        <span
          className={`text-[10px] font-mono font-bold tracking-widest px-3 py-0.5 rounded-full uppercase ${
            highlight
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}
        >
          {levelBadge}
        </span>
      )}

      {/* Role Title */}
      <h3
        className={`text-xs sm:text-sm md:text-base font-heading font-bold uppercase tracking-wide leading-snug transition-colors ${
          highlight ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
        }`}
      >
        {node.title}
      </h3>

      {/* Description */}
      {node.description && (
        <p className="text-[11px] sm:text-xs text-slate-600 font-body font-normal leading-relaxed px-1 line-clamp-2">
          {node.description}
        </p>
      )}
    </div>
  );
};


