'use client';

import React from 'react';
import Image from 'next/image';
import { PortfolioData } from '../types';

interface PortfolioGridProps {
  data: PortfolioData;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-xl mx-auto">{data.subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.items.map((item) => (
          <div key={item.id} className="group rounded-2xl bg-bg-elevated border border-borderToken-subtle overflow-hidden space-y-3">
            <div className="relative h-48 w-full bg-bg-tertiary">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-content-primary font-mono font-medium">{item.category}</span>
                <span className="text-content-muted font-mono">{item.year}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-content-primary group-hover:text-content-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
