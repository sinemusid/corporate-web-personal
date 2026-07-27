'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ContactCompanyForm, ContactSkeleton, useContact } from '@/features/contact';

export const ContactCompanyWidget: React.FC = () => {
  const { contactCompany, isLoading, isSubmitting, isSuccess, statusMessage, handleSubmit, resetFormState } =
    useContact();

  if (isLoading || !contactCompany) {
    return (
      <SectionWrapper id="contact" className="py-8">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="py-8">
      <ContactCompanyForm
        data={contactCompany}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        statusMessage={statusMessage}
        onReset={resetFormState}
      />
    </SectionWrapper>
  );
};
