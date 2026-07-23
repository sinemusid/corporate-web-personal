import React from 'react';
import { Check } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 backdrop-blur-md hover:border-zinc-700 transition-colors">
      <div className="space-y-2">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{service.title}</h3>
        <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>
      </div>

      <div className="pt-3 border-t border-zinc-800/80 space-y-2">
        <ul className="space-y-2">
          {service.deliverables.map((d, i) => (
            <li key={i} className="text-xs text-zinc-300 flex items-center space-x-2">
              <Check className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

