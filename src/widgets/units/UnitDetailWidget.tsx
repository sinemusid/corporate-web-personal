import React from 'react';
import {
  UnitHeroBanner,
  UnitStatsSection,
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

      {/* 2. Pilar Kapabilitas Section */}
      <section id="capabilities" className="w-full bg-white bg-white-pattern bg-repeat py-12 sm:py-16 px-6 sm:px-12">
        <div className="w-full">
          <UnitCapabilitiesSection unitTitle={unit.title} capabilities={unit.capabilities} />
        </div>
      </section>

      {/* 3. Vibrant Blue Stats Banner Section (Below Pilar Kapabilitas) */}
      <UnitStatsSection stats={unit.stats} />

      {/* 4. Showcase Proyek Unggulan Section */}
      <section className="w-full bg-white bg-white-pattern bg-repeat py-12 sm:py-16 px-6 sm:px-12">
        <div className="w-full">
          <UnitProjectsSection projects={unit.featuredProjects} />
        </div>
      </section>

      {/* 4. Alur Kerja & Kolaborasi Section */}
      <section className="w-full bg-white bg-white-pattern bg-repeat py-12 sm:py-16 px-6 sm:px-12">
        <div className="w-full">
          <UnitWorkflowSection workflow={unit.workflow} />
        </div>
      </section>

      {/* 5. Bottom Navigation CTA Section */}
      <section className="w-full bg-white bg-white-pattern bg-repeat pt-8 pb-12 sm:pb-16 px-6 sm:px-12">
        <div className="w-full">
          <UnitCtaSection unitTitle={unit.title} />
        </div>
      </section>
    </div>
  );
};



