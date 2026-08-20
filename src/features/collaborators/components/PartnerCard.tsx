import React from 'react';
import Image from 'next/image';
import { PartnerItem } from '../types';

interface PartnerCardProps {
  partner: PartnerItem;
  /** Index posisi card dalam grid — digunakan untuk menentukan loading priority */
  index: number;
  /** Total kolom grid desktop untuk kalkulasi sizes yang akurat */
  columnsDesktop?: number;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ partner, index, columnsDesktop = 5 }) => {
  /**
   * ✅ FIX #1: sizes yang akurat per breakpoint riil.
   * Logo tampil dalam grid — bukan full viewport.
   * Hitungan: container max-w-6xl (1152px) / columns - gap
   *   Mobile (2 col):   ~calc(50vw - 24px) ≈ 160px
   *   Tablet (3 col):   ~calc(33vw - 24px) ≈ 180px  [untuk 5-col]
   *   Desktop (5 col):  ~calc(20vw - 24px) ≈ 200px  [untuk 5-col]
   *   Desktop (4 col):  ~calc(25vw - 24px) ≈ 256px  [untuk 4-col]
   */
  const sizes =
    columnsDesktop === 5
      ? '(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(33vw - 24px), 220px'
      : columnsDesktop === 4
      ? '(max-width: 640px) calc(50vw - 24px), (max-width: 1024px) calc(50vw - 24px), 270px'
      : '(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 24px), 360px';

  /**
   * ✅ FIX #2: Logo pertama 2 baris (≤ index 9 dalam grid 5-col) mendapat priority=true.
   * Logo yang masuk viewport awal harus di-preload agar tidak menahan LCP.
   * Threshold: 4 items pertama (2 kolom × 2 baris) pada mobile, 5 pertama di desktop.
   */
  const isPriority = index < 5;

  return (
    <div
      className="group relative w-full h-24 sm:h-28 p-4 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center overflow-hidden text-center shadow-xs hover:shadow-md hover:border-blue-400/60 transition-all duration-300"
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
          // ✅ FIX #3: loading="lazy" eksplisit untuk logo di bawah fold
          loading={isPriority ? undefined : 'lazy'}
        />
      </div>
    </div>
  );
};
