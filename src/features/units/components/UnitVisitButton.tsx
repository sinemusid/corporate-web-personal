'use client';

import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BusinessUnit } from '../types';
import { UnitComingSoonModal } from './UnitComingSoonModal';

interface UnitVisitButtonProps {
  unit: BusinessUnit;
  className?: string;
}

export const UnitVisitButton: React.FC<UnitVisitButtonProps> = ({
  unit,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default shared button classes matching Sinemus Hero Dark aesthetic
  const baseButtonClasses = cn(
    'inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 font-medium rounded-xl text-xs sm:text-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-sm',
    className
  );

  // If the unit has an active live website, navigate directly in a new tab
  if (unit.isLiveWebsite && unit.externalUrl) {
    return (
      <a
        href={unit.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseButtonClasses,
          'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500/50'
        )}
      >
        <span>Kunjungi Website Unit</span>
        <ExternalLink className="w-4 h-4 text-blue-400" />
      </a>
    );
  }

  // Otherwise, if the website is in development / coming soon, open the modal dialog
  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={cn(
          baseButtonClasses,
          'bg-slate-900/80 hover:bg-slate-900 text-slate-200 hover:text-white border border-slate-800 hover:border-blue-500/50 group'
        )}
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
      >
        <span>Kunjungi Website Unit</span>
        <Sparkles className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-12" />
      </button>

      <UnitComingSoonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        unit={unit}
      />
    </>
  );
};
