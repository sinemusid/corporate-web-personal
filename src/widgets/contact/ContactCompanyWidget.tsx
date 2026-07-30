'use client';

import React from 'react';
import { SectionWrapper } from '@/components/common/SectionWrapper';
import { ContactCompanyForm, ContactSkeleton, useContact } from '@/features/contact';

export const ContactCompanyWidget: React.FC = () => {
  const { contactCompany, isLoading, isSubmitting, isSuccess, statusMessage, handleSubmit, resetFormState } =
    useContact();

  if (isLoading || !contactCompany) {
    return (
      <SectionWrapper id="contact" className="w-full min-h-screen lg:h-screen min-h-[650px] flex items-center justify-center pt-20 pb-8">
        <ContactSkeleton />
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="contact" className="w-full min-h-screen lg:h-screen min-h-[650px] flex items-center justify-center pt-20 pb-8">
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
