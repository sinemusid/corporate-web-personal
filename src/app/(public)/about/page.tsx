'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';

// Feature Imports exclusively via Public API Gates
import {
  AboutCompany,
  VisionMissionValue,
  NumberProjects,
  MilestonesTimeline,
  useCompany,
  useMilestones,
} from '@/features/company';

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
  const { milestones } = useMilestones();
  const { roadmap } = useRoadmap();
  const { members, structure } = useTeam();
  const { services } = useServices();
  const { items } = usePortfolio();
  const { selectedCategory, setSelectedCategory, filteredItems } = usePortfolioFilter(items);

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="py-16 text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded border border-red-900/50">
          About Sinemus Indonesia
        </span>
        <h1 className="text-4xl font-extrabold text-white">Profil & Ekosistem Perusahaan</h1>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">
          Mengenal lebih dekat visi, jajaran kepemimpinan, milestone, layanan, dan katalog karya Sinemus.
        </p>
      </section>

      {/* About Company & Vision */}
      {info && (
        <SectionWrapper darkBg>
          <AboutCompany info={info} />
          <div className="mt-16">
            <VisionMissionValue info={info} />
          </div>
        </SectionWrapper>
      )}

      {/* Number Projects / Stats */}
      <SectionWrapper>
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-white">Pencapaian Dalam Angka</h3>
        </div>
        <NumberProjects stats={stats} />
      </SectionWrapper>

      {/* Milestones & Roadmap */}
      <SectionWrapper darkBg>
        <MilestonesTimeline milestones={milestones} />
        <div className="mt-20">
          <RoadmapTimeline roadmap={roadmap} />
        </div>
      </SectionWrapper>

      {/* Design Structure & Our Team */}
      <SectionWrapper>
        <DesignStructure structure={structure} />
        <div className="mt-20">
          <OurTeamGrid members={members} />
        </div>
      </SectionWrapper>

      {/* Layanan Kami */}
      <SectionWrapper darkBg>
        <LayananKamiGrid services={services} />
      </SectionWrapper>

      {/* Karya Kami (Portfolio) */}
      <SectionWrapper id="portfolio">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-3xl font-extrabold text-white">Karya Kami (Portofolio)</h2>
          <p className="text-xs text-zinc-400">
            Kumpulan film feature, dokumenter, dan project komersial kreasi ekosistem Sinemus.
          </p>
        </div>

        <PortfolioFilter
          currentCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <PortfolioGrid items={filteredItems} />
      </SectionWrapper>
    </div>
  );
}
