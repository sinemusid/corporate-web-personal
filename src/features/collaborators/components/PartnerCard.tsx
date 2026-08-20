import React from 'react';
import Image from 'next/image';
import { MotionCard } from '@/components/motion';
import { PartnerItem } from '../types';

interface PartnerCardProps {
  partner: PartnerItem;
  index: number;
  columnsDesktop?: number;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index, columnsDesktop = 5 }) => {
  const sizes =
    columnsDesktop === 5
      ? '(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(33vw - 24px), 220px'
      : columnsDesktop === 4
      ? '(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(50vw - 24px), 270px'
      : '(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 24px), 360px';

  const isPriority = index < 5;

  return (
    <MotionCard
      className="group relative w-full h-24 sm:h-28 p-4 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center overflow-hidden text-center shadow-xs hover:shadow-md hover:border-blue-400/60 transition-colors duration-300"
      title={partner.name}
      aria-label={`Logo ${partner.name}`}
    >
      <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
        <Image
          src={partner.logoUrl}
          alt={`Logo ${partner.name}`}
          fill
          sizes={sizes}
          className="object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          priority={isPriority}
          loading={isPriority ? undefined : 'lazy'}
        />
      </div>
    </MotionCard>
  );
};
