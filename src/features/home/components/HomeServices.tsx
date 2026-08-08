import React from 'react';
import { HomeServicesData } from '../types';

interface HomeServicesProps {
  data: HomeServicesData;
}

export const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-4xl mx-auto space-y-3 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-slate-900 uppercase leading-tight">
          {data.heading}
        </h2>
        <p className="text-xs sm:text-sm md:text-base font-body text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {data.services.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs group h-full"
          >
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm font-body text-slate-600 font-normal leading-relaxed line-clamp-4">
                {service.description}
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-slate-100">
              {service.features.map((feat, idx) => (
                <li key={idx} className="text-[11px] sm:text-xs font-body text-slate-600 flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 mt-1 shrink-0" />
                  <span className="leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
