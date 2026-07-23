import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CompanyInfo } from '../types';

interface WhoWeAreProps {
  info: CompanyInfo;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ info }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden min-h-[480px] flex items-center justify-center p-8 sm:p-14 text-center border border-white/10 shadow-2xl my-8">
      {/* Background Image - Movie set crew */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/khoas_poster.png"
          alt="Sineas Muslim Indonesia"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wider text-white uppercase">
          SINEAS MUSLIM INDONESIA
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light">
          {info.shortDescription}
        </p>

        <div className="pt-4 flex justify-center">
          <Link href="/about">
            <button className="px-6 py-2.5 rounded-full border border-white/40 text-xs font-semibold tracking-wider text-white hover:bg-white hover:text-black transition-all duration-200 flex items-center space-x-1">
              <span>About Sinemus</span>
              <span>&gt;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

