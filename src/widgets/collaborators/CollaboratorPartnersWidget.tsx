import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { CollaboratorPartners, fetchCollaboratorPartners } from '@/features/collaborators';

export const CollaboratorPartnersWidget = async () => {
  const partnersData = await fetchCollaboratorPartners();

  return (
    <SectionWrapper isTopSection darkBg id="collaborators">
      <CollaboratorPartners data={partnersData} />
    </SectionWrapper>
  );
};

