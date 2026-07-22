import { EcosystemNode, EcosystemFlowStep } from '../types';

export function mapEcosystemNodes(data: unknown[]): EcosystemNode[] {
  return data as EcosystemNode[];
}

export function mapEcosystemFlow(data: unknown[]): EcosystemFlowStep[] {
  return data as EcosystemFlowStep[];
}
