'use client';

import { useState, useEffect } from 'react';
import { JoinMissionData, ContactCompanyData, ContactFormData } from '../types';
import { fetchJoinMission, fetchContactCompany, submitContactForm } from '../api';

export function useContact() {
  const [joinMission, setJoinMission] = useState<JoinMissionData | null>(null);
  const [contactCompany, setContactCompany] = useState<ContactCompanyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const [missionData, companyData] = await Promise.all([
          fetchJoinMission(),
          fetchContactCompany(),
        ]);
        setJoinMission(missionData);
        setContactCompany(companyData);
      } catch (err) {
        console.error('Failed loading contact content:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  const handleSubmit = async (formData: ContactFormData): Promise<boolean> => {
    try {
      setIsSubmitting(true);
      setStatusMessage(null);
      const ok = await submitContactForm(formData);
      if (ok) {
        setIsSuccess(true);
        return true;
      }
      return false;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan. Silakan coba lagi.';
      setStatusMessage(msg);
      setIsSuccess(false);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFormState = () => {
    setIsSuccess(false);
    setStatusMessage(null);
  };

  return {
    joinMission,
    contactCompany,
    isLoading,
    isSubmitting,
    isSuccess,
    statusMessage,
    handleSubmit,
    resetFormState,
  };
}
