import { BaseEntity } from '@/types';

export interface EcosystemNode extends BaseEntity {
  title: string;
  category: string;
  description: string;
  icon?: string;
}

export interface EcosystemFlowStep {
  stepNumber: number;
  title: string;
  description: string;
  unitInvolved: string;
}
