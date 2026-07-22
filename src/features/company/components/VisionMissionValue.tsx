import React from 'react';
import { Card } from '@/components/ui/Card';
import { CompanyInfo } from '../types';

interface VisionMissionValueProps {
  info: CompanyInfo;
}

export const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ info }) => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="space-y-4 border-red-900/40 bg-red-950/10">
          <h3 className="text-xl font-bold text-red-500">Visi Perusahaan</h3>
          <p className="text-sm text-zinc-300 leading-relaxed">{info.vision}</p>
        </Card>

        <Card className="space-y-4">
          <h3 className="text-xl font-bold text-white">Misi Perusahaan</h3>
          <ul className="space-y-2 text-xs text-zinc-300">
            {info.mission.map((m, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-red-500 font-bold">•</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">Nilai-Nilai Utama (Values)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.values.map((v, i) => (
            <Card key={i} className="space-y-2">
              <h4 className="font-semibold text-white text-base">{v.title}</h4>
              <p className="text-xs text-zinc-400">{v.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
