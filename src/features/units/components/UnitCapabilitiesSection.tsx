import React from 'react';
import { UnitCapability } from '../types';

interface UnitCapabilitiesSectionProps {
  unitTitle: string;
  capabilities: UnitCapability[];
}

export const UnitCapabilitiesSection: React.FC<UnitCapabilitiesSectionProps> = ({
  unitTitle,
  capabilities,
}) => {
  return (
    <section className="space-y-6">
      <div className="flex flex-col space-y-1.5 border-l-4 border-blue-600 pl-4">
        <h2 className="text-xl md:text-2xl font-heading font-bold text-slate-900">
          Pilar Kapabilitas &amp; Layanan Utama
        </h2>
        <p className="text-sm text-slate-600 font-body">
          Spesialisasi dan kompetensi operasional berstandar tinggi dari {unitTitle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="group relative p-6 bg-white border border-slate-200/80 rounded-2xl hover:border-blue-400/60 hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between shadow-xs"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-blue-700 font-mono font-bold flex items-center justify-center text-sm border border-blue-200/60 group-hover:scale-105 transition-transform">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                {cap.title}
              </h3>
              <p className="text-sm font-body text-slate-600 leading-relaxed">
                {cap.description}
              </p>
            </div>

            {cap.tags && cap.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {cap.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full bg-slate-100/80 text-slate-600 border border-slate-200/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
