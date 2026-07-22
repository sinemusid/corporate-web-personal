'use client';

import { useState, useEffect } from 'react';
import { ServiceItem } from '../types';
import { fetchServices } from '../api';

export function useServices() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchServices();
        setServices(data);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { services, isLoading };
}
