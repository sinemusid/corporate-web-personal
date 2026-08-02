'use client';

import React from 'react';
import Image from 'next/image';
import { PartnerItem } from '../types';

interface PartnerCardProps {
  partner: PartnerItem;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div className="group relative p-5 sm:p-6 rounded-2xl bg-bg-primary/40 border border-borderToken-subtle/50 hover:border-content-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-content-primary/5 hover:-translate-y-1.5 flex flex-col items-center justify-between space-y-4 backdrop-blur-md text-center">
      {/* Category Pill */}
      <span className="text-[10px] font-mono font-semibold text-content-secondary uppercase tracking-wider px-2.5 py-1 rounded-md bg-bg-elevated/60 border border-borderToken-subtle/40 group-hover:text-content-primary group-hover:border-content-primary/30 transition-all duration-300">
        {partner.category}
      </span>

      {/* Logo Showcase with Monochrome to Color Hover Effect */}
      <div className="relative w-full h-24 flex items-center justify-center p-2 rounded-xl bg-bg-elevated/30 border border-borderToken-subtle/30 overflow-hidden">
        <Image
          src={partner.logoUrl}
          alt={partner.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5 w-full flex flex-col items-center">
        <h3 className="text-base sm:text-lg font-heading font-bold text-content-primary transition-colors">
          {partner.name}
        </h3>
        {partner.description && (
          <p className="text-xs font-body text-content-secondary font-light leading-relaxed group-hover:text-content-primary/90 transition-colors line-clamp-3">
            {partner.description}
          </p>
        )}
      </div>
    </div>
  );
};
