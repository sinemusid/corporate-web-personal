'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { UnitHeroBanner, useUnitDetail, UnitSkeleton } from '@/features/units';

interface UnitDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function UnitDetailPage({ params }: UnitDetailPageProps) {
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

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white">Kapabilitas & Layanan Utama {unit.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {unit.features.map((feat, idx) => (
                <div key={idx} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg space-y-2">
                  <div className="w-8 h-8 rounded bg-red-600/20 text-red-500 font-mono font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{feat}</h4>
                  <p className="text-xs text-zinc-400">Layanan spesialisasi terintegrasi standar industri.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-6 border-t border-zinc-800">
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
}
