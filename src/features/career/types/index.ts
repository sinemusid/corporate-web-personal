import { BaseEntity } from '@/types';

export interface RoadmapMilestone extends BaseEntity {
  phase: string;
  year: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface CareerOpportunity extends BaseEntity {
  title: string;
  department: string;
  type: string;
  location: string;
}
