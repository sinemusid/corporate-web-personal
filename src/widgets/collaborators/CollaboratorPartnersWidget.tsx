'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CollaboratorPartners, CollaboratorSkeleton, useCollaborator } from '@/features/collaborators';

export const CollaboratorPartnersWidget: React.FC = () => {
  const { partnersData, isLoading } = useCollaborator();

  if (isLoading || !partnersData) {
    return (
      <SectionWrapper id="collaborators" className="py-16">
        <CollaboratorSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="collaborators" className="py-16">
      <CollaboratorPartners data={partnersData} />
    </SectionWrapper>
  );
};
