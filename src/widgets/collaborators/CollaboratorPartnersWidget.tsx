'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CollaboratorPartners, CollaboratorSkeleton, useCollaborator } from '@/features/collaborators';

export const CollaboratorPartnersWidget: React.FC = () => {
  const { partnersData, isLoading } = useCollaborator();

  if (isLoading || !partnersData) {
    return (
      <SectionWrapper isTopSection id="collaborators">
        <CollaboratorSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper isTopSection id="collaborators">
      <CollaboratorPartners data={partnersData} />
    </SectionWrapper>
  );
};
