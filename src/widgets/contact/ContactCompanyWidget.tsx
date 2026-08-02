'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ContactCompanyForm, ContactSkeleton, useContact } from '@/features/contact';

export const ContactCompanyWidget: React.FC = () => {
  const { contactCompany, isLoading, isSubmitting, isSuccess, statusMessage, handleSubmit, resetFormState } =
    useContact();

  if (isLoading || !contactCompany) {
    return (
      <SectionWrapper id="contact" className="w-full flex items-center justify-center">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="w-full flex items-center justify-center">
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
