'use client';

import React from 'react';
import { CollaboratorPartnersData } from '../types';
import { PartnerGridSection } from './PartnerGridSection';

interface CollaboratorPartnersProps {
  data: CollaboratorPartnersData;
}

export const CollaboratorPartners: React.FC<CollaboratorPartnersProps> = ({ data }) => {
  return (
    <section 
      className="relative overflow-hidden rounded-3xl bg-bg-elevated/40 p-5 sm:p-10 md:p-14 max-w-6xl mx-auto backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12"
      aria-label="Mitra dan Kolaborator Sinemus"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-subtle/15 rounded-full blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Main Header */}
      <header className="space-y-3 max-w-3xl mx-auto flex flex-col items-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-content-primary uppercase tracking-tight leading-tight">
          {data.heading}
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-body text-content-secondary font-light leading-relaxed max-w-2xl mx-auto">
          {data.subheading}
        </p>
      </header>

      {/* Unified Section 1: Strategic Collaborators (10 items -> 2 inline rows x 5 logos) */}
      <PartnerGridSection
        title={data.collaboratorsHeading || 'Mitra & Kolaborator Strategis'}
        items={data.collaborators}
        columnsDesktop={5}
      />

      {/* Unified Section 2: Production Vendors (4 items -> 1 inline row x 4 logos) */}
      <PartnerGridSection
        title={data.vendorsHeading || 'Mitra Vendor & Produksi'}
        items={data.vendors}
        columnsDesktop={4}
      />
    </section>
  );
};

