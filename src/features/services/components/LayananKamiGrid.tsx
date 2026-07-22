import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';

interface LayananKamiGridProps {
  services: ServiceItem[];
}

export const LayananKamiGrid: React.FC<LayananKamiGridProps> = ({ services }) => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Layanan Kami</h3>
        <p className="text-xs text-zinc-400 mt-1">Solusi end-to-end untuk kebutuhan produksi dan media audio-visual.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};
