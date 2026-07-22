import React from 'react';
import { EcosystemFlowStep } from '../types';

interface EcosystemFlowProps {
  flow: EcosystemFlowStep[];
}

export const EcosystemFlow: React.FC<EcosystemFlowProps> = ({ flow }) => {
  return (
    <div className="mt-16 space-y-8">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Ecosystem Flow</h3>
        <p className="text-xs text-zinc-400 mt-1">Alur kerja holistik dari inkubasi karya hingga distribusi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {flow.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl space-y-3 relative"
          >
            <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 font-bold flex items-center justify-center text-sm">
              0{step.stepNumber}
            </div>
            <h4 className="font-semibold text-white text-base">{step.title}</h4>
            <p className="text-xs text-zinc-400">{step.description}</p>
            <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              {step.unitInvolved}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
