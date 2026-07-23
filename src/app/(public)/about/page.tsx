'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

// Feature Imports exclusively via Public API Gates (No deep imports)
import {
  AboutCompany,
  VisionMissionValue,
  NumberProjects,
  useCompany,
} from '@/features/company';

import {
  EcosystemFlow,
  useEcosystem,
} from '@/features/ecosystem';

import {
  RoadmapTimeline,
  useRoadmap,
} from '@/features/career';

import {
  DesignStructure,
  OurTeamGrid,
  useTeam,
} from '@/features/team';

import {
  LayananKamiGrid,
  useServices,
} from '@/features/services';

import {
  PortfolioGrid,
  PortfolioFilter,
  usePortfolio,
  usePortfolioFilter,
} from '@/features/portfolio';

export default function AboutUsPage() {
  const { info, stats } = useCompany();
  const { flow } = useEcosystem();
  const { roadmap } = useRoadmap();
  const { members, structure } = useTeam();
  const { services } = useServices();
  const { items } = usePortfolio();
  const { selectedCategory, setSelectedCategory, filteredItems } = usePortfolioFilter(items);

  return (
    <div className="space-y-16 py-12">
      {/* 1. About Us Header & 3 Value Cards */}
      {info && (
        <SectionWrapper id="about-info">
          <AboutCompany info={info} />
        </SectionWrapper>
      )}

      {/* 2. Visi Misi & Social Channels */}
      {info && (
        <SectionWrapper id="vision-mission">
          <VisionMissionValue info={info} />
        </SectionWrapper>
      )}

      {/* 3. Number Projects / Stats (5 items) */}
      <SectionWrapper id="stats">
        <NumberProjects stats={stats} />
      </SectionWrapper>

      {/* 4. Bagaimana Kami Bekerja (Ecosystem Flow) */}
      <SectionWrapper id="how-we-work">
        <EcosystemFlow flow={flow} />
      </SectionWrapper>

      {/* 5. Leadership Team */}
      <SectionWrapper id="leadership">
        <OurTeamGrid members={members} />
      </SectionWrapper>

      {/* 6. Design Structure (Org Chart) */}
      <SectionWrapper id="structure">
        <DesignStructure structure={structure} />
      </SectionWrapper>

      {/* 7. Layanan Kami (Services) */}
      <SectionWrapper id="services">
        <div className="space-y-8 my-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Layanan Kami</h2>
          <LayananKamiGrid services={services} />
        </div>
      </SectionWrapper>

      {/* 8. Roadmap */}
      <SectionWrapper id="roadmap">
        <RoadmapTimeline roadmap={roadmap} />
      </SectionWrapper>

      {/* 9. Karya Kami (Portfolio) */}
      <SectionWrapper id="portfolio">
        <div className="space-y-6 my-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Karya Kami</h2>
            <PortfolioFilter
              currentCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <PortfolioGrid items={filteredItems} />
        </div>
      </SectionWrapper>
    </div>
  );
}


