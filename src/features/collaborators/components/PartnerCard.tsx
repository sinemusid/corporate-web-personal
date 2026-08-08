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
      className="group relative w-full h-28 sm:h-32 p-4 sm:p-5 rounded-2xl bg-white flex items-center justify-center overflow-hidden text-center"
      title={partner.name}
      aria-label={`Logo ${partner.name}`}
    >
      {/* Logo Showcase with Clean Static Full Color & subtle scale animation */}
      <div className="relative w-full h-full flex items-center justify-center p-1 transform group-hover:scale-105 transition-transform duration-300 ease-out">
        <Image
          src={partner.logoUrl}
          alt={`Logo ${partner.name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};
