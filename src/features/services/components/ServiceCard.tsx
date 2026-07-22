import React from 'react';
import { Card } from '@/components/ui/Card';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="flex flex-col justify-between hover:border-red-600/50 transition-all space-y-4">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-red-500 bg-red-950/40 px-2 py-0.5 rounded">
          {service.category}
        </span>
        <h4 className="text-lg font-bold text-white">{service.title}</h4>
        <p className="text-xs text-zinc-400 leading-relaxed">{service.description}</p>
      </div>

      <div className="pt-3 border-t border-zinc-800 space-y-1.5">
        <span className="text-[11px] font-semibold text-zinc-300">Deliverables:</span>
        <ul className="space-y-1">
          {service.deliverables.map((d, i) => (
            <li key={i} className="text-xs text-zinc-400 flex items-center space-x-1.5">
              <span className="text-red-500 font-bold">✓</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
