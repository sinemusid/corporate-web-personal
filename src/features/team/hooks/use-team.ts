'use client';

import { useState, useEffect } from 'react';
import { TeamMember, StructureNode } from '../types';
import { fetchTeamMembers, fetchDesignStructure } from '../api';

export function useTeam() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [structure, setStructure] = useState<StructureNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [membersData, structureData] = await Promise.all([
          fetchTeamMembers(),
          fetchDesignStructure(),
        ]);
        setMembers(membersData);
        setStructure(structureData);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  return { members, structure, isLoading };
}
