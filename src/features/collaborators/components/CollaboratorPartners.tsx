import React from 'react';
import { CollaboratorPartnersData } from '../types';
import { PartnerGridSection } from './PartnerGridSection';

interface CollaboratorPartnersProps {
  data: CollaboratorPartnersData;
}

export const CollaboratorPartners: React.FC<CollaboratorPartnersProps> = ({ data }) => {
  return (
    <section 
      className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-8 sm:space-y-12"
      aria-label="Mitra dan Kolaborator Sinemus"
    >
      {/* Main Header */}
      <header className="space-y-3 max-w-3xl mx-auto flex flex-col items-center z-10">
        <span className="px-3 py-1 text-[11px] font-mono font-medium rounded-full bg-blue-50/80 text-blue-700 border border-blue-200/60 uppercase tracking-wider">
          EKOSISTEM &amp; JARINGAN SINEMUS
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-slate-900 uppercase tracking-tight leading-tight">
          {data.heading}
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-body text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
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

