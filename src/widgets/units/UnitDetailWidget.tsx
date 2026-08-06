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
    <div className="w-full space-y-16 sm:space-y-20 lg:space-y-24 pb-20">
      {/* Full Viewport Width Edge-to-Edge Hero Banner */}
      <UnitHeroBanner unit={unit} />

      {/* Main Content Sections - Perfectly Aligned with Navbar & Hero Banner (px-6 sm:px-12) */}
      <div className="w-full px-6 sm:px-12 space-y-16 sm:space-y-20 lg:space-y-24">
        <div id="capabilities">
          <UnitCapabilitiesSection unitTitle={unit.title} capabilities={unit.capabilities} />
        </div>
        <UnitProjectsSection projects={unit.featuredProjects} />
        <UnitWorkflowSection workflow={unit.workflow} />
        <UnitCtaSection unitTitle={unit.title} />
      </div>
    </div>
  );
};



