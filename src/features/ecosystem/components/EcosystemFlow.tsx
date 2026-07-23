import React from 'react';
import { Lightbulb, Clapperboard, Monitor, Tv, Heart, ChevronRight } from 'lucide-react';
import { EcosystemFlowStep } from '../types';

interface EcosystemFlowProps {
  flow: EcosystemFlowStep[];
}

export const EcosystemFlow: React.FC<EcosystemFlowProps> = ({ flow }) => {
  const stepIcons = [
    <Lightbulb key="1" className="w-5 h-5 text-sky-400" />,
    <Clapperboard key="2" className="w-5 h-5 text-sky-400" />,
    <Monitor key="3" className="w-5 h-5 text-sky-400" />,
    <Tv key="4" className="w-5 h-5 text-sky-400" />,
    <Heart key="5" className="w-5 h-5 text-sky-400" />,
  ];

  return (
    <div className="space-y-10 my-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Bagaimana Kami Bekerja</h2>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Proses kolaboratif yang terstruktur untuk mengalirkan ide dari tahap konseptualisasi hingga apresiasi masyarakat luas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        {flow.map((step, idx) => (
          <div key={step.stepNumber} className="relative flex flex-col items-center">
            <div className="w-full bg-zinc-900/70 border border-zinc-800 p-5 rounded-2xl flex flex-col items-center text-center space-y-3 backdrop-blur-md hover:border-zinc-700 transition-colors">
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800">
                {stepIcons[idx % stepIcons.length]}
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
              <p className="text-[11px] text-zinc-400 leading-normal">{step.description}</p>
            </div>
            {idx < flow.length - 1 && (
              <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-600 z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

