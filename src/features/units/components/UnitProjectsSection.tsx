import React from 'react';
import Image from 'next/image';
import { UnitProject } from '../types';

interface UnitProjectsSectionProps {
  projects: UnitProject[];
}

export const UnitProjectsSection: React.FC<UnitProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-content-primary">
          Showcase Karya & Proyek Unggulan
        </h3>
        <p className="text-sm text-content-secondary font-body">
          Rekapitulasi pencapaian dan proyek referensi yang ditangani.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-xl border border-borderToken-subtle bg-bg-elevated hover:border-accent-primary/40 transition-all flex flex-col md:flex-row"
          >
            {proj.imageUrl && (
              <div className="relative w-full md:w-48 h-48 bg-bg-primary flex-shrink-0 overflow-hidden">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex flex-col justify-between space-y-4 flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-content-tertiary">
                  <span>{proj.category}</span>
                  <span>{proj.year}</span>
                </div>
                <h4 className="font-heading font-bold text-content-primary text-lg group-hover:text-accent-primary transition-colors">
                  {proj.title}
                </h4>
              </div>

              <div className="pt-3 border-t border-borderToken-subtle">
                <span className="inline-block text-xs font-body text-content-secondary">
                  ⭐ <strong className="text-content-primary font-medium">{proj.highlight}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
