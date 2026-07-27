'use client';

import React from 'react';
import { CollaboratorPartnersData } from '../types';

interface CollaboratorPartnersProps {
  data: CollaboratorPartnersData;
}

export const CollaboratorPartners: React.FC<CollaboratorPartnersProps> = ({ data }) => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <h1 className="text-4xl sm:text-5xl font-heading font-black text-content-primary uppercase tracking-tight">
          {data.heading}
        </h1>
        <p className="text-sm font-body text-content-secondary font-light leading-relaxed">
          {data.subheading}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.partners.map((partner) => (
          <div
            key={partner.id}
            className="p-6 rounded-xl border border-borderToken-subtle bg-bg-elevated space-y-2 hover:border-borderToken-default transition-colors backdrop-blur-sm"
          >
            <span className="text-xs font-mono font-semibold text-content-secondary uppercase tracking-wider">
              {partner.category}
            </span>
            <h3 className="text-xl font-heading font-bold text-content-primary">{partner.name}</h3>
            <p className="text-xs font-body text-content-secondary font-light leading-relaxed">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
