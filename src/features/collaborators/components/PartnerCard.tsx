'use client';

import React from 'react';
import Image from 'next/image';
import { PartnerItem } from '../types';

interface PartnerCardProps {
  partner: PartnerItem;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div
      className="group relative w-full h-24 sm:h-28 p-2 flex items-center justify-center overflow-hidden text-center transition-all duration-300"
      title={partner.name}
      aria-label={`Logo ${partner.name}`}
    >
      {/* Logo Showcase - Pure Image without card background or border */}
      <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ease-out">
        <Image
          src={partner.logoUrl}
          alt={`Logo ${partner.name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};
