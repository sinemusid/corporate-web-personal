'use client';

import { useState, useEffect } from 'react';
import { EcosystemNode, EcosystemFlowStep } from '../types';
import { fetchEcosystemNodes, fetchEcosystemFlow } from '../api';

export function useEcosystem() {
  const [nodes, setNodes] = useState<EcosystemNode[]>([]);
  const [flow, setFlow] = useState<EcosystemFlowStep[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [nodesData, flowData] = await Promise.all([
          fetchEcosystemNodes(),
          fetchEcosystemFlow(),
        ]);
        setNodes(nodesData);
        setFlow(flowData);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return { nodes, flow, isLoading };
}
