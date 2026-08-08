import React from 'react';
import {
  UnitHeroBanner,
  UnitCapabilitiesSection,
  UnitProjectsSection,
  UnitWorkflowSection,
  UnitCtaSection,
  BusinessUnit,
} from '@/features/units';

interface UnitDetailWidgetProps {
  unit: BusinessUnit;
}

export const UnitDetailWidget: React.FC<UnitDetailWidgetProps> = ({ unit }) => {
  return (
    <div className="w-full pb-16">
      {/* 1. Full Viewport Width Edge-to-Edge Dark Hero Banner */}
      <UnitHeroBanner unit={unit} />

      {/* 2. Pilar Kapabilitas Section - White Surface */}
      <section id="capabilities" className="w-full bg-white py-12 sm:py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <UnitCapabilitiesSection unitTitle={unit.title} capabilities={unit.capabilities} />
        </div>
      </section>

      {/* 3. Showcase Proyek Unggulan Section - Warm Slate Canvas */}
      <section className="w-full bg-slate-50/70 border-y border-slate-200/60 py-12 sm:py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <UnitProjectsSection projects={unit.featuredProjects} />
        </div>
      </section>

      {/* 4. Alur Kerja & Kolaborasi Section - Soft Blue Accent Tint */}
      <section className="w-full bg-blue-50/20 py-12 sm:py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <UnitWorkflowSection workflow={unit.workflow} />
        </div>
      </section>

      {/* 5. Bottom Navigation CTA Section */}
      <section className="w-full bg-white pt-8 pb-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <UnitCtaSection unitTitle={unit.title} />
        </div>
      </section>
    </div>
  );
};



