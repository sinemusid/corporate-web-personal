import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ContactCompanyForm, fetchContactCompany } from '@/features/contact';

export const ContactCompanyWidget = async () => {
  const contactCompany = await fetchContactCompany();

  return (
    <SectionWrapper id="contact" className="w-full flex items-center justify-center">
      <ContactCompanyForm data={contactCompany} />
    </SectionWrapper>
  );
};

