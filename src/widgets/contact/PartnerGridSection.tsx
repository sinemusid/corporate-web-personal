'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { PagePartnerGrid, ContactSkeleton, useContactForm } from '@/features/contact';

export const PartnerGridSection: React.FC = () => {
  const { partners, isLoading } = useContactForm();

  return (
    <div>
      <section className="py-20 text-center space-y-4 max-w-4xl mx-auto px-4">
        <span className="text-xs font-mono text-red-500 uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded border border-red-900/50">
          Sinemus Alliance Network
        </span>
        <h1 className="text-4xl font-extrabold text-white">Collaborator & Partners</h1>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">
          Sinergi bersama mitra strategis untuk memperkuat dampak ekosistem perfilman Indonesia.
        </p>
      </section>

      <SectionWrapper darkBg>
        {isLoading ? <ContactSkeleton /> : <PagePartnerGrid partners={partners} />}
      </SectionWrapper>
    </div>
  );
};
