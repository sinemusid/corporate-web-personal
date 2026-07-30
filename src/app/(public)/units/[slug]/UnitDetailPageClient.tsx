'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { UnitHeroBanner, useUnitDetail, UnitSkeleton } from '@/features/units';

interface UnitDetailPageClientProps {
  params: Promise<{
    slug: string;
  }>;
}

export const UnitDetailPageClient: React.FC<UnitDetailPageClientProps> = ({ params }) => {
  const resolvedParams = use(params);
  const { unit, isLoading } = useUnitDetail(resolvedParams.slug);

  if (!isLoading && !unit) {
    notFound();
  }

  return (
    <SectionWrapper>
      {isLoading || !unit ? (
        <UnitSkeleton />
      ) : (
        <div className="space-y-12">
          <UnitHeroBanner unit={unit} />

          <div className="bg-bg-elevated border border-borderToken-subtle rounded-xl p-8 space-y-6">
            <h3 className="text-2xl font-heading font-bold text-content-primary">Kapabilitas & Layanan Utama {unit.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {unit.features.map((feat: string, idx: number) => (
                <div key={idx} className="p-4 bg-bg-primary border border-borderToken-subtle rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded bg-accent-subtle text-content-primary font-mono font-bold flex items-center justify-center text-xs border border-borderToken-subtle">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-semibold text-content-primary text-sm">{feat}</h4>
                  <p className="text-xs font-body text-content-secondary">Layanan spesialisasi terintegrasi standar industri.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-borderToken-subtle">
            <Link href="/units">
              <Button variant="secondary" size="sm">
                ← Kembali ke Hub Unit
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Konsultasikan Project Unit Ini
              </Button>
            </Link>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
};
