import React from 'react';
import { UnitWorkflowStep } from '../types';

interface UnitWorkflowSectionProps {
  workflow: UnitWorkflowStep[];
}

export const UnitWorkflowSection: React.FC<UnitWorkflowSectionProps> = ({ workflow }) => {
  if (!workflow || workflow.length === 0) return null;

  return (
    <section className="bg-bg-elevated border border-borderToken-subtle rounded-2xl p-8 md:p-10 space-y-6">
      <div className="flex flex-col space-y-1">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-content-primary">
          Alur Kerja & Kolaborasi
        </h3>
        <p className="text-sm text-content-secondary font-body">
          Tahapan sistematis untuk merealisasikan kerja sama yang terstruktur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {workflow.map((step, idx) => (
          <div
            key={idx}
            className="p-6 bg-bg-primary border border-borderToken-subtle rounded-xl space-y-3 relative"
          >
            <div className="text-3xl font-mono font-extrabold text-content-tertiary/40">
              {step.stepNumber}
            </div>
            <h4 className="font-heading font-semibold text-content-primary text-base">
              {step.title}
            </h4>
            <p className="text-xs font-body text-content-secondary leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
