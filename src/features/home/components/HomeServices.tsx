import React from 'react';
import { HomeServicesData } from '../types';

interface HomeServicesProps {
  data: HomeServicesData;
}

export const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  return (
    <div className="space-y-10 w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-slate-900 leading-tight">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-slate-500 font-normal tracking-wide leading-relaxed max-w-2xl mx-auto">
          {data.subheading}
        </p>
      </div>

      {/* Services Grid (Clean Editorial Architecture) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {data.services.map((service, index) => {
          const indexNum = String(index + 1).padStart(2, '0');

          return (
            <div
              key={service.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-xl hover:-translate-y-1 group overflow-hidden h-full"
            >
              {/* Subtle Top Accent Highlight on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header & Body */}
              <div className="space-y-3.5">
                <span className="font-mono text-xs font-bold tracking-widest text-blue-600 block">
                  {indexNum}
                </span>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features / Capabilities List */}
              <div className="pt-4 border-t border-slate-200/80">
                <ul className="space-y-2">
                  {service.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-700 font-medium tracking-wide flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600/80 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


