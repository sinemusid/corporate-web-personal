'use client';

import React from 'react';
import { ServicesData } from '../types';

interface ServicesGridProps {
  data: ServicesData;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ data }) => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-content-primary">{data.heading}</h2>
        <p className="text-xs sm:text-sm font-body text-content-secondary font-light max-w-xl mx-auto">{data.subheading}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.services.map((service) => (
          <div key={service.id} className="p-6 rounded-2xl bg-bg-elevated border border-borderToken-subtle space-y-4">
            <div className="w-10 h-10 rounded-xl bg-accent-subtle border border-borderToken-subtle text-content-primary flex items-center justify-center font-bold text-sm">
              ⚡
            </div>
            <h3 className="text-lg font-heading font-bold text-content-primary">{service.title}</h3>
            <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{service.description}</p>
            <ul className="space-y-2 pt-2 border-t border-borderToken-subtle">
              {service.features.map((feat, idx) => (
                <li key={idx} className="text-[11px] font-body text-content-secondary flex items-center">
                  <span className="text-content-primary mr-2">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
