import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BusinessUnit } from '../types';

interface UnitCardProps {
  unit: BusinessUnit;
  ctaText?: string;
}

export const UnitCard: React.FC<UnitCardProps> = ({
  unit,
  ctaText = 'Learn More',
}) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-borderToken-subtle bg-bg-elevated backdrop-blur-md p-6 flex flex-col justify-between h-[360px] transition-all duration-300 hover:border-borderToken-default hover:scale-[1.02] shadow-2xl">
      {/* Background Image & Overlay */}
      {unit.bannerUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={unit.bannerUrl}
            alt={unit.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-3 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-heading font-black tracking-wide text-content-primary uppercase">
          {unit.title}
        </h3>
        <p className="text-xs sm:text-sm font-body text-content-secondary line-clamp-3 leading-relaxed">
          {unit.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 pt-4 flex justify-center sm:justify-start">
        <Link href={`/units/${unit.slug}`}>
          <button className="px-5 py-2 rounded-full border border-borderToken-strong text-xs font-body font-semibold tracking-wider text-content-primary hover:bg-accent-solid hover:text-content-inverse transition-all duration-200 flex items-center space-x-1">
            <span>{ctaText}</span>
            <span>&gt;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
