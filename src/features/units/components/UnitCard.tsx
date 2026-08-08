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
  ctaText = 'Pelajari Lebih Lanjut',
}) => {
  return (
    <div className="relative group rounded-3xl overflow-hidden border border-slate-200/80 bg-white p-6 flex flex-col justify-between h-[360px] transition-all duration-300 hover:border-blue-500 hover:shadow-xl shadow-xs">
      {/* Background Image & Overlay */}
      {unit.bannerUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={unit.bannerUrl}
            alt={unit.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 space-y-3 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors uppercase">
          {unit.title}
        </h3>
        <p className="text-xs sm:text-sm font-body text-slate-600 line-clamp-3 leading-relaxed">
          {unit.description}
        </p>
      </div>

      {/* Action Button */}
      <div className="relative z-10 pt-4 flex justify-center sm:justify-start">
        <Link href={`/units/${unit.slug}`}>
          <button className="px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-xs font-body font-semibold tracking-wider text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 flex items-center space-x-1 cursor-pointer">
            <span>{ctaText}</span>
            <span>&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
