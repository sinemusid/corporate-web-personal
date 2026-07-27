'use client';

import { useState, useEffect } from 'react';
import { CollaboratorPartnersData } from '../types';
import { fetchCollaboratorPartners } from '../api';

export function useCollaborator() {
  const [partnersData, setPartnersData] = useState<CollaboratorPartnersData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        const data = await fetchCollaboratorPartners();
        setPartnersData(data);
      } catch (err) {
        console.error('Failed loading collaborator partners:', err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return {
    partnersData,
    isLoading,
  };
}
