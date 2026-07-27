'use client';

import React from 'react';
import Link from 'next/link';
import { HomeWhoWeAreData } from '../types';

interface HomeWhoWeAreProps {
  data: HomeWhoWeAreData;
}

export const HomeWhoWeAre: React.FC<HomeWhoWeAreProps> = ({ data }) => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto text-center">
      <div className="space-y-2">
        <span className="text-xs uppercase font-mono tracking-widest text-content-secondary font-bold">
          {data.title}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-content-primary uppercase tracking-tight">
          {data.subheading}
        </h2>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-content-secondary font-body font-light leading-relaxed max-w-3xl mx-auto">
        {data.description}
      </p>
      <div className="pt-2">
        <Link
          href={data.ctaHref}
          className="inline-flex items-center px-6 py-3 rounded-full border border-borderToken-strong bg-accent-solid text-content-inverse hover:bg-accent-solid-hover font-body font-semibold text-sm transition-all duration-300 group"
        >
          <span>{data.ctaText}</span>
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};
