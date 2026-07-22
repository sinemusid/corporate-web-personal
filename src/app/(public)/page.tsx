'use client';

import React from 'react';
import Link from 'next/link';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/Button';

// Features Imports exclusively via Public API Gates
import { WhoWeAre, useCompany } from '@/features/company';
import { EcosystemDiagram, EcosystemFlow, useEcosystem } from '@/features/ecosystem';
import { UnitGrid, useUnits } from '@/features/units';

export default function LandingPage() {
  const { info } = useCompany();
  const { nodes, flow } = useEcosystem();
  const { units } = useUnits();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center space-y-8">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>The Indonesian Cinematic Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Membangun Masa Depan Sinema & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-300">Ekosistem Kreatif</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Sinemus Indonesia mengintegrasikan eksibisi, produksi original studio, inkubasi talenta, dan jaringan komunitas seni dalam satu ruang kolaborasi.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/units">
            <Button size="lg" variant="primary">
              Jelajahi Unit Bisnis
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="secondary">
              Pelajari Tentang Kami
            </Button>
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      {info && (
        <SectionWrapper id="who-we-are" darkBg>
          <WhoWeAre info={info} />
        </SectionWrapper>
      )}

      {/* Our Ecosystem & Flow */}
      <SectionWrapper id="ecosystem">
        <EcosystemDiagram nodes={nodes} />
        <EcosystemFlow flow={flow} />
      </SectionWrapper>

      {/* Our Unit Overview */}
      <SectionWrapper id="units" darkBg>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-white">4 Pilar Unit Bisnis</h2>
          <p className="text-sm text-zinc-400">
            Portofolio unit independen yang menopang seluruh siklus kreasi audio-visual.
          </p>
        </div>
        <UnitGrid units={units} />
      </SectionWrapper>
    </div>
  );
}
