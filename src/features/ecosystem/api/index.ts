import { MOCK_ECOSYSTEM_NODES, MOCK_ECOSYSTEM_FLOW } from '../constants/ecosystem-mock';
import { mapEcosystemNodes, mapEcosystemFlow } from './data-mapper';

export async function fetchEcosystemNodes() {
  return mapEcosystemNodes(MOCK_ECOSYSTEM_NODES);
}

export async function fetchEcosystemFlow() {
  return mapEcosystemFlow(MOCK_ECOSYSTEM_FLOW);
}
