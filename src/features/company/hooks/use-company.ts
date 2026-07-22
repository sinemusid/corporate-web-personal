'use client';

import { useState, useEffect } from 'react';
import { CompanyInfo, CompanyStat } from '../types';
import { fetchCompanyInfo, fetchCompanyStats } from '../api';

export function useCompany() {
  const [info, setInfo] = useState<CompanyInfo | null>(null);
  const [stats, setStats] = useState<CompanyStat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [infoData, statsData] = await Promise.all([
          fetchCompanyInfo(),
          fetchCompanyStats(),
        ]);
        setInfo(infoData);
        setStats(statsData);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { info, stats, isLoading };
}
