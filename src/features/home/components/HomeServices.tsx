import React from 'react';
import { Clapperboard, Share2, GraduationCap, Users2 } from 'lucide-react';
import { HomeServicesData } from '../types';

interface HomeServicesProps {
  data: HomeServicesData;
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'service-production': Clapperboard,
  'service-screen': Share2,
  'service-academy': GraduationCap,
  'service-community': Users2,
};

export const HomeServices: React.FC<HomeServicesProps> = ({ data }) => {
  return (
    <div className="space-y-10 sm:space-y-14 w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
          {data.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          {data.subheading}
        </p>
      </div>

      {/* Services Grid (Clean Modern Studio Architecture) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.services.map((service, index) => {
          const indexNum = String(index + 1).padStart(2, '0');
          const IconComponent = SERVICE_ICONS[service.id] || Clapperboard;

          return (
            <div
              key={service.id}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 group overflow-hidden h-full"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header & Body */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                    {indexNum}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Capabilities Pill List */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/60 group-hover:bg-blue-50/50 group-hover:text-blue-800 group-hover:border-blue-100 transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


