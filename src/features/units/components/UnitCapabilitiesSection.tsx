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
      <div className="flex flex-col space-y-1">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-content-primary">
          Pilar Kapabilitas & Layanan Utama
        </h3>
        <p className="text-sm text-content-secondary font-body">
          Spesialisasi dan kompetensi operasional berstandar tinggi dari {unitTitle}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="group relative p-6 bg-bg-elevated border border-borderToken-subtle rounded-xl hover:border-accent-primary/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-bg-primary text-content-primary font-mono font-bold flex items-center justify-center text-sm border border-borderToken-subtle group-hover:scale-105 transition-transform">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-semibold text-content-primary text-lg">
                {cap.title}
              </h4>
              <p className="text-sm font-body text-content-secondary leading-relaxed">
                {cap.description}
              </p>
            </div>

            {cap.tags && cap.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cap.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-bg-primary text-content-secondary border border-borderToken-subtle"
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
