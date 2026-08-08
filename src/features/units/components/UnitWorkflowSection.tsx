import React from 'react';
import { UnitWorkflowStep } from '../types';

interface UnitWorkflowSectionProps {
  workflow: UnitWorkflowStep[];
}

export const UnitWorkflowSection: React.FC<UnitWorkflowSectionProps> = ({ workflow }) => {
  if (!workflow || workflow.length === 0) return null;

  return (
    <section className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-8 md:p-10 space-y-6">
      <div className="flex flex-col space-y-1.5 border-l-4 border-blue-600 pl-4">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900">
          Alur Kerja &amp; Kolaborasi
        </h3>
        <p className="text-sm text-slate-600 font-body">
          Tahapan sistematis untuk merealisasikan kerja sama yang terstruktur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {workflow.map((step, idx) => (
          <div
            key={idx}
            className="p-6 bg-white border border-slate-200/80 rounded-2xl space-y-3 relative shadow-xs hover:shadow-md hover:border-blue-400/60 transition-all duration-300"
          >
            <div className="text-3xl font-mono font-extrabold text-blue-600/40">
              {step.stepNumber}
            </div>
            <h4 className="font-heading font-bold text-slate-900 text-base">
              {step.title}
            </h4>
            <p className="text-xs font-body text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
