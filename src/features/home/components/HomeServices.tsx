'use client';

import React from 'react';
import { HomeServicesData } from '../constants/home-services.mock';

interface HomeServicesProps {
  data: HomeServicesData;
}

export const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-4xl mx-auto space-y-3 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-wider text-content-primary uppercase leading-tight">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed max-w-3xl mx-auto">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {data.services.map((service) => (
          <div
            key={service.id}
            className="p-8 rounded-3xl bg-bg-elevated/80 border border-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-6 shadow-xl group"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-black text-content-primary uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm font-body text-content-secondary font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-white/10">
              {service.features.map((feat, idx) => (
                <li key={idx} className="text-xs font-body text-content-secondary flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 mr-2.5 shrink-0" />
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
