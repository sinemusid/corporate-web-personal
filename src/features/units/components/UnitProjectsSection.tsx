import React from 'react';
import Image from 'next/image';
import { FadeIn, FadeInStagger, MotionCard } from '@/components/motion';
import { UnitProject } from '../types';

interface UnitProjectsSectionProps {
  projects: UnitProject[];
}

export const UnitProjectsSection: React.FC<UnitProjectsSectionProps> = ({ projects }) => {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="space-y-6">
      <FadeIn direction="up" className="flex flex-col space-y-1.5 border-l-4 border-blue-600 pl-4">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-slate-900">
          Showcase Karya &amp; Proyek Unggulan
        </h3>
        <p className="text-sm text-slate-600 font-body">
          Rekapitulasi pencapaian dan proyek referensi yang ditangani.
        </p>
      </FadeIn>

      <FadeInStagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <MotionCard
            key={idx}
            className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white hover:border-blue-400/60 hover:shadow-md transition-colors duration-300 flex flex-col md:flex-row shadow-xs"
          >
            {proj.imageUrl && (
              <div className="relative w-full md:w-48 h-48 bg-slate-100 flex-shrink-0 overflow-hidden">
                <Image
                  src={proj.imageUrl}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6 flex flex-col justify-between space-y-4 flex-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{proj.category}</span>
                  <span>{proj.year}</span>
                </div>
                <h4 className="font-heading font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h4>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="inline-block text-xs font-body text-slate-600">
                  <strong className="text-slate-900 font-semibold">{proj.highlight}</strong>
                </span>
              </div>
            </div>
          </MotionCard>
        ))}
      </FadeInStagger>
    </section>
  );
};
